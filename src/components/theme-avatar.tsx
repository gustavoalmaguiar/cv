"use client";

import { useTheme } from "next-themes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ThemeAvatarProps {
  src: string;
  alt: string;
  initials: string;
}

export function ThemeAvatar({ src, alt, initials }: ThemeAvatarProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="avatar-glow rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-transform hover:scale-105 active:scale-95"
      aria-label="Toggle theme"
      title="Click to toggle theme"
    >
      <Avatar className="h-20 w-20 border-4 border-accent shadow-lg md:h-24 md:w-24 cursor-pointer">
        <AvatarImage alt={alt} src={src} />
        <AvatarFallback className="bg-accent text-2xl font-display text-accent-foreground">
          {initials}
        </AvatarFallback>
      </Avatar>
    </button>
  );
}
