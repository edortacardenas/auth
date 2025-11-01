import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyP } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { SmokeCanvas } from "@/components/smoke-canvas"; // Asegúrate de que la ruta sea correcta

export default async function Home() {
  const { sessionClaims } = await auth();

  return (
    // Contenedor principal con posicionamiento relativo para anclar los elementos absolutos.
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden font-sans m-0 p-0">
      
      {/* El canvas con el efecto de humo se renderiza en el fondo gracias a z-index negativo. */}
      <SmokeCanvas />
      
      {/* Elemento decorativo con desenfoque. */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 opacity-20 blur-[150px] dark:bg-white dark:opacity-10"
      />

      {/* El contenido principal se coloca en un `main` con z-index positivo para asegurar que esté por encima del canvas. */}
      <main className="relative z-10">
        {/* Hero content */}
        <div className="container mx-auto px-6 py-16 md:py-26 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Text content */}
              <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">Connect</span> your world with precision
                </h1>
                <p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-lg font-extralight tracking-wide">
                  Build, track, and manage your projects with a seamless platform designed for modern teams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                {sessionClaims ? (
                    <Link href="/dashboard" className={buttonVariants()}>
                      Dashboard
                    </Link>
                  ) : (
                    <Link href="/sign-in" className={buttonVariants()}>
                      Get Started
                    </Link>
                  )}
                </div>
              </div>
              
              {/* Card visualization */}
              <div className="md:w-1/2 relative p-1">
                <img src="/img1.png" alt="imagen" className="rounded-full p-2 mt-12"/>
              </div>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-16"></div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
              <div>
                <p className="text-4xl font-light mb-1 tracking-tight">93%</p>
                <p className="text-gray-400 font-extralight">Faster workflow</p>
              </div>
              <div>
                <p className="text-4xl font-light mb-1 tracking-tight">10k+</p>
                <p className="text-gray-400 font-extralight">Global users</p>
              </div>
              <div>
                <p className="text-4xl font-light mb-1 tracking-tight">24/7</p>
                <p className="text-gray-400 font-extralight">Support available</p>
              </div>
              <div>
                <p className="text-4xl font-light mb-1 tracking-tight">99.9%</p>
                <p className="text-gray-400 font-extralight">Uptime guarantee</p>
              </div>
            </div>
          </div>
       
      </main>
    </div>
  );
}