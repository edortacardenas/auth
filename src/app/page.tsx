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
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden p-8 font-sans">
      
      {/* El canvas con el efecto de humo se renderiza en el fondo gracias a z-index negativo. */}
      <SmokeCanvas />
      
      {/* Elemento decorativo con desenfoque. */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 opacity-20 blur-[150px] dark:bg-white dark:opacity-10"
      />

      {/* El contenido principal se coloca en un `main` con z-index positivo para asegurar que esté por encima del canvas. */}
      <main className="relative z-10">
        <Card className="max-w-md bg-background/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl">Hey, welcome back</CardTitle>
          </CardHeader>
          <CardContent>
            <TypographyP className="text-lg text-muted-foreground">
              I’m building this project to test Clerk authentication.
            </TypographyP>
          </CardContent>
          <CardFooter>
            {sessionClaims ? (
              <Link href="/dashboard" className={buttonVariants()}>
                Dashboard
              </Link>
            ) : (
              <Link href="/sign-in" className={buttonVariants()}>
                Get Started
              </Link>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}