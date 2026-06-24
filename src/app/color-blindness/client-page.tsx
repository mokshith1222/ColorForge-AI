'use client';

import React, { useState } from 'react';
import { EyeOff, Type, Image as ImageIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useColorStore } from '@/store/useColorStore';

const CVD_TYPES = [
  { id: 'normal', name: 'Normal Vision', filter: 'none' },
  { id: 'protanopia', name: 'Protanopia (Red-Blind)', filter: 'url(#protanopia)' },
  { id: 'deuteranopia', name: 'Deuteranopia (Green-Blind)', filter: 'url(#deuteranopia)' },
  { id: 'tritanopia', name: 'Tritanopia (Blue-Blind)', filter: 'url(#tritanopia)' },
  { id: 'achromatopsia', name: 'Achromatopsia (Monochromacy)', filter: 'url(#achromatopsia)' },
];

export function ColorBlindnessClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  const [activeType, setActiveType] = useState(CVD_TYPES[0]);

  // Mock palette to test on
  const testPalette = [activeColor || '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];

  return (
    <div className="container mx-auto px-4 py-12 min-h-[70vh]">
      {/* SVG Filters for CVD Simulation */}
      <svg className="hidden">
        <defs>
          <filter id="protanopia">
            <feColorMatrix type="matrix" values="0.567, 0.433, 0, 0, 0  0.558, 0.442, 0, 0, 0  0, 0.242, 0.758, 0, 0  0, 0, 0, 1, 0" />
          </filter>
          <filter id="deuteranopia">
            <feColorMatrix type="matrix" values="0.625, 0.375, 0, 0, 0  0.7, 0.3, 0, 0, 0  0, 0.3, 0.7, 0, 0  0, 0, 0, 1, 0" />
          </filter>
          <filter id="tritanopia">
            <feColorMatrix type="matrix" values="0.95, 0.05, 0, 0, 0  0, 0.433, 0.567, 0, 0  0, 0.475, 0.525, 0, 0  0, 0, 0, 1, 0" />
          </filter>
          <filter id="achromatopsia">
            <feColorMatrix type="matrix" values="0.299, 0.587, 0.114, 0, 0  0.299, 0.587, 0.114, 0, 0  0.299, 0.587, 0.114, 0, 0  0, 0, 0, 1, 0" />
          </filter>
        </defs>
      </svg>

      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
           <EyeOff className="w-8 h-8 text-primary" /> Simulator
        </h1>
        <p className="text-lg text-muted-foreground">
          See how your design looks to people with different types of color vision deficiencies.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid lg:grid-cols-[250px_1fr] gap-8">
         <div className="space-y-2">
            <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Vision Type</h3>
            {CVD_TYPES.map((type) => (
               <Button
                  key={type.id}
                  variant={activeType.id === type.id ? 'default' : 'outline'}
                  className="w-full justify-start h-12"
                  onClick={() => setActiveType(type)}
               >
                  {type.name}
               </Button>
            ))}
         </div>

         <div className="space-y-6" style={{ filter: activeType.filter }}>
            <Card className="glass">
               <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                     <ImageIcon className="w-5 h-5" /> Palette Test
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="flex h-32 rounded-xl overflow-hidden shadow-inner border">
                     {testPalette.map((c, i) => (
                        <div key={i} className="flex-1 flex items-end justify-center pb-4" style={{ backgroundColor: c }}>
                           <span className="bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity">
                              {c}
                           </span>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>

            <Card className="glass">
               <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                     <Type className="w-5 h-5" /> UI Contrast Test
                  </CardTitle>
               </CardHeader>
               <CardContent className="grid sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-xl space-y-4" style={{ backgroundColor: testPalette[0] }}>
                     <h4 className="font-bold text-white text-xl">High Contrast?</h4>
                     <p className="text-white/80 text-sm">Testing how text legibility holds up under different color filters.</p>
                     <Button variant="secondary" className="w-full">Action Button</Button>
                  </div>
                  <div className="p-6 rounded-xl space-y-4 border-2" style={{ borderColor: testPalette[1] }}>
                     <h4 className="font-bold text-xl" style={{ color: testPalette[1] }}>Error State</h4>
                     <p className="text-sm text-muted-foreground">Does this still look like an error or warning without the red hue?</p>
                     <Button className="w-full" style={{ backgroundColor: testPalette[1], color: '#fff' }}>Delete Item</Button>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
