"use client"

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "~/ui/primitives/button";
import { cn } from "~/lib/utils";

import { FaInstagram, FaYoutube, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { CompanyLogoSVG } from "~/ui/icons/company-logo-svg";
import Image from "next/image";

export function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 }
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 20 }
  };

  const logoVariants = {
    rest: { 
      scale: 1,
      opacity: 0.9
    },
    hover: {
      scale: 1.1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 400,
        delay: 0.05
      }
    }
  }

  const textVariants = {
    rest: { 
      rotate: 0,
      opacity: 0.9
    },
    hover: {
      rotate: 7,
      opacity: 1,
      transform: "translateY(-4px)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="fixed left-4 bottom-1/4 z-40">
      <motion.div
        variants={logoVariants}
        initial="rest"
        whileHover="hover">
        <Button
          onClick={toggleMenu}
          className={cn(
            "h-50 px-6 py-2 rounded-lg shadow-lg transition-all",
            "text-primary",
            "flex flex-col items-center gap-18",
            "cursor-pointer",
          )} 
          variant={"outline2"}
          size={"icon"}
        >
          <motion.div variants={logoVariants}
          initial="rest"
          whileHover="hover">
            <CompanyLogoSVG className="h-8 w-auto size-4"/>
          </motion.div>
          
          <motion.span 
            variants={textVariants}
            initial="rest"
            whileHover="hover"
            className="text-xs sm:text-sm font-medium uppercase -rotate-90 origin-center" 
            >
            MENU
          </motion.span>

        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed inset-0 z-40 bg-background/80 backdrop-blur-md",
              "flex flex-col overflow-y-auto",
              "p-4 sm:p-6 md:p-8",
              "max-h-screen"
            )}
          >
            <div className="fixed flex justify-end p-4 top-0 right-0">
              <Button
                onClick={toggleMenu}
                size="icon"
                variant="ghost"
                className={cn(
                  "bg-grayinova/25 h-10 w-10 md:h-14 md:w-14 rounded-full", 
                  "hover:bg-accent/75", 
                  "text-primary ",
                  "border border-primary hover:border-redinova", 
                  "transition-all duration-200" 
                  
                )}
              >
                <X className="size-5 md:size-6" strokeWidth={2}/>
              </Button>
            </div>

            <div className="mx-auto w-full flex-auto px-4 sm:px-6 my-[8dvh] grid grid-cols-1 grid-rows-3 gap-2 md:grid-cols-3 md:grid-rows-2 md:gap-8 [&>*]:my-0 ">
              <motion.section
                variants={itemVariants}
                transition={{ delay: 0.1 }}
                className="hidden md:block row-start-1 flex flex-col self-center"
              >
                <motion.div variants={logoVariants}
                initial="rest"
                whileHover="hover">
                  <Link href="/" className="flex items-center justify-center">
                    <Image 
                    src="/logoInovacColor.svg" alt="Inovac Logo" 
                    width={300} 
                    height={80} 
                    className="p-4 h-auto min-w-[300]"></Image>
                  </Link>
                </motion.div>
              </motion.section>

              <motion.section
                variants={itemVariants}
                transition={{ delay: 0.1 }}
                className="flex flex-col justify-center items-center border-1 border-redinova shadow-md bg-grayinova/35 col-start-1 row-start-1 md:col-start-2 md:row-start-1"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-primary m-6">Servicios</h2>
                <ul className="py-4 text-center">
                  <li>
                    <Link href="/services#diseno" className="block rounded-sm py-2 md:py-4 px-4 font-semibold text-lg transition-all duration-200 
                    hover:bg-redinova/75 hover:shadow-md hover:text-background" onClick={toggleMenu}>
                      Diseño
                    </Link>
                  </li>
                  <div className="border-t border-grayinova my-2"></div>
                  <li>
                    <Link href="/services#construccion" className="block rounded-sm py-2 md:py-4 px-4 font-semibold text-lg transition-all duration-200 
                    hover:bg-redinova/75 hover:shadow-md hover:text-background" onClick={toggleMenu}>
                      Construcción
                    </Link>
                  </li>
                    <div className="border-t border-grayinova my-2"></div>
                  <li>
                    <Link href="/services#remodelacion" className="block rounded-sm py-2 md:py-4 px-4 font-semibold text-lg transition-all duration-200 
                    hover:bg-redinova/75 hover:shadow-md hover:text-background" onClick={toggleMenu}>
                      Remodelación
                    </Link>
                  </li>
                </ul>
              </motion.section>

              <motion.section
                variants={itemVariants}
                transition={{ delay: 0.2 }}
                className="flex flex-col justify-center items-center border-1 border-redinova shadow-md bg-grayinova/35 col-start-1 row-start-2 md:col-start-3 md:row-start-1"
              >
                <h2 className="text-2xl sm:text-3xl font-black text-primary m-6">Portafolio</h2>
                <ul className="py-4 text-center">
                  <li>
                    <Link href="/portafolio#residencial" className="block rounded-sm py-2 md:py-4 px-4 font-semibold text-lg transition-all duration-200 
                    hover:bg-redinova/75 hover:shadow-md hover:text-background" onClick={toggleMenu}>
                      Residencial
                    </Link>
                  </li>
                   <div className="border-t border-grayinova my-2"></div>
                  <li>
                    <Link href="/portafolio#corporativo" className="block rounded-sm py-2 md:py-4 px-4 font-semibold text-lg transition-all duration-200 
                    hover:bg-redinova/75 hover:shadow-md hover:text-background" onClick={toggleMenu}>
                      Corporativo
                    </Link>
                  </li>
                   <div className="border-t border-grayinova my-2"></div>
                  <li>
                    <Link href="/portafolio#planificacion" className="block rounded-sm py-2 md:py-4 px-4 font-semibold text-lg transition-all duration-200 
                    hover:bg-redinova/75 hover:shadow-md hover:text-background" onClick={toggleMenu}>
                      Arquitectura <br/>y Planificación
                    </Link>
                  </li>
                </ul>
              </motion.section>

              <motion.section
                variants={itemVariants}
                transition={{ delay: 0.3 }}
                className=" flex flex-col items-center justify-start col-start-1 row-start-3 md:col-start-1 md:row-start-2 md:col-span-3"
              >
                <div className="flex m-4 items-center">
                  <a href="https://www.instagram.com/inovaconstrucciones/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors px-4 ">
                    <FaInstagram className="h-10 w-10 md:h-12 md:w-12 text-redinova hover:text-redinova/80" />
                  </a>
                  <a href="https://wa.me/593983738528" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors px-4">
                    <FaWhatsapp className="h-10 w-10 md:h-12 md:w-12 text-redinova hover:text-redinova/80" />
                  </a>
                  <a href="https://www.facebook.com/inovaconstruccionesUIO" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors px-4">
                    <FaFacebook className="h-10 w-10 md:h-12 md:w-12 text-redinova hover:text-redinova/80" />
                  </a>
                </div>
                <div className="space-y-4 mt-4 text-base sm:text-lg flex flex-col items-left md:items-center">
                  <div className="flex  gap-3">
                    <Phone className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    <span className="font-semibold"> (+593) 98 373 8528</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    <span className="font-semibold">
                      <a href="mailto:info@inovaconstrucciones.com">info@inovaconstrucciones.com</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                    <span className="font-semibold">Valle de los Chillos, Quito – Ecuador.</span>
                  </div>
                </div>
              </motion.section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}