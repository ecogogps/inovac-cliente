'use client'
import Link from "next/link";
import { Button } from "~/ui/primitives/button";
import { DecoratedTextBox } from "~/ui/components/decoratedTextBox";
import ContactForm from "~/ui/primitives/contact-form";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

interface Props {
  content: {
    title: string;
    heroimage: string;
    subtitle: string;
    whatsappText1: string;
    bracketSubtitle: string;
    whatsappText2: string;
  }
}

export default function ContactClient( { content }: Props ) {
  return (
    <>
      <main className="">
        <section id="features" className="relative py-12 md:py-16 overflow-hidden w-full aspect-[16/9]">
          <div className="absolute inset-0 z-[-10] opacity-70">

            <Image
              src={content.heroimage}
              alt="isotype inovac background"
              width={1280}
              height={720}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-left justify-center h-full">
            <div className="mb-8 flex flex-col items-left text-center md:text-left p-25 md:pr-[45dvw]">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground md:text-end ">
              { content.title } 
              </h2>
            </div>
          </div>
        </section>

        <section id="features" className="py-8">
          <div className="mb-8 pr-20 pl-20 items-center text-center">
            <h2 className="text-2xl text-redinova font-bold tracking-tight md:text-4xl">
              { content.subtitle }
            </h2>
          </div>
          
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
            <div className="items-center text-center px-8">
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
                { content.whatsappText1 }
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
        
        <section id="features" className="py-8">
          <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
          
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[100%] w-[100dvw] max-h-[calc(100%-20%)] bg-[url('/concreteTexture.webp')] bg-cover bg-no-repeat bg-center opacity-75">
            </div>
        
            <div className="mb-8 px-4 md:px-16 lg:px-20 items-center text-center">
              <DecoratedTextBox className="">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-normal tracking-normal px-[10] md:px-[30] lg:px-[50]">
                { content.bracketSubtitle }
                </h2>
              </DecoratedTextBox>
            </div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">  
            <div className="mb-8 pr-20 pl-20 items-center text-center">
              <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
               { content.whatsappText2 }
              </h2>
              
            </div>
          </div>
          
          <div className="flex gap-6 flex-row center justify-center">
            <Link href="wa.me/593983738528" target="_blank" rel="noopener noreferrer">
                  <Button variant="default" size="lg" className="h-12 px-8 uppercase">
                    <FaWhatsapp className="h-12 w-12" />
                    Whatsapp
                  </Button>
                </Link>
          </div>
        </section>
      </main>
    </>
  );
}
