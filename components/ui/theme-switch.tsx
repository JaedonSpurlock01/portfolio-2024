"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "./switch";

interface ThemeSwitchProps {
  className?: string;
}

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(resolvedTheme === "light");
  }, [resolvedTheme]);

  const handleCheckedChange = (e: boolean) => {
    setTheme(e ? "light" : "dark");
    setChecked(e);
  };

  return (
    <span className="flex items-center gap-2 transition-all">
      <Switch
        checked={checked}
        onCheckedChange={handleCheckedChange}
        className={className}
      />
      {checked ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </span>
  );
};

export default ThemeSwitch;
