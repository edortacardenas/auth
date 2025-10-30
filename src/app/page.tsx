import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyP } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { sessionClaims } = await auth();

  return (
    // Se añade 'relative' para posicionar el efecto de niebla y 'overflow-hidden' para contenerlo
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen overflow-hidden p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* Elemento para el efecto de niebla */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-900 opacity-20 blur-[150px] dark:bg-white dark:opacity-10"
      />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex justify-center p-5 content-center">
          {/* Tarjeta con fondo translúcido para integrar mejor el efecto */}
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">Hey, welcome back</CardTitle>
            </CardHeader>
            <CardContent>
              <TypographyP className="text-lg text-muted-foreground">
                I’m building this project to test clerk authentication
              </TypographyP>
            </CardContent>
            <CardFooter>
              {!sessionClaims ? (
                <Link href="/sign-in" className={buttonVariants()}>
                  Get Started
                </Link>
              ) : (
                <Link href="/dashboard" className={buttonVariants()}>
                  Dashboard
                </Link>
              )}
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}