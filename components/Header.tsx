"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["hero", "about", "skills", "projects", "contact"];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const headerClass = scrolled
    ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
    : "bg-transparent";

  return (
    <header className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300 " + headerClass}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
            aria-label="Go to top"
          >
            <span className="gradient-text">AR</span>
            <span className="text-foreground">.</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              const navClass = isActive
                ? "text-accent bg-accent/10"
                : "text-muted hover:text-foreground hover:bg-surface";
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={"px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 " + navClass}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-all duration-200 hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 rounded-lg bg-surface hover:bg-surface-hover border border-border flex items-center justify-center transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <div className="w-4 flex flex-col gap-1">
                <span className={"block h-0.5 bg-foreground transition-all duration-300 " + (menuOpen ? "rotate-45 translate-y-1.5" : "")} />
                <span className={"block h-0.5 bg-foreground transition-all duration-300 " + (menuOpen ? "opacity-0" : "")} />
                <span className={"block h-0.5 bg-foreground transition-all duration-300 " + (menuOpen ? "-rotate-45 -translate-y-1.5" : "")} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={"md:hidden transition-all duration-300 overflow-hidden " + (menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0")}>
        <nav
          className="bg-background/95 backdrop-blur-md border-b border-border px-4 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            const mobileNavClass = isActive
              ? "text-accent bg-accent/10"
              : "text-muted hover:text-foreground hover:bg-surface";
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={"w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 " + mobileNavClass}
              >
                {link.label}
              </button>
            );
          })}
          <a
            href="/resume.pdf"
            className="mt-2 px-4 py-3 rounded-lg bg-accent text-white text-sm font-medium text-center hover:bg-accent-dark transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
