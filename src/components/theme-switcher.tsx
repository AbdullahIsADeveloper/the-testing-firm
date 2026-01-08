"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { SunIcon, MoonIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid"

export default function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const displayTheme = theme === "system" ? systemTheme : theme

  // cycles: light -> dark -> system -> light -> ...
  const handleToggle = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={handleToggle}
      className="rounded-full hover:bg-accent/20 transition-all duration-150"
    >
      {theme === "system" ? (
        <ComputerDesktopIcon className="w-5 h-5" />
      ) : displayTheme === "dark" ? (
        <MoonIcon className="w-5 h-5" />
      ) : (
        <SunIcon className="w-5 h-5" />
      )}
    </button>
  )
}