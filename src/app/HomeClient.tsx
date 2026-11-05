'use client'
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/ui/primitives/button";
import { categories, services } from "./mocks";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import ClientVision from "~/ui/components/ClientVisionSection";
import NosotrosTransformamosSection from "~/ui/components/NosotrosTransformamosSection";
import { TiltEffect } from "~/ui/components/TiltEffect";
import ElicromSection from "~/ui/components/ElicromSection";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  content: {
    title: string;
    highlightWord: string;
    banner1: string;
    banner2: string;
    bracketSubtitle1: string;
    bracketSubtitle1b: string
    bracketSubtitle2: string;
    bracketSubtitle3: string;
    subtitle1: string;
    finalTitle: string;
    finalSubtitle: string;
  }
}

export default function HomePage( { content }: Props ) {
  return (
    <>
      <main className="">
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-muted/25  py-24 md:py-32 to-background h-[80vh] flex flex-col items-center justify-center">          
          <div className="absolute inset-0 text-center z-[-10] mx-auto max-w-7xl max-h-dvh">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster="/inovacVideoBgPoster.webp"
              className="absolute inset-0 z-0 h-full w-full object-cover"
            >
              <source src="https://ucarecdn.com/867cab5c-bdaf-42b4-ade2-da7e53572d9c/" type="video/mp4"/>
              <source src="https://ucarecdn.com/62d55abb-157c-499f-8509-6e5d02e4d1d2/" type="video/webm"/>
            </video>
          </div>
          
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-1 lg:gap-12">

              <div className="flex flex-col justify-center space-y-6 gap-10 items-center">
                <div className="space-y-4 text-center">
                  <h1 className="text-4xl md:text-7xl font-bold md:tracking-tight text-foreground leading-[1.2] py-4 px-8 lg:px-18" >
                  { content.title } {' '}
                  <span className="remarkWord">
                    { content.highlightWord }
                  </span>
                  </h1>
                </div>

                <div className="flex flex-col gap-6 sm:flex-row center sm:justify-center">
                  <Link href="/contact">
                    <Button variant="default" size="lg" className="h-12 uppercase px-8">
                      Solicitar Asesoría
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        </section>

        <section id="features" className="relative py-12 md:py-16 overflow-hidden w-full aspect-[16/9]">
          <div className="absolute inset-0 z-[-10] opacity-70">
            <Image
              src={ "/isotypeInovacBg@2x.webp" }
              alt="isotype inovac"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-left justify-center h-full">
            <div className="mb-0 flex flex-col items-left text-center md:text-left p-12 md:pr-[45dvw]">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground md:text-end ">
              { content.banner1 }
              </h2>
            </div>
          </div>
        </section>

        <section id="" className="relative overflow-hidden w-full aspect-[16/9] flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-[-10] flex items-center justify-center">            
            <Image
              src={"/arquitectePlanBg.webp"}
              width={1000}
              height={720}
              alt="isotype inovac"
              className="w-full h-[75dvh] object-cover grayscale"
              loading="eager"   
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex flex-col items-center text-center p-12">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-normal text-foreground ">
              { content.banner2 } 
              </h2>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-16">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 px-4 md:px-16 lg:px-20 items-center text-center">
              <DecoratedTextBox className="" parenthesisColor="var(--color-redinova)">
                <h2 className="text-lg md:text-3xl lg:text-4xl font-thin tracking-normal px-[10] md:px-[30] lg:px-[50]">
                { content.bracketSubtitle1}
                <p className="text-stone-800 font-normal">
                  { content.bracketSubtitle1b }
                </p>
                </h2>
              </DecoratedTextBox>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-2xl font-extrabold tracking-tight md:text-4xl mb-8">
                Buscas un entorno:
              </h2>
              
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/services?category=${category.name.toLowerCase()}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-md "
                  aria-label={`Browse ${category.name} services`}
                >
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/15 to-transparent" />
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className={`absolute inset-0 z-10 flex ${category.labelStyle}`}>
                    <Image src={category.label} alt="" width={parseFloat(category.width)} height={parseFloat(category.heigth)} />
                  </div>
                </Link>
              ))}
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
                { content.bracketSubtitle2 }
                </h2>
              </DecoratedTextBox>
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center items-center">
            <Link href="/contact">
              <Button variant="default" size="lg" className="h-12 px-8 uppercase">
                Solicitar Asesoría
              </Button>
            </Link>
          </div>
        </section>

        <section id="" className="py-4 md:py-8">
          <div className="container max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="bg-[url('/logo Inovac Black.svg')]"> 
            </div>
              <div className="mb-8 flex flex-col items-center text-center">
                <h2 className="text-2xl font-extrabold tracking-normal md:text-4xl">
                  En Inovac sabemos que...
                </h2>
              </div>
          </div>
        </section>
        
        <ClientVision />
        
        <NosotrosTransformamosSection />

        <ElicromSection />

        <section id="features" className="py-8">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[100%] w-[100dvw] max-h-[calc(100%-20%)] bg-[url('/concreteTexture.webp')] bg-cover bg-no-repeat bg-center opacity-75">
            </div>
        
            <div className="mb-8 px-4 md:px-16 lg:px-20 items-center text-center">
              <DecoratedTextBox className="" parenthesisColor="var(--color-redinova)">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-normal tracking-normal px-[10] md:px-[30] lg:px-[50]">
                { content.bracketSubtitle3 }
                </h2>
              </DecoratedTextBox>
            </div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">  
            <div className="mb-8 pr-20 pl-20 items-center text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
                { content.subtitle1}
              </h2>
            </div>
          </div>
          
          <div className="flex gap-6 flex-row center justify-center">
            <Link href="/contact">
              <Button variant="default" size="lg" className="h-12 px-8 uppercase">
                Agenda una cita
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto  px-6 md:px-8 lg:px-8">
            
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Conoce más de nuestros servicios
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Descubre cómo <strong>Inovac</strong> puede transformar tu visión en realidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="group relative flex flex-col items-center justify-between rounded-xl border bg-card shadow-sm transition hover:shadow-md"
                >
                  <div className="relative w-full aspect-[1/1]  ">
                    
                    
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                    />
                  
                    
                  
                    <div className="absolute inset-0 z-10 flex items-start justify-center">
                      <h3 className="text-black mt-2 text-3xl font-bold">{service.name}</h3>
                    </div>

                    <div className="absolute z-20 w-[100%] bottom-0 translate-y-[25%]">
                      <Image
                        src="/svg-bracket-bottom.svg"
                        alt=""
                        width={400}
                        height={70}
                        className="w-full object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row center sm:justify-center p-6 pt-10">
                    <Link href={service.linkService}>
                      <Button variant="default" size="default" className="h-12 px-6 uppercase">
                        Conocer más
                      </Button>
                    </Link>
                  </div>

                </div>
              ))}
            </div>

            <div className="m-6 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                { content.finalTitle}
              </h2>
              <div className="mt-2 h-1 w-[25%] rounded-full bg-primary/50" />
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mt-4 max-w-2xl text-center text-muted-foreground">
                { content.finalSubtitle }
              </h2>
            </div>
            <div className="flex gap-6 flex-row center justify-center">
              <Link href="http://wa.me/593983738528?text=Saludos,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20y%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="lg" className="h-12 px-8 uppercase">
                  <FaWhatsapp className="h-12 w-12" />
                  Agenda una cita
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
