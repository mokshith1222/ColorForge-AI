'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Layers, Wand2, Monitor, Eye, Image as ImageIcon, CheckCircle, ShieldCheck, Mail, Zap, Target, BookOpen, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AuroraBackground } from '@/components/home/aurora-background';
import { HeroDemo } from '@/components/home/hero-demo';
import { NewsletterSubscribe } from '@/components/home/newsletter-subscribe';
import { JsonLd, generateFAQSchema, generateBreadcrumbSchema } from '@/components/seo/json-ld';

const tools = [
  {
    title: 'Color Picker',
    description: 'Advanced selection with HEX, RGB, HSL, HSV, CMYK, LAB, LCH support.',
    icon: Palette,
    href: '/color-picker',
  },
  {
    title: 'Palette Generator',
    description: 'Create harmonious, monochromatic, analogous, and complementary palettes instantly.',
    icon: Layers,
    href: '/color-palette-generator',
  },
  {
    title: 'Gradient Generator',
    description: 'Build complex linear, radial, and conic gradients with a visual drag-and-drop canvas.',
    icon: Wand2,
    href: '/gradient-generator',
  },
  {
    title: 'Tailwind Scale Generator',
    description: 'Automatically generate perfect 50-950 shade scales optimized for modern web UI.',
    icon: Monitor,
    href: '/tailwind-color-generator',
  },
  {
    title: 'Accessibility Checker',
    description: 'Ensure text contrast meets WCAG AA & AAA standards with real-time UI preview modes.',
    icon: Eye,
    href: '/accessibility-checker',
  },
  {
    title: 'Image Color Extractor',
    description: 'Upload an image and instantly pull dominant, vibrant, and muted color palettes.',
    icon: ImageIcon,
    href: '/image-color-extractor',
  },
];

const faqs = [
  { question: "What is ColorForge AI?", answer: "ColorForge AI is a comprehensive suite of professional color tools designed for developers, UI/UX designers, and digital creators. It combines advanced color generation algorithms with practical export features like Tailwind CSS scaling, WCAG accessibility checking, and CSS variable generation." },
  { question: "Is ColorForge AI completely free to use?", answer: "Yes! Currently, all of our core tools including the Color Picker, Palette Generator, Gradient Canvas, and Tailwind Scale Generator are 100% free to use with no hidden paywalls or subscription requirements." },
  { question: "How does the Tailwind Color Generator work?", answer: "Our algorithm calculates perceptual lightness (L*) in the LAB color space to mathematically generate a balanced 11-step scale (50-950) that perfectly matches the default Tailwind CSS aesthetic while preserving your base brand hue." },
  { question: "What accessibility standards do you support?", answer: "Our Accessibility Checker strictly follows the WCAG 2.1 guidelines. We calculate the relative luminance of your foreground and background colors to ensure contrast ratios meet or exceed the 4.5:1 (AA) and 7.0:1 (AAA) minimum thresholds." },
  { question: "Can I save my color palettes?", answer: "Yes. All generated colors, gradients, and palettes can be saved directly to your local browser storage by clicking the 'Save' or '+' icons. You can view all your saved assets in the 'Collections' dashboard." },
  { question: "How do I export my colors to my project?", answer: "Every tool in ColorForge AI includes 1-click copy buttons that format your colors perfectly for your codebase. We support raw HEX, RGB, HSL strings, CSS Variables, SCSS variables, JSON design tokens, and module.exports for tailwind.config.js." },
  { question: "Is the Image Extractor secure?", answer: "Absolutely. The Image Color Extractor processes your image entirely client-side within your browser. Your images are never uploaded to any external server, ensuring complete privacy." },
  { question: "Do I need to create an account?", answer: "No account creation is required to use ColorForge AI. You can access all tools, read all educational guides, and save collections locally without ever logging in." },
  { question: "How often is the educational content updated?", answer: "Our Color Theory, Accessibility, and UI Design hubs are updated monthly with new insights, trends, and practical design system architecture guides by industry professionals." },
  { question: "Who built ColorForge AI?", answer: "ColorForge AI was engineered by a team of frontend developers and UI designers who were frustrated by juggling multiple tabs and apps just to build a cohesive design system." }
];

