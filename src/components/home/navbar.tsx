"use client";

import { useState } from "react";
import Logo from "@/public/brand/logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed lg:top-8 top-6 left-1/2 transform -translate-x-1/2 z-50 bg-background/70 backdrop-blur-md border border-border rounded-xl max-w-7xl w-[90%] transition-all duration-300">
      <div className="px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/90 backdrop-blur-md rounded-b-xl shadow-inner">
          <div className="flex flex-col gap-4 px-6 py-6">
            <NavLinks onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <a
        href="#how-it-works"
        onClick={onClick}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        How it works
      </a>
      <a
        href="#about"
        onClick={onClick}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        About us
      </a>
      <a
        href="#contact"
        onClick={onClick}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Contact
      </a>
    </>
  );
}