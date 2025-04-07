"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme } = useTheme()
  const [state, setState] = useState<"light"|"dark">("light");

  const handleThemeChange = () => {
      setState((prevState) => (prevState === "light" ? "dark" : "light"))
      setTheme(state)
  }

  return (
    <Button variant="outline" size="icon" onClick={() => handleThemeChange()}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />     
    </Button>
  )
}
