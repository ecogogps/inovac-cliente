
import Link from "next/link";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/primitives/button";
import { Phone, Mail, MapPinned } from "lucide-react";
import Image from "next/image";
import { WhatsAppIcon } from "../icons/whatsapp";
import { InstagramIcon } from "../icons/instagram";
import { FacebookIcon } from "../icons/facebook";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t bg-accent", className)}>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 bg-redinova ">

        <div className="grid grid-rows-1 md:grid-cols-3 gap-4 px-12 pb-12 border-b " >
          <div className="row-start-1 md:col-start-1 items-center justify-center flex min-h-[81]">
            <Image  
              src="/logoInovacWhite.svg"
              alt="Inovac Construcciones Logo"
              width={300}
              height={81}
              className="object-cover max-w-[150px] md:min-w-[300px]" />
          </div>

          <div className="row-start-2 md:row-start-1 md:col-start-2 md:col-span-2 space-y-4 text-base sm:text-lg items-center justify-center flex flex-col text-background">
            
              <h3 className="mb-4 text-md font-semibold">Visita otras secciones</h3>
              <ul className="space-y-2 text-md flex flex-row gap-4 flex-wrap justify-around ">
                <li>
                  <Link
                    href="/about"
                    className="text-background hover:text-foreground"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-background hover:text-foreground"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portafolio"
                    className="text-background hover:text-foreground"
                  >
                    Portafolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/posts"
                    className="text-background hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                
                <li>
                  <Link
                    href="/contact"
                    className="text-background hover:text-foreground"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            
          </div>

        </div>

        <div className="grid grid-rows-1 md:grid-cols-3 gap-6 px-12">

          <div className="row-start-1 space-y-4 text-base sm:text-lg flex flex-col ">
            
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row ">
              <Link href="/contact">
                <Button variant={`outline`} size="lg" className="uppercase h-12 px-8 ">
                  Contáctanos
                </Button>
              </Link>
            </div>
            <ul className="list-none p-6 ">  
              <li className="flex items-center gap-4 mb-8 ">
                <Phone className="h-6 w-6 flex-shrink-0 text-background" />
                <h2 className="text-background text-md  font-normal tracking-tight capitalize">
                  (+593) 98 373 8528
                </h2>
              </li> 
              <li className="flex items-center gap-4 mb-8">
                <Mail className="h-6 w-6 flex-shrink-0 text-background" />
                <h2 className="text-background text-md  font-normal tracking-tight ">
                  <a href="mailto:info@inovaconstrucciones.com">info@inovaconstrucciones.com</a>
                </h2>
              </li> 
              <li className="flex items-center gap-4 mb-8">
                <MapPinned className="h-6 w-6 flex-shrink-0 text-background" />
                <h2 className="text-background text-md  font-normal tracking-tight ">
                  Valle de los Chillos, Quito – Ecuador.
                </h2>
              </li> 
            </ul>
          </div>

          <div className="md:row-start-1 col-start-1 md:col-start-2 md:col-span-2 items-center justify-start flex flex-col">
            <div className="space-x-6 items-center p-6">
              <Link href="https://wa.me/593983738528" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 rounded-2xl flex-shrink-0 shadow-md "
                >
                  <WhatsAppIcon className="h-24 w-24 scale-150" />
                  <span className="sr-only">Whatsapp</span>
                </Button>
              </Link>
              <Link href="https://www.instagram.com/inovaconstrucciones/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 rounded-2xl flex-shrink-0 shadow-md "
                >
                  <InstagramIcon className="h-24 w-24 scale-150" />
                  <span className="sr-only">Instagram</span>
                </Button>
              
              </Link>
              <Link href={"https://www.facebook.com/inovaconstruccionesUIO"} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 rounded-2xl flex-shrink-0 shadow-md"
                >
                  <FacebookIcon className="h-24 w-24 scale-150" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              
            </div>

            <ul className="list-none p-6 items-center justify-center flex flex-col">  
              <li className="flex items-center gap-4 mb-8">
                <h2 className="text-background text-center font-semibold tracking-tight capitalize">
                  ¿Eres proveedor? Puedes contactarnos aquí
                </h2>
              </li> 
              <li className="flex items-center gap-4">
                <h2 className="">
                <Link href="mailto:info@inovaconstrucciones.com">
                  <Button variant={'outline'} size="lg" className="uppercase h-12 px-8">
                    proveedores
                  </Button>
                </Link>   
                </h2>
              </li>   
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 ">
            <div className="flex items-center gap-4 text-sm text-background">
              <Link href="/terms" className="hover:text-foreground">
                Términos y condiciones
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm text-background">
              <p>Proyecto liderado por {" "}
              <Link href="https://brandingmaker.ca/" target='_blank' className="hover:text-foreground font-bold">
              Branding Maker Agency
              </Link>
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm text-background">
              <p>Powered by {" "}
              <Link href="https://www.brandingmaker.ca" target='_blank' className="hover:text-yellow-500 font-bold">
                Branding Maker Agency
              </Link>
              </p>
            </div>
            <p className="text-sm text-background text-center">
              &copy; {new Date().getFullYear()} Inovac Construcciones. Derechos Reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

