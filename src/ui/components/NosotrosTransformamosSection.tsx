'use client'
import { use, useEffect } from "react";
import Image from "next/image";
import { Carouselmp, CarouselContent, CarouselItem, CarouselNavigation, CarouselIndicator, CarouselAutoplayOnView } from "~/ui/primitives/carouselmp";
import { TiltEffect } from "./TiltEffect";

export default function NosotrosTransformamosSection() {

  return (
    <section className="relative w-full overflow-hidden py-4 md:py-12 ">
      
      <div className="absolute inset-auto -z-10 w-[100%] h-[100%] right-1/4 grayscale">
        <Image
          src="/isotypePatternBg.svg"
          alt="Pattern Background"
          fill
          className="object-cover opacity-15 hidden"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-12 grid grid-cols-3 md:grid-cols-4 gap-8 items-center">

        <div className="relative col-start-1 col-span-3 md:col-span-2">
          <div className="relative aspect-[1/1] rounded-md overflow-hidden">
            <Carouselmp className="absolute
               top-0 left-0 w-full h-full aspect-[4/3] grid items-center
              "
              autoPlay
              interval={3000}
              >
              <CarouselContent className="">
                <CarouselItem className="aspect-[4/3] relative">
                  <Image
                    src="/carrusel1.jpg"
                    alt="Slide 1"
                    fill
                    className="object-cover pointer-events-none"
                    priority
                  />
                </CarouselItem>
                <CarouselItem className="aspect-[4/3] relative">
                  <Image
                    src="/carrusel2.jpg"
                    alt="Slide 2"
                    fill
                    className="object-cover pointer-events-none"
                    priority
                  />
                </CarouselItem>
                <CarouselItem className="aspect-[4/3] relative">
                  <Image
                    src="/carrusel3.jpg"
                    alt="Slide 3"
                    fill
                    className="object-cover pointer-events-none"
                    priority
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselIndicator />
              <CarouselAutoplayOnView interval={3000} maxLoops={3} />
            </Carouselmp>
          </div>    
        </div>

        <div className="relative text-left row-start-2 md:row-start-1 col-start-1 col-span-3 md:col-start-3 w-auto select-none">
          
          <p className="uppercase text-lg md:text-3xl font-bold">transformar</p>
            <h2 className="uppercase text-4xl md:text-5xl lg:text-8xl font-black tracking-tight">
              Ideas
            </h2>
          <p className="uppercase text-lg md:text-3xl font-bold">en realidades que</p>
          <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight">superan</h2>
          <p className="uppercase text-lg md:text-3xl font-bold">tus</p>
          <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight">expectativas</h2>
        </div>

      </div>
    </section>
  );
}
