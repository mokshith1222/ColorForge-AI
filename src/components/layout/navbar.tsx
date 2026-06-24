'use client';

import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';
import { Moon, Sun, Palette, Code2, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CommandMenu } from '@/components/layout/command-menu';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorForgeLogo } from '@/components/branding/colorforge-logo';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Tools', href: '/color-picker' },
    { name: 'Collections', href: '/collections' },
    { name: 'Gradients', href: '/gradient-generator' },
    { name: 'Brand Colors', href: '/brand-colors' },
    { name: 'Trends', href: '/trends' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-md supports-[backdrop-filter]:bg-background/40">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center group min-w-[180px] max-w-[260px] outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-primary">
            <ColorForgeLogo 
              animated 
              iconClassName="w-8 h-8 md:w-10 md:h-10" 
              wordmarkClassName="text-lg md:text-xl"
            />
          </Link>
          <nav className="hidden gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center space-x-2">
            <Link href="https://github.com/moksh/colorforge" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
              <Button variant="ghost" size="icon" className="hidden sm:flex" tabIndex={-1}>
                <Code2 className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-md"
          >
            <nav className="container flex flex-col py-4 gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
