"use client";

import { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "max-w-6xl w-full mx-auto px-4 sm:px-6 my-16 sm:my-24",
        className
      )}
    >
      <p
        style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
        className="text-2xl font-bold text-black dark:text-white lg:text-4xl xl:text-4xl leading-relaxed"
      >
        {children}
      </p>
    </div>
  );
};
