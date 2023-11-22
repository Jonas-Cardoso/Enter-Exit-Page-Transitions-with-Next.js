"use client";
import {
  LOADING_STATES,
  useNavigationContext,
} from "@/context/navigation.context";
import Link from "next/link";
import { useEffect } from "react";

type NavigateProps = {
  href: string;
  children: React.ReactNode;
};

export default function Navigate({ href, children }: NavigateProps) {
  const { goToRoute } = useNavigationContext();
  const { loading, setLoading } = useNavigationContext();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    goToRoute(href);
  };

  useEffect(() => {
    return () => {
      setLoading(LOADING_STATES.LOADED);
    };
  }, []);

  return (
    <Link prefetch passHref href={href} legacyBehavior>
      <a onClick={handleClick}>{children}</a>
    </Link>
  );
}
