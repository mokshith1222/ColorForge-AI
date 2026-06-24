import Link from 'next/link';
import { Palette, Twitter, Github, Linkedin } from 'lucide-react';
import { ColorForgeLogo } from '@/components/branding/colorforge-logo';

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
          <Link href="/" className="flex items-center group w-fit outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-primary mb-4">
            <ColorForgeLogo 
              iconClassName="w-10 h-10" 
              wordmarkClassName="text-xl"
            />
          </Link>
          <div className="mt-4 text-sm font-semibold tracking-widest text-muted-foreground uppercase flex flex-col gap-1">
             <span>Design Better.</span>
             <span>Create Faster.</span>
             <span className="text-primary">With Colors.</span>
          </div>
          <div className="flex gap-4 mt-6 text-muted-foreground">
             <Link href="https://twitter.com" target="_blank" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></Link>
             <Link href="https://github.com/mokshith1222/ColorForge-AI" target="_blank" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></Link>
             <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
          </div>
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
