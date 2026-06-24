import Link from 'next/link';
import { Palette } from 'lucide-react';

export function Footer() {
  const links = {
    Product: [
      { name: 'All Tools', href: '/' },
      { name: 'Collections', href: '/collections' },
      { name: 'Brand Colors', href: '/brand-colors' },
      { name: 'Trends', href: '/trends' },
    ],
    Resources: [
      { name: 'Color Theory', href: '/color-theory' },
      { name: 'Accessibility Checker', href: '/accessibility-checker' },
      { name: 'Design Systems', href: '/design-systems' },
      { name: 'Developer Docs', href: '/developer-hub' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="border-t border-white/10 bg-background py-12 md:py-16 mt-auto">
      <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center space-x-2 group w-fit">
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-accent">
              <Palette className="h-5 w-5 text-white" />
            </div>
            <span className="inline-block font-bold text-lg">ColorForge AI</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            The ultimate color design platform. Generate palettes, gradients, and tailwind scales. Create perfect color systems instantly.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-3">
            {links.Product.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            {links.Resources.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-3">
            {links.Company.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="container mt-12 pt-8 border-t border-border">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ColorForge AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
