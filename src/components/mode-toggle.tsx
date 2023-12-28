"use client";

import React from "react";
import { useTheme } from "next-themes";

export const ModeToggle = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div onClick={toggleTheme} className="cursor-pointer transition-opacity duration-500 ease-in-out hover:opacity-70">
      {children}
    </div>
  );
};
