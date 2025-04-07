
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyP } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { auth} from "@clerk/nextjs/server";

export default async function Home() {
  const { sessionClaims } = await auth();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
        <div className="flex justify-center p-5 content-center">
        
      <Card >
        <CardHeader>
          <CardTitle className="text-xl">Hey, welcome back</CardTitle>
        </CardHeader>
        <CardContent>
        <TypographyP className="text-lg text-gray-600 ">
            I’m building this project to test clerk autentication
           
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
