"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button className="h-8 w-8" variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
