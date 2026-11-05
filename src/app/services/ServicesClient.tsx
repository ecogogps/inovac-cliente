'use client'
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/ui/primitives/button";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import { TiltEffect } from "~/ui/components/TiltEffect";
import ContactForm from "~/ui/primitives/contact-form";
import DisenoCardsSection from "~/ui/components/DisenoCardsSection";

interface Props {
  content: {
    title: string;
    heroimage: string;
    highlightWord: string;
    subtitle: string;
    sectionTitle: string;
    services: {
      service1: {
        name: string;
        image: string;
        description: string;
      }
      service2: {
        name: string;
        image: string;
        description: string;
      }
      service3: {
        name: string;
        image: string;
        description: string;
      }
    };
    bracketSubtitle: string;
    comunicateSubHeading: string;
    whatsappText: string;
  };
}

export default function ServicesClient({ content }: Props) {
  return (
    <>
      <main className="">
        <section className=" relative overflow-hidden bg-gradient-to-b from-muted/50 via-muted/25 py-24 md:py-32 to-background h-[80vh] flex flex-col items-center justify-center">

          <div className="absolute mx-auto aspect-[9/16] w-[90%] max-w-7xl overflow-hidden ">
              <div className="relative z-10 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
              <Image
                src={ content.heroimage }
                alt="curved building bg"
                fill
                className="object-cover opacity-35 sepia-35"
                priority
              />
            </div>

          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 grid-cols-2 md:grid-cols-4 ">

              <div className="col-start-1 col-span-2 md:col-start-2 flex flex-col justify-center space-y-6 gap-10 items-center">
                <div className="space-y-4 text-center">
                  
                  <h1 className="text-center text-5xl md:text-7xl font-bold md:tracking-tight text-foreground leading-[1.2] py-4 px-4 md:px-12 lg:px-18" >
                  { content.title } {" "}
                  <span className="remarkWord">{ content.highlightWord }</span>
                  </h1>

                  <p className="text-center text-xl md:text-3xl font-semibold leading-normal pl-20 px-8">
                  { content.subtitle } 
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

        </section>

        <section id="diseno" className="py-12 md:py-16" >
          <div className="mx-auto pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground">
              { content.sectionTitle } 
              </h2>
            </div>
          </div>
          
          <div className="mx-auto px-6 md:px-8">
            <div
              id={ content.services.service1.name }
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] items-center justify-between pt-12 md:pt-24"
            >
              <div className="row-start-1 col-start-1 col-span-2 md:col-start-2 ">
                <DecoratedTextBox className="h-5 my-8">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-normal md:px-[30] lg:px-[50] text-muted-foreground">
                  { content.services.service1.name }
                  </h2>
                </DecoratedTextBox>
              </div>

              <div className="relative row-start-2 w-full aspect-[1/1] sm:hidden md:block">
                <TiltEffect 
                rotationFactor={12} 
                isReverse={true} 
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false} 
                className="w-full h-full">
        
                  <Image
                    src={'/ServiciosDiseño.jpg'}
                    alt={'Diseño de Servicios'}
                    fill
                    className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                  />
                </TiltEffect>
              </div>

              <div className="relative row-start-2 col-span-2 p-8 border bg-background rounded-tr-xl rounded-br-xl shadow-md transition hover:shadow-md "> 
                <p className="text-justify font-semibold text-normal sm:text-lg md:text-xl">{content.services.service1.description}</p>
              </div>
            </div>
          </div>

          <DisenoCardsSection />

          <div className="m-6 flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl m-4 text-center text-muted-foreground">
              No dejes que tus sueños se queden en el papel.
            </h2>
          </div>
          <div className="m-6 flex gap-6 flex-row center justify-center">
            <Link href="/contact">
              <Button variant="default" size="lg" className="h-12 px-8 uppercase">
                Solicitar Asesoría
              </Button>
            </Link>
          </div>
        </section>

        <section id="construccion" className="py-12 md:py-16 ">
          <div className="mx-auto px-6 md:px-8">
            <div
              id={content.services.service2.name}
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] items-center justify-between pt-12 md:pt-24"
            >
              <div className="row-start-1 col-start-1 col-span-2 md:col-start-1">
                <DecoratedTextBox className="h-5 my-8">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-normal md:px-[30] lg:px-[50] text-muted-foreground">
                  {content.services.service2.name}
                  </h2>
                </DecoratedTextBox>
              </div>

              <div className="relative row-start-2 col-start-3 w-full aspect-[1/1] sm:hidden md:block">
                <TiltEffect 
                rotationFactor={12} 
                isReverse={true} 
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false} 
                className="w-full h-full">
        
                  <Image
                    src={'/ServiciosConstrucción.jpg'}
                    alt={'Construcción de Servicios'}
                    fill
                    className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                  />
                </TiltEffect>
              </div>

              <div className="relative row-start-2 col-span-2 p-8 border bg-background rounded-tr-xl rounded-br-xl shadow-md transition hover:shadow-md "> 
                <p className="text-justify font-semibold text-normal sm:text-lg md:text-xl">{content.services.service2.description}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="remodelacion" className="py-12 md:py-16 ">
          <div className="mx-auto px-6 md:px-8">
            <div
              id={content.services.service3.name}
              className="relative grid grid-cols-1 md:grid-cols-3 md:grid-rows-[min-content_1fr] items-center justify-between pt-12 md:pt-24"
            >
              <div className="row-start-1 col-start-1 col-span-2 md:col-start-1">
                <DecoratedTextBox className="h-5 my-8">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-normal md:px-[30] lg:px-[50] text-muted-foreground">
                  {content.services.service3.name}
                  </h2>
                </DecoratedTextBox>
              </div>

              <div className="relative row-start-2 col-start-3 w-full aspect-[1/1] sm:hidden md:block">
                <TiltEffect 
                rotationFactor={12} 
                isReverse={true} 
                springOptions={{ damping: 20, stiffness: 400 }}
                enable3D={false} 
                className="w-full h-full">
        
                  <Image
                    src={'/ServiciosRemodelación.jpg'}
                    alt={'Remodelación de Servicios'}
                    fill
                    className="object-cover transition-transform duration-500 rounded-xl contrast-90 group-hover:contrast-100"
                  />
                </TiltEffect>
              </div>

              <div className="relative row-start-2 col-span-2 p-8 border bg-background rounded-tr-xl rounded-br-xl shadow-md transition hover:shadow-md "> 
                <p className="text-justify font-semibold text-normal sm:text-lg md:text-xl">{content.services.service3.description}</p>
              </div>
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

        <section id="features" className="py-8">
          <div className="mb-8 p-20 items-center text-center">
            <h2 className="text-xl md:text-3xl font-bold leading-normal text-muted-foreground">
              { content.comunicateSubHeading }
            </h2>
          </div>
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="items-center text-center px-8">
              <h2 className="text-xl font-bold leading-normal">
                { content.whatsappText }
              </h2>
              <div className="m-6 flex gap-6 flex-row center justify-center">
                <Link href="wa.me/593983738528" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="lg" className="h-12 px-8 uppercase">
                    <FaWhatsapp className="h-12 w-12" />
                    Whatsapp
                  </Button>
                </Link>
              </div>
            </div>
            <div className="items-center text-center min-w-[50vw]">
              <ContactForm /> 
            </div>
          </div> 
        </section> 
      </main>
    </>
  );
}
