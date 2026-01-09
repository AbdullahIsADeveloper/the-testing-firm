"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";

const themes = [
  { key: "system", label: "System", icon: ComputerDesktopIcon },
  { key: "light", label: "Light", icon: SunIcon },
  { key: "dark", label: "Dark", icon: MoonIcon },
];

export default function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolvedTheme = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : "system";

  const CurrentIcon =
    themes.find((t) => t.key === resolvedTheme)?.icon ??
    ComputerDesktopIcon;

  return (
    <>
      {/* ================= Desktop ================= */}
      <div className="relative hidden md:block px-1">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Theme selector"
          className="rounded-md p-1 hover:bg-accent transition"
        >
          <CurrentIcon className="h-3 w-3 text-foreground" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 rounded-md border border-border bg-popover shadow-md">
            {themes.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => {
                  setTheme(key);
                  setOpen(false);
                }}
                className="flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-accent"
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ================= Mobile ================= */}
      <div className="md:hidden">
        <label className="mb-1 block text-sm font-medium text-muted-foreground">
          Theme
        </label>
        <select
          value={theme ?? "system"}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </>
  );
}