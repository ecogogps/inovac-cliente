"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { CompanyLogoSVG } from "~/ui/icons/company-logo-svg";
import Image from "next/image";
import { TiltEffect } from "~/ui/components/TiltEffect";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import { Carouselmp, CarouselContent, CarouselItem, CarouselIndicator, CarouselAutoplayOnView } from "~/ui/primitives/carouselmp";

interface Props {
  content: {
    title: string;
    heroimage: string;
    text1?: string;
    text2?: string;
    image1: string;
    image2: string;
    image3: string;
    text3?: string;
    imageForText3: string;
    text4?: string;
    imageForText4: string;
    bracketSubtitle?: string;
    carousel: {
      carouselImg1: string,
      carouselImg2: string,
      carouselImg3: string,
      carouselImg4: string,
    }
  };
}

export default function AboutClient({ content }: Props ) {
  const ref = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 120%", "start -20%"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useSpring(rawOpacity, {
    stiffness: 500,
    damping: 20,
    mass: 0.1,
  });

  const [distance, setDistance] = useState(0);
  useEffect(() => {
    if (ref.current && targetRef.current) {
      const logoTop = ref.current.getBoundingClientRect().top;
      const targetTop = targetRef.current.getBoundingClientRect().top;
      setDistance(targetTop - logoTop);
    }
  }, []);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -100 + distance]);

  return (
    <main className="">
      <section id="features" className="relative py-8 md:py-12 overflow-hidden w-full aspect-[16/9]">
        <div className="absolute inset-0 z-[-10] opacity-75">
          
          <Image
            src={"/inovacLogoAboutBg@2x.webp"}
            alt="logo inovac background"
            width={1280}
            height={720}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <div className="">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
            { content.title }
            </h2>
          </div>
        </div>
      </section>

      <section id="" className="relative overflow-hidden h-full flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-[-10] flex items-center justify-center">            
          <Image
            src={content.heroimage}
            width={2000}
            height={2000}
            alt="isotype inovac"
            className="object-cover grayscale opacity-25"
            loading="eager"   
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col items-center text-center p-12">
            <p className="text-md md:text-xl font-normal md:font-semibold tracking-wide my-2 md:my-6">
            { content.text1}
            </p>
            <p className="text-md md:text-xl font-normal md:font-semibold tracking-wide my-2 md:my-6">
            { content.text2 }
            </p>

          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            <div
                key={`nosotros1`}
                className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-md"
                aria-label={`nosotros1`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 to-transparent" />
                  <Image
                    src={ content.image1 }
                    alt={`nosotros1`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            <div
                key={`nosotros2`}
                className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-md"
                aria-label={`nosotros2`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 to-transparent" />
                  <Image
                    src={ content.image2 }
                    alt={`nosotros2`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            <div
                key={`nosotros3`}
                className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-md"
                aria-label={`nosotros4`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 to-transparent" />
                  <Image
                    src={ content.image3 }
                    alt={`nosotros3`}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="relative w-full  py-12 md:py-16">
        <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-4 md:grid-rows-2 gap-4 gap-y-12 items-center">
          <motion.div 
            ref={ref}
            style={{ rotate, translateY, opacity, willChange: 'transform, opacity'}}
            className="absolute inset-0 -z-10 pointer-events-none">
            <CompanyLogoSVG className="w-full h-full opacity-45"/>
          </motion.div>

          <div className="relative text-justify col-start-1 col-span-4 md:col-span-2 w-auto select-none">
            <p className="text-base md:text-xl font-semibold ml-8 md:ml-12">
              { content.text3 }
            </p>
          </div>
          <div className="relative row-start-2 col-span-4 md:row-start-1 md:col-start-3 md:col-span-2">
            <TiltEffect
              className=""
              rotationFactor={10}
              isReverse={false}
              enable3D={false}
              springOptions={{ damping: 20, stiffness: 300 }}>
            <div className="relative z-10 aspect-[1/1] rounded-md overflow-hidden shadow-lg">
              <Image
                src= { content.imageForText3 } 
                alt="Main Architectural Shot"
                fill
                className="object-cover"
              />
            </div>
            </TiltEffect>
          </div>
          <div  className="relative text-justify row-start-3 col-start-1 col-span-4 md:row-start-2 md:col-start-3 md:col-span-2 w-auto select-none">
            <p className="text-base md:text-xl font-semibold ml-8 md:ml-12">
              {content.text4}
            </p>
          </div>
          <div className="relative col-start-1 col-span-4 md:row-start-2 md:col-span-2">
            <TiltEffect
              className=""
              rotationFactor={10}
              isReverse={false}
              enable3D={false}
              springOptions={{ damping: 20, stiffness: 300 }}>
            <div className="relative z-10 aspect-[1/1] rounded-md overflow-hidden shadow-lg">
              <Image
                src= { content.imageForText4 } 
                alt="Main Architectural Shot"
                fill
                className="object-cover"
              />
            </div>
            </TiltEffect>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 md:py-16">
        <div className="relative  mx-auto px-4 sm:px-6 lg:px-8">
        
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[100%] w-[100dvw] max-h-[calc(100%-20%)] bg-[url('/concreteTexture.webp')] bg-cover bg-no-repeat bg-center opacity-75">
          </div>
      
          <div className="mb-8 px-4 md:px-16 lg:px-20 items-center text-center">
            <DecoratedTextBox className="" parenthesisColor="var(--color-redinova)">
              <h2 className="text-lg md:text-2xl lg:text-3xl font-normal tracking-normal px-[10] md:px-[30] lg:px-[50]">
              { content.bracketSubtitle }

              </h2>
            </DecoratedTextBox>
          </div>
        </div>
      </section>

      <section id="" className="py-4 md:py-8">
        <div className="px-4 sm:px-6 lg:px-8 ">
        <div className="bg-[url('/logo Inovac Black.svg')]"> 
          </div>
            <div className="mb-8 flex flex-col items-center text-center">
            <h2 className="text-2xl font-extrabold tracking-normal md:text-4xl">
                Organigrama
            </h2>
          </div>
        </div>       

        <div className="relative overflow-hidden container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <Carouselmp className="relative border-1 border-redinova"
            autoPlay
            interval={3000}
            >
            <CarouselContent className="">
              <CarouselItem className="aspect-[16/9] relative">
                <Image
                  src={ content.carousel.carouselImg1 }
                  alt="Slide 1"
                  fill
                  className="object-cover pointer-events-none"
                  priority
                />
              </CarouselItem>
              <CarouselItem className="aspect-[16/9] relative">
                <Image
                  src={ content.carousel.carouselImg2 }
                  alt="Slide 2"
                  fill
                  className="object-cover pointer-events-none"
                  priority
                />
              </CarouselItem>
              <CarouselItem className="aspect-[16/9] relative">
                <Image
                  src={ content.carousel.carouselImg3 }
                  alt="Slide 3"
                  fill
                  className="object-cover pointer-events-none"
                  priority
                />
              </CarouselItem>
              <CarouselItem className="aspect-[16/9] relative">
                <Image
                  src={ content.carousel.carouselImg4 }
                  alt="Slide 4"
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
      </section> 
    </main>
);
}