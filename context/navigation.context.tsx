"use client";
import { Loading } from "@/components/global/loading";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export enum LOADING_STATES {
  INIT = "INITIALIZED",
  LOADING = "PENDING",
  LOADED = "COMPLETE",
}

export interface NavigationContextType {
  goToRoute: (route: string) => void;
  loading: LOADING_STATES;
  setLoading: React.Dispatch<React.SetStateAction<LOADING_STATES>>;
}

export const NavigationContext = createContext<NavigationContextType>({
  goToRoute: (route: string) => {},
  loading: LOADING_STATES.INIT,
  setLoading: () => {},
});

export const NavigationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const router = useRouter();

  const [loading, setLoading] = useState<LOADING_STATES>(LOADING_STATES.INIT);
  const animationDuration = 1000;

  const goToRoute = async (path: string) => {
    setLoading(LOADING_STATES.LOADING);
    setTimeout(() => {
      router.push(path);
    }, animationDuration);
  };

  useEffect(() => {
    console.log("Loading is now: ", loading);
  }, [loading]);

  const contextValue = {
    goToRoute,
    loading,
    setLoading,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      <Loading />
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => useContext(NavigationContext);
