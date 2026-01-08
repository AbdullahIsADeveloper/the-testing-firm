"use client";

import { useState, useEffect, useRef } from "react";
import Logo from "@/public/brand/logo";
import { useTheme } from "next-themes";
import ThemeSwitcher from "../theme-switcher";

const SECTIONS = ["home", "why-us", "how-it-works", "about", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + 120;
      for (const section of SECTIONS) {
        const elem = document.getElementById(section);
        if (!elem) continue;
        const top = elem.offsetTop;
        const bottom = top + elem.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActiveSection(section);
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleClick(section: string) {
    setOpen(false);
    const elem = document.getElementById(section);
    elem?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 mx-auto w-[90%] max-w-7xl rounded-xl border border-border bg-background/70 backdrop-blur-md transition-all">
      <div className="flex items-center justify-between px-6 py-2">
        <Logo />

        {/* Desktop nav + theme switcher */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks activeSection={activeSection} onClick={handleClick} />
          <ThemeSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-md p-1 text-muted-foreground hover:text-foreground"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/90 backdrop-blur-lg">
          <div className="px-6 py-6 flex flex-col gap-6">
            <NavLinks
              activeSection={activeSection}
              onClick={(id) => {
                handleClick(id);
                setOpen(false);
              }}
              vertical
            />
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({
  activeSection,
  onClick,
  vertical = false,
}: {
  activeSection: string;
  onClick: (id: string) => void;
  vertical?: boolean;
}) {
  const links = [
    { id: "home", label: "Home" },
    { id: "why-us", label: "Why us" },
    { id: "how-it-works", label: "How it works" },
    { id: "about", label: "About us" },
    { id: "contact", label: "Contact" },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (vertical) return;
    const activeEl = containerRef.current?.querySelector(
      `[data-id="${activeSection}"]`
    ) as HTMLElement | null;
    if (activeEl) {
      setIndicator({
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      });
    }
  }, [activeSection, vertical]);

  return (
    <div
      ref={containerRef}
      className={`relative ${vertical ? "flex flex-col gap-2" : "flex gap-2"}`}
    >
      {!vertical && (
        <span
          className="absolute inset-y-0 rounded-md bg-accent transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            left: indicator.left,
            width: indicator.width,
          }}
        />
      )}

      {links.map(({ id, label }) => (
        <a
          key={id}
          data-id={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            onClick(id);
          }}
          className={`relative z-10 rounded-md px-3 py-[2px] text-sm transition-colors hover:bg-accent ${
            activeSection === id
              ? "text-foreground font-semibold"
              : "text-muted-foreground"
          }`}
        >
          {label}
        </a>
      ))}
    </div>
  );
}