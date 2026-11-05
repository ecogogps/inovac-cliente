import Image from "next/image"
import Link from "next/link";
import { TiltEffect } from "./TiltEffect";
import { Button } from "~/ui/primitives/button";
import { HouseWifi, Handshake } from "lucide-react";
import { Separator } from "~/ui/primitives/separator";

export default function ElicromSection() {
  return (
  <section id="features" className="relative py-8 overflow-hidden w-full">
    
    <div className="p-6 items-center justify-center">
      <div className="flex flex-col px-12 items-center text-center">
        <h2 className="mb-8 text-2xl md:text-4xl font-bold tracking-tight">
          Guiándote en cada etapa del camino
        </h2> 
        <ul className="list-none space-y-2">  
          <li className="flex items-center gap-4 mb-8">
            <Handshake className="h-12 w-12 lex-shrink-0 text-redinova" />
            <h2 className="text-2xl md:text-4xl font-normal tracking-tight capitalize">
              con un enfoque personalizado
            </h2>
          </li> 
          <li className="flex items-center gap-4 mb-8">
            <HouseWifi className="h-12 w-12 lex-shrink-0 text-redinova" />
            <h2 className="text-2xl md:text-4xl font-normal tracking-tight capitalize">
              tecnología de vanguardia
            </h2>
          </li> 
        </ul>
      </div>
    </div>
    
    <div className="relative grid grid-row-5 grid-cols-3 gap-2 md:grid-row-3 md:grid-cols-5 items-center justify-center mx-auto max-w-7xl px-12 md:px-0">
      <h2 className="col-start-1 md:col-start-2 col-span-3 p-4 text-2xl md:text-4xl font-semibold tracking-tight text-center">
        Desde edificios
      </h2>
      <div className="col-start-1 row-start-2 col-span-3 md:col-start-2 md:col-span-3">
        <TiltEffect 
          rotationFactor={5} 
          isReverse={true} 
          springOptions={{ damping: 10, stiffness: 400 }}
          enable3D={false}
          className="w-full h-auto rounded-lg p-8 shadow-md bg-stone-100" 
          >
            <Image
              src="/Elicrom1modified.jpg"
              alt="elichrom building"
              width={600}
              height={800}
              className="object-contain"
              loading="eager"
            />
          
        </TiltEffect>
      </div>

      <div className="col-start-2 row-start-3 md:col-start-2 md:col-span-3 p-6 justify-center flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">
          hasta espacios personalizados
        </h2>
      </div>

      <div className="col-start-1 row-start-4 col-span-3 md:col-start-2 md:col-span-3">
        <TiltEffect 
          rotationFactor={12} 
          isReverse={true} 
          springOptions={{ damping: 15, stiffness: 400 }}
          enable3D={false}
          className="w-full h-auto rounded-lg p-8 shadow-md bg-stone-100">
            <div className="flex flex-col items-center text-center">
              
              <Image
                src="/renderInterior.jpg"
                alt="imagen personalizar"
                width={1000}
                height={1000}
                className="object-contain m-4 opacity-100"
                loading="eager"
              />
              
            </div>
        </TiltEffect>
      </div>

      <div className="row-start-5 col-start-1 col-span-3 md:col-start-2 items-center justify-center mx-auto p-8">
        <Link href="/portafolio">
          <Button variant="default" size="lg" className="h-12 px-8 uppercase">
            Visitar Portafolio
          </Button>
        </Link>
      </div>
    </div>
  </section>
  );
}

