"use client";

import { useState, useEffect } from "react";
import Logo from "@/public/brand/logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "how-it-works", "about", "contact"];

    function onScroll() {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const elem = document.getElementById(section);
        if (elem) {
          const offsetTop = elem.offsetTop;
          const offsetBottom = offsetTop + elem.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    }

    window.addEventListener("scroll", onScroll);
    onScroll(); // Initialize active section on load

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function handleClick(section: string) {
    setOpen(false);
    const elem = document.getElementById(section);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 bg-background/70 backdrop-blur-xs border border-border rounded-xl max-w-7xl mx-auto w-[90%] transition-all duration-300">
      <div className="px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          <NavLinks activeSection={activeSection} onClick={handleClick} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-background/30 transition"
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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/90 backdrop-blur-lg rounded-b-xl shadow-inner">
          <div className="flex flex-col gap-2 px-6 py-6">
            <NavLinks
              activeSection={activeSection}
              onClick={(section) => {
                handleClick(section);
                setOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({
  activeSection,
  onClick,
}: {
  activeSection?: string;
  onClick?: (section: string) => void;
}) {
  const links = [
    { id: "home", label: "Home" },
    { id: "why-us", label: "Why us" },
    { id: "how-it-works", label: "How it works" },
    { id: "about", label: "About us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {links.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            if (onClick) onClick(id);
          }}
          className={`text-sm transition-colors rounded-xl px-3 py-[2px] ${
            activeSection === id
              ? "text-foreground font-semibold border-foreground bg-accent"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {label}
        </a>
      ))}
    </>
  );
}
