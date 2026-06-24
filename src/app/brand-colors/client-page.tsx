'use client';

import React, { useState } from 'react';
import { Search, Copy, Check, ExternalLink, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

import { BRANDS as SIMPLE_ICONS_BRANDS } from '@/data/brands';

// Mock data for famous brands with multiple colors
const TOP_BRANDS = [
  { name: 'Google', category: 'Technology', colors: ['#4285F4', '#DB4437', '#F4B400', '#0F9D58'], url: 'https://google.com' },
  { name: 'Apple', category: 'Technology', colors: ['#000000', '#555555', '#AAAAAA', '#F5F5F7'], url: 'https://apple.com' },
  { name: 'Microsoft', category: 'Technology', colors: ['#F25022', '#7FBA00', '#00A4EF', '#FFB900', '#737373'], url: 'https://microsoft.com' },
  { name: 'Twitter (X)', category: 'Social Media', colors: ['#1DA1F2', '#14171A', '#657786', '#AAB8C2', '#E1E8ED', '#F5F8FA'], url: 'https://x.com' },
  { name: 'Facebook', category: 'Social Media', colors: ['#1877F2', '#898F9C', '#4267B2', '#F0F2F5'], url: 'https://facebook.com' },
  { name: 'Amazon', category: 'E-commerce', colors: ['#FF9900', '#146EB4', '#232F3E', '#37475A'], url: 'https://amazon.com' },
  { name: 'Netflix', category: 'Entertainment', colors: ['#E50914', '#221F1F', '#F5F5F1'], url: 'https://netflix.com' },
  { name: 'Spotify', category: 'Entertainment', colors: ['#1DB954', '#191414'], url: 'https://spotify.com' },
  { name: 'Slack', category: 'Productivity', colors: ['#4A154B', '#36C5F0', '#2EB67D', '#E01E5A', '#ECB22E'], url: 'https://slack.com' },
  { name: 'Stripe', category: 'Finance', colors: ['#635BFF', '#0A2540', '#00D4FF'], url: 'https://stripe.com' },
  { name: 'Vercel', category: 'Technology', colors: ['#000000', '#FFFFFF', '#0070F3', '#FF0080', '#7928CA'], url: 'https://vercel.com' },
  { name: 'Figma', category: 'Design', colors: ['#F24E1E', '#FF7262', '#A259FF', '#1ABCFE', '#0ACF83'], url: 'https://figma.com' }
];

const ALL_BRANDS = [
  ...TOP_BRANDS,
  ...SIMPLE_ICONS_BRANDS.filter(b => !TOP_BRANDS.find(tb => tb.name.toLowerCase() === b.name.toLowerCase()))
];

export function BrandColorsClient() {
  const [search, setSearch] = useState('');
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);

  const filteredBrands = ALL_BRANDS.filter(brand => 
    brand.name.toLowerCase().includes(search.toLowerCase()) || 
    brand.category.toLowerCase().includes(search.toLowerCase())
  );

  const visibleBrands = filteredBrands.slice(0, 100); // Prevent lag by showing only 100

  const handleCopy = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const handleCopyAll = async (brand: typeof ALL_BRANDS[0], format: 'json' | 'css') => {
    let text = '';
    if (format === 'json') {
      text = JSON.stringify(brand.colors, null, 2);
    } else {
      const prefix = brand.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
      text = `:root {\n` + brand.colors.map((c, i) => `  --${prefix}-${i+1}: ${c};`).join('\n') + `\n}`;
    }
    await navigator.clipboard.writeText(text);
    setCopiedColor(`${brand.name}-all-${format}`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Brand Colors Explorer</h1>
        <p className="text-lg text-muted-foreground">
          Discover and copy the official color palettes of {ALL_BRANDS.length}+ recognizable brands.
        </p>
      </div>

      <div className="relative mb-12 max-w-md">
        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input 
          className="pl-10 h-12 text-lg bg-card/50 backdrop-blur-sm border-2 focus-visible:ring-primary/50" 
          placeholder="Search for a brand or category..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleBrands.map((brand, index) => (
          <Card 
            key={`${brand.name}-${index}`} 
            className={`glass transition-all duration-300 group overflow-hidden border-border/50 ${expandedBrand === brand.name ? 'ring-2 ring-primary shadow-xl' : 'hover:shadow-xl'}`}
          >
            <CardHeader 
              className="pb-4 cursor-pointer select-none" 
              onClick={() => setExpandedBrand(expandedBrand === brand.name ? null : brand.name)}
            >
              <div className="flex justify-between items-start">
                 <div>
                    <CardTitle className="text-xl mb-1 flex items-center gap-2">
                       {brand.name}
                       <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${expandedBrand === brand.name ? 'rotate-180' : ''}`} />
                    </CardTitle>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{brand.category}</span>
                 </div>
                 <a 
                   href={brand.url || `https://google.com/search?q=${encodeURIComponent(brand.name)}+brand+guidelines`}
                   target="_blank" 
                   rel="noopener noreferrer"
                   onClick={(e) => e.stopPropagation()}
                 >
                   <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity -mt-2 -mr-2 cursor-pointer">
                      <ExternalLink className="h-4 w-4" />
                   </Button>
                 </a>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex h-20 w-full rounded-lg overflow-hidden shadow-inner mb-4">
                {brand.colors.map((color, i) => (
                  <div 
                    key={i} 
                    className="flex-1 transition-transform hover:scale-110 origin-center cursor-pointer relative group/color"
                    style={{ backgroundColor: color }}
                    onClick={() => handleCopy(color)}
                  >
                     <div className="absolute inset-0 bg-black/0 group-hover/color:bg-black/20 transition-colors flex flex-col items-center justify-center opacity-0 group-hover/color:opacity-100">
                        {copiedColor === color ? <Check className="h-4 w-4 text-white drop-shadow-md" /> : <Copy className="h-4 w-4 text-white drop-shadow-md" />}
                     </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                 {brand.colors.map((color, i) => (
                    <div 
                      key={i} 
                      className="px-2 py-1 rounded-md bg-muted/50 border border-border/50 text-[10px] font-mono cursor-pointer hover:bg-muted transition-colors flex items-center gap-1"
                      onClick={() => handleCopy(color)}
                    >
                       <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: color }} />
                       {copiedColor === color ? 'COPIED' : color.toUpperCase()}
                    </div>
                 ))}
              </div>

              <AnimatePresence>
                {expandedBrand === brand.name && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <h4 className="font-bold text-sm mb-2">About {brand.name} Colors</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        The official color palette and design guidelines for {brand.name}. These colors are the core foundation of their brand identity, used across their logo, digital products, and marketing materials.
                      </p>
                      <div className="flex flex-col gap-2">
                         <Button variant="secondary" className="w-full justify-between" onClick={() => handleCopyAll(brand, 'json')}>
                            Copy as JSON Array
                            {copiedColor === `${brand.name}-all-json` ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                         </Button>
                         <Button variant="outline" className="w-full justify-between" onClick={() => handleCopyAll(brand, 'css')}>
                            Copy as CSS Variables
                            {copiedColor === `${brand.name}-all-css` ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                         </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        ))}
      </div>

      {visibleBrands.length > 0 && visibleBrands.length < filteredBrands.length && (
        <div className="text-center py-10 text-muted-foreground text-sm">
          Showing 100 of {filteredBrands.length} results. Use the search bar to find more.
        </div>
      )}

      {filteredBrands.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
           <div className="text-4xl mb-4">🔍</div>
           <h3 className="text-xl font-semibold mb-2 text-foreground">No brands found</h3>
           <p>We couldn't find any brands matching "{search}".</p>
        </div>
      )}
    </div>
  );
}
