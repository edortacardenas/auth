
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyP } from "@/components/ui/typography";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Counter } from "@/components/counter";

export default async function DashboardPage() {
  const userObj = await currentUser();
  const { sessionClaims } = await auth();
  const isAdmin = sessionClaims?.metadata?.role === "admin";



  return (<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
  

    <Counter />
    
    <div className="flex justify-center p-5 content-center">
    <Image className="rounded-l-2xl" height={150} width={150} src={sessionClaims && userObj?.imageUrl ? userObj.imageUrl : "@/public/img1.png"} alt="imagen" />
      <Card className="rounded-l-none">
        <CardHeader>
          <CardTitle className="text-xl">Hey, welcome back {userObj?.fullName} </CardTitle>
        </CardHeader>
        <CardContent>
        <TypographyP className="text-lg text-gray-600 ">
            If you see this, it means you are logged in successfully.
          
        </TypographyP>
          
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
              {isAdmin &&
                <Link href="/admin" className={buttonVariants()}>
                  Visit Admin
                </Link>
              }
        </CardFooter>
      
      </Card>
  </div>
    
  </main>
  
</div>
  )
}
