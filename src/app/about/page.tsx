import { Metadata } from 'next';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/json-ld';
import { Palette, Layers } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Us | ColorForge AI',
  description: 'Learn about the mission, team, and engineering behind ColorForge AI, the ultimate color ecosystem for modern digital creators.',
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <JsonLd type="BreadcrumbList" data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <div className="text-center mb-16">
         <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 mb-6 shadow-inner">
            <Palette className="w-10 h-10 text-primary" />
         </div>
         <h1 className="text-5xl font-extrabold tracking-tight mb-6">About ColorForge AI</h1>
         <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We are building the ultimate color ecosystem. Bridging the gap between creative visual design and rigid code infrastructure.
         </p>
      </div>

      <div className="space-y-12 text-lg leading-relaxed text-foreground/80">
        <section className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p>
            The modern web demands precision. Designers craft beautiful UI components, but translating those visual choices into scalable, accessible, and mathematically sound code systems is a tedious, error-prone process.
          </p>
          <p className="mt-4">
            ColorForge AI was built to solve this exact bottleneck. Our mission is to provide developers and designers with an integrated suite of mathematically precise color tools. We want you to spend less time calculating hex codes and more time building beautiful products.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">The Engineering Difference</h2>
          <p>
            Unlike simple color pickers, ColorForge AI leverages modern perceptual color spaces (like LAB and LCH) to ensure that the colors you generate are mathematically balanced. 
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mt-6">
             <div className="p-6 rounded-xl border border-border/50 bg-muted/30">
                <Layers className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Perceptual Scaling</h3>
                <p className="text-sm">We generate Tailwind scales (50-950) that respect the human eye's perception of lightness, preventing "muddy" or "washed out" mid-tones.</p>
             </div>
             <div className="p-6 rounded-xl border border-border/50 bg-muted/30">
                <Palette className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-bold text-foreground mb-2">Client-Side Privacy</h3>
                <p className="text-sm">All color extraction from your images happens directly in your browser via the HTML5 Canvas API. Total privacy by design.</p>
             </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Connect With Us</h2>
          <p className="mb-6">
            ColorForge AI is actively maintained and continually evolving. We love feedback from the community. Whether you've found a bug, have a feature request, or just want to say hi, reach out!
          </p>
          <div className="flex gap-4">
             <Link href="/contact">
                <Button>Contact Us</Button>
             </Link>
             <Button variant="outline" className="gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg> Twitter
             </Button>
             <Button variant="outline" className="gap-2">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> GitHub
             </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
