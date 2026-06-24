'use client';

import React, { useState } from 'react';
import { TrendingUp, Award, Calendar, Check, Plus, Copy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useColorStore } from '@/store/useColorStore';
import { TRENDING_PALETTES } from '@/lib/trending-palettes';

const PANTONE_COLORS = [
  { year: 2024, name: 'Peach Fuzz', hex: '#FFBE98' },
  { year: 2023, name: 'Viva Magenta', hex: '#BE3455' },
  { year: 2022, name: 'Very Peri', hex: '#6667AB' },
  { year: 2021, name: 'Ultimate Gray', hex: '#939597' },
  { year: 2021, name: 'Illuminating', hex: '#F5DF4D' },
  { year: 2020, name: 'Classic Blue', hex: '#0F4C81' },
];

export function TrendsClientPage() {
  const saveColor = useColorStore((state) => state.saveColor);
  const savePalette = useColorStore((state) => state.savePalette);
  
  // Track copied state for feedback
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleSavePalette = (palette: string[], id: string) => {
    savePalette(palette);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedId(hex);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Color Trends</h1>
        <p className="text-lg text-muted-foreground">
          Discover the colors shaping the design world. Explore colors of the year and trending community palettes.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" /> Colors of the Year
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {PANTONE_COLORS.map((c) => (
                <Card key={`${c.year}-${c.name}`} className="glass overflow-hidden border-border/50 group">
                   <div 
                     className="h-32 w-full transition-transform duration-500 group-hover:scale-105 cursor-pointer relative" 
                     style={{ backgroundColor: c.hex }}
                     onClick={() => handleCopyColor(c.hex)}
                   >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity">
                        <span className="bg-background/90 px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2 text-foreground">
                          {copiedId === c.hex ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                          {copiedId === c.hex ? 'Copied!' : 'Copy HEX'}
                        </span>
                      </div>
                   </div>
                   <CardContent className="p-6 relative bg-card">
                      <div className="flex justify-between items-center mb-1">
                         <h3 className="font-bold text-lg">{c.name}</h3>
                         <span className="text-xs font-bold bg-muted px-2 py-1 rounded-md text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {c.year}
                         </span>
                      </div>
                      <div className="font-mono text-sm text-muted-foreground mb-4">{c.hex}</div>
                      <Button variant="outline" className="w-full" onClick={() => {
                        saveColor(c.hex);
                        setCopiedId(`save-${c.hex}`);
                        setTimeout(() => setCopiedId(null), 2000);
                      }}>
                         {copiedId === `save-${c.hex}` ? <Check className="mr-2 h-4 w-4 text-green-500" /> : <Plus className="mr-2 h-4 w-4" />}
                         {copiedId === `save-${c.hex}` ? 'Saved!' : 'Save Color'}
                      </Button>
                   </CardContent>
                </Card>
             ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-accent" /> Trending Palettes ({TRENDING_PALETTES.length}+)
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
             {TRENDING_PALETTES.map((palette, idx) => {
                const paletteId = `palette-${idx}`;
                return (
                  <Card key={paletteId} className="glass">
                     <CardHeader>
                        <CardTitle className="text-xl">{palette.name}</CardTitle>
                     </CardHeader>
                     <CardContent>
                        <div className="flex h-24 w-full rounded-xl overflow-hidden shadow-inner mb-4">
                           {palette.colors.map((color, i) => (
                              <div key={`${color}-${i}`} className="flex-1 hover:flex-[1.5] transition-all duration-300 cursor-pointer" style={{ backgroundColor: color }} onClick={() => handleCopyColor(color)} title="Copy HEX">
                                {copiedId === color && (
                                  <div className="w-full h-full flex items-center justify-center bg-black/20">
                                    <Check className="h-5 w-5 text-white" />
                                  </div>
                                )}
                              </div>
                           ))}
                        </div>
                        <div className="flex justify-between items-center">
                           <div className="flex gap-2">
                              {palette.colors.map((color, i) => (
                                 <div key={`${color}-${i}`} className="text-[10px] font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded border border-border/50">
                                    {color}
                                 </div>
                              ))}
                           </div>
                           <Button variant="secondary" size="sm" onClick={() => handleSavePalette(palette.colors, paletteId)}>
                              {copiedId === paletteId ? <Check className="mr-2 h-4 w-4 text-green-500" /> : <Plus className="mr-2 h-4 w-4" />}
                              {copiedId === paletteId ? 'Saved!' : 'Save Palette'}
                           </Button>
                        </div>
                     </CardContent>
                  </Card>
                );
             })}
          </div>
        </section>
      </div>
    </div>
  );
}
