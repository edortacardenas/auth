"use client";

import { useState } from "react";
import {
  useAuth,
  // useUser
} from "@clerk/nextjs";
import { Button } from "./ui/button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const {
    isLoaded,
    userId,
    // sessionId, getToken
  } = useAuth();
  //   const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !userId) {
    return null;
  }

  //   if (!isLoaded || !isSignedIn) {
  //     return null;
  //   }
  return (
    <div className="flex flex-col items-center justify-center gap-4 ml-auto mr-auto">
      <div className="flex items-center justify-between gap-4">
        <p className="text-lg dark:text-neutral-200">Count: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(0)}>Reset</Button>
      </div>
      <div>
        <p className="text-lg dark:text-neutral-200">If you see this, it means you are an admin</p>
      </div>
    </div>
  );
};
