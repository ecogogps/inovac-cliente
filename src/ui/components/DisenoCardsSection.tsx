import Image from "next/image";
import { TiltEffect } from "./TiltEffect";

export default function DisenoCardsSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16">

      <div className="hidden md:block absolute -z-10 left-1/4 w-[100%] h-[100%] grayscale opacity-15">
        <Image
          src="/isotypePatternBg.svg"
          alt="Pattern Background"
          height={1000}
          width={1000}
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-4 grid-rows-3 md:gap-y-12 gap-x-2 items-center">
        <div className="relative col-start-1 col-span-3 md:col-span-2">
            <div className="relative row-start-2 col-span-2 p-8 border bg-background rounded-tl-xl rounded-bl-xl shadow-md transition hover:shadow-md "> 
              <p className="text-justify font-semibold text-normal sm:text-lg md:text-xl">En INOVAC Planificamos, diseñamos y construimos el espacio al que puedas llamar hogar.
              </p>
            </div>
        </div>
        <div className="relative text-right col-start-4 md:col-start-3 w-auto select-none">
          <p className="uppercase font-normal md:text-3xl text-left">diseño</p>
          <TiltEffect
            className=""
            rotationFactor={15}
            isReverse={false}
            enable3D={false}
            springOptions={{ damping: 10, stiffness: 300 }}>
            <h2 className="uppercase text-redinova text-4xl md:text-5xl lg:text-7xl font-black tracking-normal leading-16 text-left
             ">
              RESI <br />
              DEN <br />
              CIAL <br />
            </h2>
          </TiltEffect>
        </div>
        
        <div className="relative text-right col-start-1 md:col-start-2 w-auto select-none">
          <p className="uppercase font-normal md:text-3xl text-right">diseño</p>
          <TiltEffect
            className=""
            rotationFactor={15}
            isReverse={false}
            enable3D={false}
            springOptions={{ damping: 10, stiffness: 300 }}>
            <h2 className="uppercase text-redinova text-4xl md:text-5xl lg:text-7xl font-black tracking-normal leading-16 text-right
             ">
              CO <br />
              MER <br />
              CIAL <br />
            </h2>
          </TiltEffect>
        </div>
        <div className="relative col-start-2 col-span-3 md:col-start-3 md:col-span-2">
            <div className="relative row-start-2 col-span-2 p-8 border bg-background rounded-tr-xl rounded-br-xl shadow-md transition hover:shadow-md "> 
              <p className="text-justify font-semibold text-normal sm:text-lg md:text-xl">Los espacios comerciales para INOVAC están llenos de creatividad que hacen que los espacios simples se conviertan en negocios funcionales.
              </p>
            </div>
        </div>
        

        <div className="relative md:col-start-1 col-span-3 md:col-span-2">
            <div className="relative row-start-2 col-span-2 p-8 border bg-background rounded-tl-xl rounded-bl-xl shadow-md transition hover:shadow-md "> 
              <p className="text-justify font-semibold text-normal sm:text-lg md:text-xl">
                Para INOVAC es importante brindar un servicio integral, que va desde la definición del concepto de tu empresa, el diseño del espacio donde la imagen refleja los valores empresariales hasta la ejecución de la obra.
              </p>
            </div>
        </div>
        <div className="relative text-right col-start-4 md:col-start-3 w-auto select-none">
          <p className="uppercase font-normal md:text-3xl text-left">diseño</p>
          <TiltEffect
            className=""
            rotationFactor={15}
            isReverse={false}
            enable3D={false}
            springOptions={{ damping: 10, stiffness: 300 }}>
            <h2 className="uppercase text-redinova text-4xl md:text-5xl lg:text-7xl font-black tracking-normal leading-16 text-left
             ">
              COR <br />
              PORA <br />
              TIVO <br />
            </h2>
          </TiltEffect>
        </div>
      </div>
    </section>
  );
}
