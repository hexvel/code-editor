"use client";

import useScrollTop from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./logo";

export function Header({ children }: { children: React.ReactNode }) {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "z-50 bg-background bg-[#000000] sticky top-0 flex items-center w-full p-3 transition-colors duration-300",
        scrolled && "bg-[#2a2734]/20 backdrop-blur-xl"
      )}
    >
      <Logo />
      {children}
    </div>
  );
}
