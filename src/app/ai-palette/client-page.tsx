'use client';

import React, { useState, useEffect } from 'react';
import { Sparkles, Wand2, Copy, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MOCK_PALETTES: Record<string, string[]> = {
  'cyberpunk': ['#fcee0a', '#00ff41', '#ff003c', '#01012b', '#130d26'],
  'ocean': ['#0077b6', '#00b4d8', '#90e0ef', '#caf0f8', '#03045e'],
  'sunset': ['#ff7b54', '#ffb26b', '#ffd56b', '#939b62', '#2a0800'],
  'forest': ['#2d6a4f', '#40916c', '#52b788', '#74c69d', '#081c15'],
  'default': ['#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e', '#f97316']
};

export function AIPaletteClient() {
  const [prompt, setPrompt] = useState('');
  const [palette, setPalette] = useState<string[] | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedPalette, setCopiedPalette] = useState(false);

  useEffect(() => {
    if (!prompt.trim()) {
      setPalette(null);
      return;
    }
    
    const lowerPrompt = prompt.toLowerCase();
    let selected = MOCK_PALETTES['default'];
    
    for (const key of Object.keys(MOCK_PALETTES)) {
      if (lowerPrompt.includes(key)) {
        selected = MOCK_PALETTES[key];
        break;
      }
    }
    
    // If no match, check for basic color words
    const colors: Record<string, number> = {
      red: 0, orange: 30, yellow: 50, green: 120, cyan: 180, blue: 220, purple: 270, pink: 330, magenta: 300,
      teal: 170, indigo: 260, violet: 280
    };
    
    if (selected === MOCK_PALETTES['default'] && !lowerPrompt.includes('default')) {
      let matchedHue: number | null = null;
      for (const [color, hue] of Object.entries(colors)) {
        if (lowerPrompt.includes(color)) {
          matchedHue = hue;
          break;
        }
      }

      let baseHue = matchedHue;
      
      if (baseHue === null) {
        let hash = 0;
        for (let i = 0; i < lowerPrompt.length; i++) {
          hash = lowerPrompt.charCodeAt(i) + ((hash << 5) - hash);
        }
        baseHue = Math.abs(hash) % 360;
      }
      
      selected = Array.from({length: 5}).map((_, i) => {
         return `hsl(${(baseHue! + i * 45) % 360}, 80%, 60%)`;
      });
    }
    
    setPalette(selected);
  }, [prompt]);

  const handleCopy = async (color: string, index: number) => {
    await navigator.clipboard.writeText(color);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const handleCopyPalette = async () => {
    if (!palette) return;
    await navigator.clipboard.writeText(JSON.stringify(palette));
    setCopiedPalette(true);
    setTimeout(() => setCopiedPalette(false), 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full text-center mb-10 space-y-4">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" /> AI Powered
         </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Describe your perfect palette</h1>
        <p className="text-lg text-muted-foreground">
          Enter a mood, aesthetic, or concept and our AI will generate a beautiful color palette instantly.
        </p>
      </div>

      <div className="w-full max-w-2xl mb-16">
         <div className="relative flex items-center shadow-2xl shadow-primary/5 rounded-full bg-background border-2 border-border/50 focus-within:border-primary/50 transition-colors">
            <div className="pl-6 text-muted-foreground">
               <Wand2 className="w-5 h-5" />
            </div>
            <Input 
               value={prompt}
               onChange={(e) => setPrompt(e.target.value)}
               placeholder="e.g., 'Cyberpunk neon city at night' or 'Calm minimalist spa'"
               className="border-0 focus-visible:ring-0 bg-transparent h-16 text-lg px-4"
            />
         </div>
      </div>

      {palette && (
         <div className="w-full max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-700 flex flex-col gap-4">
            <div className="flex justify-end">
               <Button variant="outline" onClick={handleCopyPalette} className="bg-background/50 backdrop-blur-sm">
                  {copiedPalette ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copiedPalette ? 'Copied Palette' : 'Copy Palette JSON'}
               </Button>
            </div>
            <div className="flex flex-col md:flex-row h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
               {palette.map((color, i) => (
                  <div 
                     key={i} 
                     className="flex-1 h-full relative group transition-all duration-300 hover:flex-[1.5] flex flex-col justify-end p-4"
                     style={{ backgroundColor: color }}
                  >
                     <div className="bg-black/40 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-sm font-medium self-center mb-2 shadow-lg z-10">
                        {color.toUpperCase()}
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px] z-20">
                        <Button 
                           variant="secondary" 
                           size="sm" 
                           onClick={() => handleCopy(color, i)}
                           className="bg-background/90 hover:bg-background"
                        >
                           {copiedIndex === i ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                           Copy Color
                        </Button>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      )}
    </div>
  );
}
