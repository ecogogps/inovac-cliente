import React from "react";
import { cn } from "~/lib/utils";

interface DecoratedTextBoxProps {
  children: React.ReactNode;
  className?: string;
  parenthesisColor?: string;
}

export function DecoratedTextBox({ children, className, parenthesisColor = "currentColor" }: DecoratedTextBoxProps) {
  return (
    <div className={cn(
      "relative flex items-center justify-center my-4",
      className
    )}>
      <div className="flex items-center">
        <svg
          width="52"
          height="335"
          viewBox="0 0 52.05 335"
          className="h-[200px] md:h-full max-h-[25dvh] w-auto "
          preserveAspectRatio="none"
          style={{ color: parenthesisColor}}
        >
          <path fill="currentColor" d="M26,25H52V0H0V50L0.05,50V54.95L26.05,69.95V50H26V25Z" />
          <path fill="currentColor" d="M26.05,100L0.05,84.95V115L26.05,130V100Z" />
          <path fill="currentColor" d="M26.05,310V160.05L0.05,145V335H52.05V310H26.05Z" />
        </svg>
      </div>

      <div className="py-4 px-8">
        { children }
      </div>

      <div className="flex items-center">
        <svg
          width="52"
          height="335"
          viewBox="0 0 52.05 335"
          className="h-[200px] md:h-full max-h-[25dvh] w-auto  scale-x-[-1] scale-y-[-1]"
          preserveAspectRatio="none"
          style={{ color: parenthesisColor}}
        >
          <path fill="currentColor" d="M26,25H52V0H0V50L0.05,50V54.95L26.05,69.95V50H26V25Z" />
          <path fill="currentColor" d="M26.05,100L0.05,84.95V115L26.05,130V100Z" />
          <path fill="currentColor" d="M26.05,310V160.05L0.05,145V335H52.05V310H26.05Z" />
        </svg>
      </div>
    </div>
  );
}