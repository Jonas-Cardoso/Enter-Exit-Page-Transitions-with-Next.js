"use client";
import {
  LOADING_STATES,
  useNavigationContext,
} from "@/context/navigation.context";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Loading = () => {
  const { loading, setLoading } = useNavigationContext();
  const background = useRef<HTMLDivElement>(null);

  const _init = () => {
    console.log("Initalized Loading Component");
    /*Add your initial state here */
    gsap.set(background.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  };

  const _enter = () => {
    console.log("Performing Loading in");
    /*Add your page enter animation*/
    gsap.to(background.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "power3.inOut",
    });
  };

  const _exit = () => {
    console.log("Performing Loading out");
    /*Add your page exit animations*/
    gsap.to(background.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        if (loading === LOADING_STATES.INIT) setLoading(LOADING_STATES.LOADED);
      },
    });
  };

  useEffect(() => {
    _init();
  }, []);

  useEffect(() => {
    loading === LOADING_STATES.INIT ? _exit() : null;
    loading === LOADING_STATES.LOADED ? _enter() : null;
    loading === LOADING_STATES.LOADING ? _exit() : null;
  }, [loading]);

  return (
    <div
      ref={background}
      className="h-screen w-screen fixed flex flex-col gap-4 items-center justify-center bg-white z-50"
    >
      <p className="text-2xl font-medium">Add Lottie Animation Here</p>
      <p className="text-lg font-medium">State: {loading}</p>
    </div>
  );
};

"use client";
import {
  LOADING_STATES,
  useNavigationContext,
} from "@/context/navigation.context";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Loading = () => {
  const { loading, setLoading } = useNavigationContext();
  const background = useRef<HTMLDivElement>(null);

  const _init = () => {
    console.log("Initalized Loading Component");
    /*Add your initial state here */
    gsap.set(background.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  };

  const _enter = () => {
    console.log("Performing Loading in");
    /*Add your page enter animation*/
    gsap.to(background.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 1,
      ease: "power3.inOut",
    });
  };

  const _exit = () => {
    console.log("Performing Loading out");
    /*Add your page exit animations*/
    gsap.to(background.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        if (loading === LOADING_STATES.INIT) setLoading(LOADING_STATES.LOADED);
      },
    });
  };

  useEffect(() => {
    _init();
  }, []);

  useEffect(() => {
    loading === LOADING_STATES.INIT ? _exit() : null;
    loading === LOADING_STATES.LOADED ? _enter() : null;
    loading === LOADING_STATES.LOADING ? _exit() : null;
  }, [loading]);

  return (
    <div
      ref={background}
      className="h-screen w-screen fixed flex flex-col gap-4 items-center justify-center bg-white z-50"
    >
      <p className="text-2xl font-medium">Add Lottie Animation Here</p>
    </div>
  );
};
