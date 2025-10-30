'use client';

import Link from 'next/link';
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Menu, Hotel } from 'lucide-react';

// Componentes de Shadcn/ui
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader, // <--- Importado
  SheetTitle,  // <--- Importado
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { ModeToggle } from "./theme-toggle-button";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo y Nombre del Sitio */}
        <Link href="/" className="flex items-center gap-2">
          <Hotel className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold hidden sm:inline-block">
            Reservas Online
          </span>
        </Link>

        {/* Navegación para Escritorio (Oculta en móvil) */}
        <div className="hidden items-center gap-4 md:flex">
          <SignedIn>
            <Link href="/dashboard" className={buttonVariants({ variant: "ghost" })}>
              Dashboard
            </Link>
          </SignedIn>

          {/* Botones de acción y Tema */}
          <div className="flex items-center gap-2">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="ghost">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <ModeToggle />
          </div>
        </div>

        {/* Botón de Menú Móvil (Visible solo en móvil) */}
        <div className="md:hidden">
          <Sheet>
          <ModeToggle />
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader className="text-left mb-4">
                <SheetTitle>
                   <Link href="/" className="flex items-center gap-2">
                    <Hotel className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">Menú Principal</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-4">
                {/* Enlaces para usuarios autenticados */}
                <SignedIn>
                  <SheetClose asChild>
                    <Link href="/dashboard" className={buttonVariants({ variant: "outline", className: "w-full justify-start" })}>
                      Dashboard
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/user-profile" className={buttonVariants({ variant: "outline", className: "w-full justify-start" })}>
                      Profile
                    </Link>
                  </SheetClose>
                  <SignOutButton>
                     <Button variant="destructive" className="w-full">Sign Out</Button>
                  </SignOutButton>
                </SignedIn>

                {/* Botones para usuarios no autenticados */}
                <SignedOut>
                  <SheetClose asChild>
                    <SignInButton mode="modal">
                      <Button variant="outline" className="w-full">Sign In</Button>
                    </SignInButton>
                  </SheetClose>
                  <SheetClose asChild>
                    <SignUpButton mode="modal">
                      <Button className="w-full">Sign Up</Button>
                    </SignUpButton>
                  </SheetClose>
                </SignedOut>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};