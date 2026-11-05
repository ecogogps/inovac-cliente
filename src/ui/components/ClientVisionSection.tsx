import Image from "next/image";
import { TiltEffect } from "./TiltEffect";

export default function ClientVisionSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16">

      <div className="absolute -z-10 left-1/4 w-[100%] h-[100%] grayscale opacity-15">
        <Image
          src="/isotypePatternBg.svg"
          alt="Pattern Background"
          height={1000}
          width={1000}
          className="object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 items-center">
        
        <div className="relative text-right col-start-1 col-span-2 md:col-span-1 md:col-start-2 w-auto select-none">
          <p className="uppercase text-lg md:text-3xl lg:text-4xl font-bold">cada</p>
          <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-black tracking-tight">
            Cli <br /> en <br /> te
          </h2>
          <p className="uppercase text-lg md:text-3xl lg:text-4xl font-bold ">tiene una</p>

            <h2 className="uppercase text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-tight ">
              Visión<br /> Única
            </h2>
          
        </div>

        <div className="relative col-start-3 col-span-2">
          <TiltEffect
            className=""
            rotationFactor={10}
            isReverse={false}
            enable3D={false}
            springOptions={{ damping: 20, stiffness: 300 }}>
          <div className="relative z-10 aspect-[3/4] rounded-md overflow-hidden shadow-lg">
            <Image
              src="/cliente2Bg.jpg"
              alt="Main Architectural Shot"
              fill
              className="object-cover"
            />
          </div>
          </TiltEffect>
        </div>
      </div>
    </section>
  );
}
