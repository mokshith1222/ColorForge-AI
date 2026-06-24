'use client';

import React, { useState, useMemo } from 'react';
import { Copy, Check, Maximize2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const STATIC_GRADIENTS = [
  { css: 'linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)', name: 'Warm Peach', tags: ['warm', 'peach', 'orange'] },
  { css: 'linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)', name: 'Berry Red', tags: ['red', 'berry', 'pink'] },
  { css: 'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)', name: 'Sky Blue', tags: ['blue', 'sky', 'light'] },
  { css: 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)', name: 'Mint Splash', tags: ['green', 'mint', 'cyan'] },
  { css: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)', name: 'Silver Cloud', tags: ['gray', 'silver', 'white'] },
  { css: 'linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)', name: 'Sunset Purple', tags: ['purple', 'orange', 'sunset'] },
  { css: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)', name: 'Lavender Blue', tags: ['purple', 'blue', 'lavender'] },
  { css: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)', name: 'Candy Pink', tags: ['pink', 'red', 'candy'] },
  { css: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)', name: 'Cotton Candy', tags: ['pink', 'white', 'pastel'] },
  { css: 'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)', name: 'Ocean Wave', tags: ['blue', 'ocean', 'sea'] },
  { css: 'linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)', name: 'Neon Pastel', tags: ['cyan', 'purple', 'pink'] },
  { css: 'linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)', name: 'Dreamy Green', tags: ['purple', 'green', 'dream'] },
];

const generateGradients = () => {
  const baseHues = [
    { name: 'Red', hue: 0 },
    { name: 'Orange', hue: 30 },
    { name: 'Yellow', hue: 60 },
    { name: 'Green', hue: 120 },
    { name: 'Cyan', hue: 180 },
    { name: 'Blue', hue: 240 },
    { name: 'Purple', hue: 270 },
    { name: 'Pink', hue: 320 },
  ];
  
  const gradients = [...STATIC_GRADIENTS];
  
  baseHues.forEach(base => {
     // Generate 125 variations for each color to reach 1000+
     for(let i=0; i<125; i++) {
        const hue1 = (base.hue + Math.floor(Math.random() * 40 - 20) + 360) % 360;
        const hue2 = (base.hue + Math.floor(Math.random() * 60 - 30) + 360) % 360;
        const sat1 = 60 + Math.floor(Math.random() * 40);
        const sat2 = 60 + Math.floor(Math.random() * 40);
        const lit1 = 40 + Math.floor(Math.random() * 40);
        const lit2 = 40 + Math.floor(Math.random() * 40);
        const angle = Math.floor(Math.random() * 360);
        
        gradients.push({
           css: `linear-gradient(${angle}deg, hsl(${hue1}, ${sat1}%, ${lit1}%), hsl(${hue2}, ${sat2}%, ${lit2}%))`,
           name: `${base.name} Vibe`,
           tags: [base.name.toLowerCase(), 'generated', 'random']
        });
     }
  });
  
  return gradients;
};

export function GradientBackgroundsClient() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [previewGradient, setPreviewGradient] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(100);

  // Generate 1000+ gradients only once on mount
  const ALL_GRADIENTS = useMemo(() => generateGradients(), []);

  const filteredGradients = useMemo(() => {
    if (!searchQuery.trim()) return ALL_GRADIENTS;
    const query = searchQuery.toLowerCase();
    return ALL_GRADIENTS.filter(g => 
      g.name.toLowerCase().includes(query) || 
      g.tags.some(t => t.includes(query))
    );
  }, [searchQuery, ALL_GRADIENTS]);

  const visibleGradients = filteredGradients.slice(0, visibleCount);

  const handleCopy = async (gradient: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(`background: ${gradient};`);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center max-w-3xl mx-auto space-y-6">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">1000+ Beautiful Gradients</h1>
        <p className="text-lg text-muted-foreground">
          Click on any gradient to preview it fullscreen, or click the copy button to grab the CSS instantly.
        </p>
        
        <div className="relative max-w-lg mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground">
            <Search className="w-5 h-5" />
          </div>
          <Input 
            type="text"
            placeholder="Search gradients (e.g. 'blue', 'pink', 'warm')"
            className="pl-12 h-14 rounded-full text-lg shadow-sm border-border/50 bg-background/50 backdrop-blur-sm"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(100); // reset pagination on search
            }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         {visibleGradients.map((gradient, i) => (
            <div 
               key={i}
               onClick={() => setPreviewGradient(gradient.css)}
               className="group relative h-48 rounded-2xl shadow-sm border border-border/50 cursor-pointer overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
               style={{ background: gradient.css }}
            >
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                     <Button 
                        variant="secondary" 
                        size="sm" 
                        className="bg-white/90 hover:bg-white text-black font-semibold"
                        onClick={(e) => handleCopy(gradient.css, i, e)}
                     >
                        {copiedIndex === i ? <Check className="w-4 h-4 mr-2 text-green-600" /> : <Copy className="w-4 h-4 mr-2" />}
                        Copy CSS
                     </Button>
                     <Button 
                        variant="secondary" 
                        size="icon" 
                        className="bg-black/50 hover:bg-black/70 text-white border-0"
                     >
                        <Maximize2 className="w-4 h-4" />
                     </Button>
                  </div>
               </div>
            </div>
         ))}
      </div>

      {visibleCount < filteredGradients.length && (
         <div className="mt-12 flex justify-center">
            <Button size="lg" variant="outline" onClick={() => setVisibleCount(v => v + 100)}>
               Load More Gradients ({filteredGradients.length - visibleCount} remaining)
            </Button>
         </div>
      )}

      {filteredGradients.length === 0 && (
        <div className="text-center py-24 text-muted-foreground">
          No gradients found matching "{searchQuery}". Try a different color!
        </div>
      )}

      <Dialog open={!!previewGradient} onOpenChange={(open) => !open && setPreviewGradient(null)}>
         <DialogContent className="max-w-[95vw] h-[95vh] p-0 border-0 rounded-3xl overflow-hidden glass">
            {previewGradient && (
               <div className="w-full h-full relative" style={{ background: previewGradient }}>
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                     <div className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg font-mono text-sm max-w-lg truncate">
                        background: {previewGradient};
                     </div>
                     <Button 
                        variant="default" 
                        size="lg" 
                        className="shadow-xl"
                        onClick={(e) => handleCopy(previewGradient, 999, e as any)}
                     >
                        {copiedIndex === 999 ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        Copy CSS
                     </Button>
                  </div>
               </div>
            )}
         </DialogContent>
      </Dialog>
    </div>
  );
}