import { FeaturesSection } from '@/components/home/features-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <JsonLd type="FAQPage" data={generateFAQSchema(faqs)} />
      <JsonLd type="Organization" data={{
         name: "ColorForge AI",
         url: "https://colorforge.ai",
         logo: "https://colorforge.ai/logo.png",
         description: "The ultimate color design platform and educational resource for modern web developers and UI designers.",
      }} />

      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full items-center justify-center pt-20 px-4 md:px-8 xl:px-16">
        <AuroraBackground />
        
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left pt-12 lg:pt-0"
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
              Traffic Ready • V2 Platform Live
            </div>
            
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-[5rem] leading-[1.1]">
              Design Better. <br />
              Create Faster. <br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent pb-2">
                With Colors.
              </span>
            </h1>
            
            <p className="mb-10 max-w-xl text-lg text-muted-foreground sm:text-xl font-medium leading-relaxed">
              The most advanced color toolkit for designers, developers & creators. All the tools you need in one powerful platform.
            </p>
            
            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4">
              <Link href="/tools" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all">
                  Explore Tools
                </Button>
              </Link>
              <Link href="https://github.com/mokshith1222/ColorForge-AI" target="_blank" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base bg-background/50 backdrop-blur-sm border-white/10 hover:bg-background/80">
                  <Star className="mr-2 h-5 w-5" /> Star on GitHub
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                 <img src="https://i.pravatar.cc/100?u=1" className="w-8 h-8 rounded-full border-2 border-background" alt="User" />
                 <img src="https://i.pravatar.cc/100?u=2" className="w-8 h-8 rounded-full border-2 border-background" alt="User" />
                 <img src="https://i.pravatar.cc/100?u=3" className="w-8 h-8 rounded-full border-2 border-background" alt="User" />
                 <img src="https://i.pravatar.cc/100?u=4" className="w-8 h-8 rounded-full border-2 border-background" alt="User" />
              </div>
              <p>Loved by 50K+ designers & developers</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full hidden md:block"
          >
            <HeroDemo />
          </motion.div>
        </div>
      </section>

      {/* Brands Section (From Mockup) */}
      <section className="w-full py-8 border-b border-border/50 bg-background/50 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           <span className="text-sm font-bold tracking-widest uppercase">Trusted by creators at</span>
           <span className="font-bold text-xl flex items-center gap-2"><div className="w-4 h-4 bg-blue-500 rounded-sm"></div> Microsoft</span>
           <span className="font-bold text-xl flex items-center gap-2"><div className="w-4 h-4 bg-red-500 rounded-full"></div> Google</span>
           <span className="font-bold text-xl flex items-center gap-2"><div className="w-4 h-4 bg-pink-500 rounded-tl-xl rounded-br-xl"></div> airbnb</span>
           <span className="font-bold text-xl flex items-center gap-2"><div className="w-4 h-4 bg-green-500 rounded-full"></div> Spotify</span>
           <span className="font-bold text-xl flex items-center gap-2"><div className="w-4 h-4 bg-black border border-white/20 rounded-sm"></div> vercel</span>
        </div>
      </section>

      <FeaturesSection />

      {/* Stats Section */}
      <section className="w-full py-12 relative z-10 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Card className="glass"><CardContent className="p-6 text-center"><div className="flex justify-center mb-2"><Palette className="w-6 h-6 text-primary" /></div><h4 className="text-3xl font-bold">1.2M+</h4><p className="text-xs text-muted-foreground uppercase tracking-wider">Generated Palettes</p></CardContent></Card>
            <Card className="glass"><CardContent className="p-6 text-center"><div className="flex justify-center mb-2"><Wand2 className="w-6 h-6 text-blue-500" /></div><h4 className="text-3xl font-bold">850K+</h4><p className="text-xs text-muted-foreground uppercase tracking-wider">Exported Themes</p></CardContent></Card>
            <Card className="glass"><CardContent className="p-6 text-center"><div className="flex justify-center mb-2"><Zap className="w-6 h-6 text-amber-500" /></div><h4 className="text-3xl font-bold">10K+</h4><p className="text-xs text-muted-foreground uppercase tracking-wider">Gradient Backgrounds</p></CardContent></Card>
            <Card className="glass"><CardContent className="p-6 text-center"><div className="flex justify-center mb-2"><Target className="w-6 h-6 text-emerald-500" /></div><h4 className="text-3xl font-bold">500K+</h4><p className="text-xs text-muted-foreground uppercase tracking-wider">Active Users</p></CardContent></Card>
          </div>
        </div>
      </section>

      {/* Why It Matters / E-E-A-T Section */}
      <section className="w-full py-24 bg-background relative z-10 border-t border-border/50">
         <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Built For Professional Engineering</h2>
               <p className="text-lg text-muted-foreground">
                  Color isn't just aesthetics—it's architecture. ColorForge AI bridges the gap between creative visual design and rigid code infrastructure. Whether you're configuring a massive Tailwind config file, establishing brand tokens, or auditing contrast for accessibility compliance, we provide mathematically sound tools to execute with absolute confidence.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                     <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Mathematical Precision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                     Our algorithms don't guess. We utilize modern perceptual color spaces (LAB & LCH) to calculate shade generation, ensuring that an automatically generated 500-weight color feels visually identical in saturation to any other 500-weight color in your design system.
                  </p>
               </div>
               <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                     <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">WCAG Accessibility First</h3>
                  <p className="text-muted-foreground leading-relaxed">
                     Inclusive design is non-negotiable. Our contrast checking engine provides real-time validation against the Web Content Accessibility Guidelines (WCAG) AA and AAA standards, protecting your applications from usability flaws.
                  </p>
               </div>
               <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                     <Zap className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Instant Implementation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                     Stop manually typing HEX codes. ColorForge AI outputs highly optimized, ready-to-paste code structures for Tailwind CSS configs, root CSS variables, JSON design tokens, and SCSS primitives.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* Popular Tools Section */}
      <section className="container mx-auto w-full px-4 py-24 relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold sm:text-5xl tracking-tight mb-6">Complete Toolkit Hub</h2>
          <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
            A comprehensive suite of 6+ specialized color tools engineered for designers, developers, and creators who demand precision and speed.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="h-full"
            >
              <Link href={tool.href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 glass dark:glass-dark overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="relative z-10 pb-4">
                     <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground shadow-sm">
                       <tool.icon className="h-6 w-6" />
                     </div>
                     <CardTitle className="text-xl group-hover:text-primary transition-colors">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                     <CardDescription className="text-base leading-relaxed">
                       {tool.description}
                     </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Author / Trust Section */}
      <section className="w-full py-24 bg-card/50 relative z-10 border-y border-border/50">
         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
               <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary shadow-inner mb-6">
                  <BookOpen className="w-4 h-4 mr-2" /> Expert Knowledge
               </div>
               <h2 className="text-3xl md:text-4xl font-bold mb-6">Rooted in Proven Theory</h2>
               <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  ColorForge AI wasn't built by assembling random color strings. It was designed from the ground up by experts in color theory, UI/UX interaction patterns, and modern frontend architecture. 
               </p>
               <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We don't just give you tools—we provide the context. Explore our extensive knowledge hubs to master the psychology behind color selection, learn how to build scalable design tokens, and understand the rigorous accessibility standards that define the modern web.
               </p>
               <Link href="/color-theory">
                  <Button variant="secondary" size="lg">Read the Guides <ArrowRight className="ml-2 w-4 h-4" /></Button>
               </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div className="p-6 bg-background rounded-2xl shadow-sm border border-border">
                  <div className="text-4xl font-black text-primary mb-2">99%</div>
                  <div className="text-sm font-semibold text-muted-foreground">WCAG Accuracy</div>
               </div>
               <div className="p-6 bg-background rounded-2xl shadow-sm border border-border">
                  <div className="text-4xl font-black text-accent mb-2">11</div>
                  <div className="text-sm font-semibold text-muted-foreground">Shade Algorithms</div>
               </div>
               <div className="p-6 bg-background rounded-2xl shadow-sm border border-border col-span-2">
                  <div className="text-2xl font-black mb-2 flex items-center gap-2"><ShieldCheck className="w-6 h-6 text-green-500" /> Client-Side Only</div>
                  <div className="text-sm font-semibold text-muted-foreground">Total privacy. Zero data tracking.</div>
               </div>
            </div>
         </div>
      </section>

      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-32 relative z-10 max-w-4xl">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about the ColorForge AI platform.</p>
         </div>

         <Accordion type="single" className="w-full">
            {faqs.map((faq, i) => (
               <AccordionItem key={i} value={`faq-${i}`} className="mb-2 border border-border/50 bg-card rounded-lg px-2 shadow-sm data-[state=open]:border-primary/50 transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-lg py-4 hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4 pt-1">
                     {faq.answer}
                  </AccordionContent>
               </AccordionItem>
            ))}
         </Accordion>
      </section>
      
      {/* Newsletter / Subscribe Section */}
      <section className="w-full bg-black text-white py-32 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-8 shadow-2xl">
             <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="mb-6 text-4xl font-bold sm:text-5xl tracking-tight">Join The Color Ecosystem</h2>
          <p className="mb-12 max-w-xl mx-auto text-lg text-white/70 leading-relaxed">
            Get exclusive access to cutting-edge color theory guides, UI design trend reports, and structural tailwind design token packages directly in your inbox. No spam. Just pure design engineering.
          </p>
          
          <NewsletterSubscribe />
          
        </div>
      </section>
    </div>
  );
}
