"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import { BookOpen, Github, Menu, X } from "lucide-react";
import dynamic from 'next/dynamic';

// Import the logo with no SSR
const OZLogo = dynamic(() => import('@/components/ui/oz-logo').then(mod => mod.OZLogo), {
  ssr: false
});

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-border/40 bg-background sticky top-0 z-50">
      <div className="header__wrapper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <OZLogo />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Button variant="ghost" asChild className="text-sm font-medium">
                <Link href="/how-it-works" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>How it works</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                <a
                  href="https://github.com/openzeppelin/safe-utils"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <ModeToggle />
            </nav>
            
            {/* Mobile Navigation Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 py-3">
            <Link 
              href="/how-it-works"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              <span>How it works</span>
            </Link>
            <a
              href="https://github.com/openzeppelin/safe-utils"
              className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <div className="px-3 py-2">
              <ModeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}