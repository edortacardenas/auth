import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  // UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle-button";


export const Navigation = () => {
  return (
    <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-[var(--foreground)]">
            <Link href="/">Home</Link>
            </h1>
          </div>
          <div className="flex items-center gap-4 ">
            <SignedOut>
              <SignInButton>
                <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700 rounded-md">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700 rounded-md">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <Link href="/user-profile">Profile</Link>
              <SignOutButton />
              {/* <UserButton /> */}
            </SignedIn>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
