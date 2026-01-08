"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <select
      value={currentTheme}
      onChange={e => setTheme(e.target.value)}
      className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  )
}