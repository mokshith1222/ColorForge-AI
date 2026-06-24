'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Pipette, Palette, Sparkles, Wand2, ArrowRightLeft, Layout, 
  Eye, Image as ImageIcon, PaintBucket, Briefcase, Droplets, 
  EyeOff, Layers, Code2, Download, Terminal, Settings, 
  Camera, Bookmark, TrendingUp 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const TOOLS = [
  { href: '/color-picker', name: 'Advanced Color Picker', desc: 'Pick any color with precision', icon: Pipette },
  { href: '/color-palette-generator', name: 'Palette Generator', desc: 'Create beautiful color palettes', icon: Palette },
  { href: '/gradient-generator', name: 'Gradient Generator', desc: 'Design stunning gradients', icon: Sparkles },
  { href: '/ai-palette', name: 'AI Palette Generator', desc: 'AI-powered color suggestions', icon: Wand2 },
  { href: '/color-converter', name: 'Color Converter', desc: 'Convert between formats', icon: ArrowRightLeft },
  { href: '/tailwind-generator', name: 'Tailwind Generator', desc: 'Generate Tailwind color scales', icon: Layout },
  { href: '/accessibility-checker', name: 'Accessibility Checker', desc: 'Check color accessibility', icon: Eye },
  { href: '/image-color-extractor', name: 'Image Color Extractor', desc: 'Extract colors from images', icon: ImageIcon },
  { href: '/theme-generator', name: 'Theme Generator', desc: 'Generate complete themes', icon: PaintBucket },
  { href: '/brand-colors', name: 'Brand Colors', desc: 'Explore brand color libraries', icon: Briefcase },
  { href: '/gradient-backgrounds', name: 'Gradient Backgrounds', desc: '1000+ beautiful gradients', icon: Droplets },
  { href: '/color-blindness', name: 'Color Blindness Simulator', desc: 'Test color visibility', icon: EyeOff },
  { href: '/ui-preview', name: 'UI Palette Preview', desc: 'Preview in real UI layouts', icon: Layers },
  { href: '/tokens', name: 'Design Token Generator', desc: 'Export design tokens', icon: Code2 },
  { href: '/export', name: 'Export Center', desc: 'Export in multiple formats', icon: Download },
  { href: '/dev-hub', name: 'Developer Hub', desc: 'Resources for developers', icon: Terminal },
  { href: '/css-vars', name: 'CSS Variable Generator', desc: 'Generate CSS variables', icon: Settings },
  { href: '/screenshot', name: 'Screenshot Extractor', desc: 'Extract from screenshots', icon: Camera },
  { href: '/collections', name: 'Color Collections', desc: 'Curated color collections', icon: Bookmark },
  { href: '/trends', name: 'Color Trends', desc: 'Trending color insights', icon: TrendingUp },
];

export function RightSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-80 border-l border-border/50 bg-background/50 backdrop-blur-xl h-[calc(100vh-3.5rem)] sticky top-14 hidden 2xl:flex flex-col flex-shrink-0 z-30">
      <div className="p-4 border-b border-border/50 bg-muted/20">
        <h3 className="font-semibold flex items-center gap-2">
          <span className="text-primary font-bold">20+</span> Powerful Tools
        </h3>
      </div>
      
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
        <div className="p-3 space-y-1">
          {TOOLS.map((tool) => {
            const isActive = pathname === tool.href;
            const Icon = tool.icon;
            
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className={cn(
                  "flex items-start gap-3 p-3 rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "bg-primary/10 border border-primary/20" 
                    : "hover:bg-muted/50 border border-transparent hover:border-border/50"
                )}
              >
                <div className={cn(
                  "p-2 rounded-md shadow-sm shrink-0 transition-colors",
                  isActive ? "bg-primary/20 text-primary" : "bg-card border border-border/50 text-muted-foreground group-hover:text-foreground group-hover:border-primary/30"
                )}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className={cn(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-primary" : "text-foreground group-hover:text-primary"
                  )}>
                    {tool.name}
                  </span>
                  <span className="text-xs text-muted-foreground line-clamp-1">
                    {tool.desc}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      
      <div className="p-4 border-t border-border/50 bg-card/50">
        <Link 
          href="/tools"
          className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          Explore All Tools
          <ArrowRightLeft className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </aside>
  );
}
