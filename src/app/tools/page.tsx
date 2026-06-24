import React from 'react';
import Link from 'next/link';
import { 
  Pipette, Palette, Sparkles, Wand2, ArrowRightLeft, Layout, 
  Eye, Image as ImageIcon, PaintBucket, Briefcase, Droplets, 
  EyeOff, Layers, Code2, Download, Terminal, Settings, 
  Camera, Bookmark, TrendingUp 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'All Tools - ColorForge AI',
  description: 'Explore our complete collection of color tools for designers and developers.',
};

const TOOLS = [
  { href: '/color-picker', name: 'Advanced Color Picker', desc: 'Pick any color with precision', icon: Pipette },
  { href: '/color-palette-generator', name: 'Palette Generator', desc: 'Create beautiful color palettes', icon: Palette },
  { href: '/gradient-generator', name: 'Gradient Generator', desc: 'Design stunning gradients', icon: Sparkles },
  { href: '/ai-palette', name: 'AI Palette Generator', desc: 'AI-powered color suggestions', icon: Wand2 },
  { href: '/color-converter', name: 'Color Converter', desc: 'Convert between formats', icon: ArrowRightLeft },
  { href: '/tailwind-color-generator', name: 'Tailwind Generator', desc: 'Generate Tailwind color scales', icon: Layout },
  { href: '/accessibility-checker', name: 'Accessibility Checker', desc: 'Check color accessibility', icon: Eye },
  { href: '/image-color-extractor', name: 'Image Color Extractor', desc: 'Extract colors from images', icon: ImageIcon },
  { href: '/theme-generator', name: 'Theme Generator', desc: 'Generate complete themes', icon: PaintBucket },
  { href: '/brand-colors', name: 'Brand Colors', desc: 'Explore brand color libraries', icon: Briefcase },
  { href: '/gradient-backgrounds', name: 'Gradient Backgrounds', desc: '1000+ beautiful gradients', icon: Droplets },
  { href: '/color-blindness', name: 'Color Blindness Simulator', desc: 'Test color visibility', icon: EyeOff },
  { href: '/ui-preview', name: 'UI Palette Preview', desc: 'Preview in real UI layouts', icon: Layers },
  { href: '/tokens', name: 'Design Token Generator', desc: 'Export design tokens', icon: Code2 },
  { href: '/export', name: 'Export Center', desc: 'Export in multiple formats', icon: Download },
  { href: '/developer-hub', name: 'Developer Hub', desc: 'Resources for developers', icon: Terminal },
  { href: '/css-vars', name: 'CSS Variable Generator', desc: 'Generate CSS variables', icon: Settings },
  { href: '/collections', name: 'Color Collections', desc: 'Curated color collections', icon: Bookmark },
  { href: '/trends', name: 'Color Trends', desc: 'Trending color insights', icon: TrendingUp },
];

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold sm:text-5xl tracking-tight mb-4">All Tools</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Explore our complete collection of color tools for designers and developers.
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link key={tool.href} href={tool.href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
              <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 glass dark:glass-dark overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative z-10 pb-4">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{tool.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base leading-relaxed">
                    {tool.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
