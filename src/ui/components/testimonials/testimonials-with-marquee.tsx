"use client";

import { animate } from "animejs";
import React, { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";
import {
  type TestimonialAuthor,
  TestimonialCard,
} from "~/ui/primitives/testimonial";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: {
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }[];
  className?: string;
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const marqueeElement = marqueeRef.current;
    const itemWidth = marqueeElement.scrollWidth / 4;

    const setupAnimation = () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }

      animationRef.current = animate(marqueeElement, {
        translateX: ["0px", `-${itemWidth}px`],
        duration: 40000,
        easing: "linear",
        loop: true,
      });

      if (isHoveredRef.current) {
        animationRef.current.pause();
      }
    };

    setupAnimation();

    const handleResize = () => {
      setupAnimation();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  return (
    <section
      className={cn(
        "",
        "",
        className,
      )}
    >
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div
            className="flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={marqueeRef}
              className="flex shrink-0 justify-around [gap:var(--gap)] flex-row"
              style={{ translate: "none" }}
            >
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard
                    // eslint-disable-next-line @eslint-react/no-array-index-key
                    key={`testimonial-${testimonial.author.name}-${setIndex}-${i}`}
                    {...testimonial}
                  />
                )),
              )}
            </div>
          </div>

          <div className=" pointer-events-none absolute inset-y-0 left-0 w-1/16 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/16 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  );
}
