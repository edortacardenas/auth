import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyP } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const userObj = await currentUser();
  const { sessionClaims } = await auth();
  const isAdmin = sessionClaims?.metadata?.role === "admin";

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <main className="w-full max-w-2xl">
        <Card className="overflow-hidden shadow-lg border-0 p-0">
          <div className="flex flex-col md:flex-row">
            {/* Sección de la Imagen (Izquierda) */}
            <div className="relative w-full h-48 md:h-auto md:w-1/3">
              <Image
                className="object-cover w-full h-full rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                width={250}
                height={250}
                src={userObj?.imageUrl || "/img1.png"}
                alt={`Foto de perfil de ${userObj?.fullName}`}
                priority
              />
            </div>

            {/* Sección del Contenido (Derecha) */}
            <div className="flex flex-col justify-between w-full p-6 md:w-2/3">
              <div>
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl font-bold">
                    ¡Hola, {userObj?.fullName}!
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-4">
                  <TypographyP className="text-lg text-gray-700">
                    Si puedes ver esto, significa que has iniciado sesión correctamente.
                  </TypographyP>
                </CardContent>
              </div>
              <CardFooter className="p-0 pt-6">
                {isAdmin && (
                  <Link href="/admin" className={buttonVariants()}>
                    Visitar Panel de Administrador
                  </Link>
                )}
              </CardFooter>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}