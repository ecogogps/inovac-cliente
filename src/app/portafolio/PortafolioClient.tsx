'use client'
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/ui/primitives/button";

import { testimonials } from "~/app/mocks";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import { TiltEffect } from "~/ui/components/TiltEffect";
import { TestimonialsSection } from "~/ui/components/testimonials/testimonials-with-marquee";

interface Props {
  content: {
    title: string;
    heroimage: string;
    highlightWord: string;
    subtitle: string;
    sectionTitle: string;
    bracketSubtitle?: string;
    residencial: {
      name: string;
      image: string;
      clientes: {
        name1: string;
        name2: string;
        name3: string;
      }
    }
    corporativo: {
      name: string;
      image: string;
      clientes: {
        name1: string;
        name2: string;
      }
    }
    arquitecturaPlanificacion: {
      name: string;
      image: string;
      clientes: {
        name1: string;
        name2: string;
        name3: string;
      }
    }
    testimoniosSubtitle: string;
    bannerTitle: string;
    bannerSubTitle: string;
  };
}

export default function PortafolioClient( { content }: Props ) {
  
  return (
    <>
      <main className="">
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-muted/25 to-background h-[65vh] flex flex-col items-center justify-center">
          
          <div className="relative mx-auto aspect-[4/3] w-full max-w-6xl overflow-hidden center-0">
            <div className="relative inset-0 z-10 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            <Image
              src={content.heroimage}
              alt="encabezado portafolio"
              fill
              sizes=""
              className="object-cover opacity-85"
              priority
            />
          </div>

          <div className="relative justify-center space-y-6 gap-10 items-center p-8">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold md:tracking-tight text-foreground leading-[1.2] py-4 px-4 md:px-12 lg:px-18" >
              { content.title }  {" "}
              <span className="remarkWord">{ content.highlightWord }</span>
              </h1>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent"/>
          
        </section>
        
        <section className="relative mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              { content.sectionTitle } 
              </h2>
            </div>
          </div>

          <div className="relative justify-center items-center pt-8">
            <div className="text-center">
              <p className="text-center text-md sm:text-xl md:text-3xl font-semibold leading-normal px-8">
              { content.subtitle }
              </p>
            </div>
          </div>

        </section>

        <section id="features" className="py-8">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          
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

        <section className="py-12 ">
          <div className="mx-auto px-12 md:px-18">  
            <div id="residencial"
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] gap-y-4 md:gap-y-4 items-center justify-between py-8"
            >
              <h2  className="md:col-start-2 col-span-2 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-center
              ">
                {content.residencial.name}
              </h2>
              <div className="relative row-start-1 row-span-2 w-full aspect-[1/1] hidden md:block">
              
                <TiltEffect 
                rotationFactor={12} 
                isReverse={true} 
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false} 
                className="w-full h-full">
        
                  <Image
                    src={content.residencial.image}
                    alt="residencial"
                    fill
                    className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                  />
                </TiltEffect>
              </div>

              <div className="relative row-start-2 col-span-2 p-8 border bg-card rounded-tr-xl rounded-br-xl shadow-lg shadow-grayinova"> 
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  { content.residencial.clientes.name1 }
                </li>
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  { content.residencial.clientes.name2 }
                </li>
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  { content.residencial.clientes.name3 }
                </li>
              </div>
            </div>

            <div id="corporativo"
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] gap-y-4 md:gap-y-8 items-center justify-between py-8"
            >
              <h2 className="md:col-start-2 col-span-2 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-center
              ">
                { content.corporativo.name} 
              </h2>
              <div className="relative row-start-1 row-span-2 w-full aspect-[1/1] hidden md:block">
              
                <TiltEffect 
                rotationFactor={12} 
                isReverse={true} 
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false} 
                className="w-full h-full">
        
                  <Image
                    src={ content.corporativo.image }
                    alt="corporativo"
                    fill
                    className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                  />
                </TiltEffect>
              </div>

              <div className="relative row-start-2 col-span-2 p-8 border bg-card rounded-tr-xl rounded-br-xl shadow-lg shadow-grayinova"> 
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  { content.corporativo.clientes.name1 }
                </li>
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  { content.corporativo.clientes.name2 }
                </li>
              </div>
            </div>

            <div id="planificacion"
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] gap-y-4 md:gap-y-8 items-center justify-between py-8"
            >
              <h2 className="md:col-start-2 col-span-2 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-normal text-center
              ">
                { content.arquitecturaPlanificacion.name }
              </h2>
              <div className="relative row-start-1 row-span-2 w-full aspect-[1/1] hidden md:block">
              
                <TiltEffect 
                rotationFactor={12} 
                isReverse={true} 
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false} 
                className="w-full h-full">
        
                  <Image
                    src={ content.arquitecturaPlanificacion.image }
                    alt="ArquitecturaYplanificación2"
                    fill
                    className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                  />
                </TiltEffect>
              </div>

              <div className="relative row-start-2 col-span-2 p-8 border bg-card rounded-tr-xl rounded-br-xl shadow-lg shadow-grayinova"> 
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  { content.arquitecturaPlanificacion.clientes.name1 }
                </li>
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  { content.arquitecturaPlanificacion.clientes.name2 }
                </li>
                <li className="text-justify font-semibold text-normal sm:text-lg md:text-xl py">
                  { content.arquitecturaPlanificacion.clientes.name3 }   
                </li>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 ">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
              <div className="py-4 md:py-8">
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
                Testimonios 
                </h2>
              </div>
            </div>

            <TestimonialsSection
              title=""
              description={ content.testimoniosSubtitle }
              testimonials={testimonials}
              className="py-0"
            />
          </div>
        </section>

        <section className=" py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-xl bg-primary/10 p-8 md:p-12">
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
              <div className="relative z-10 mx-auto max-w-2xl text-center">
                <h2 className="text-3xl text-redinova font-bold tracking-tight md:text-4xl">
                  { content.bannerTitle }
                </h2>
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  { content.bannerSubTitle }
                </p>
                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="h-12 px-8">
                      Contáctanos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
