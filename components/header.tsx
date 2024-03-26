"use client";

import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./logo";

interface IHeading {
  title: string;
}

export function Header({ children }: { children: React.ReactNode }) {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background bg-black sticky top-0 flex items-center w-full p-3 transition-colors duration-300",
        scrolled && "bg-black/20 backdrop-blur-xl"
      )}
    >
      <Logo />
      {children}
    </div>
  );
}
