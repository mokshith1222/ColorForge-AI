'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Sun, Eye, Zap, Moon } from 'lucide-react';
import { useColorStore } from '@/store/useColorStore';
import { generatePalettes } from '@/lib/color-utils';
import { colord } from 'colord';

export function ColorTheoryClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  const palettes = generatePalettes(activeColor);
  
  const baseObj = colord(activeColor);
  const isDark = baseObj.isDark();
  const hsl = baseObj.toHsl();
  const isWarm = (hsl.h < 90 || hsl.h > 270);

  return (
    <div className="container mx-auto px-4 py-16 relative z-10 max-w-5xl animate-in fade-in duration-500">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Color Theory Masterclass
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Understand the science and psychology behind color. All examples below are dynamically generated based on your active color: <span className="font-mono font-bold" style={{ color: activeColor }}>{activeColor.toUpperCase()}</span>.
        </p>
      </div>

      <div className="space-y-16">
        {/* Section 1: Harmonies (Dynamic based on active color) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Sun className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">Your Color Harmonies</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Complementary</h3>
              <p className="text-sm text-muted-foreground">Colors opposite each other on the wheel. High contrast, highly dynamic.</p>
              <div className="flex h-20 rounded-xl overflow-hidden shadow-inner">
                <div className="flex-1 transition-colors duration-500" style={{ backgroundColor: palettes.complementary[0] }} />
                <div className="flex-1 transition-colors duration-500" style={{ backgroundColor: palettes.complementary[2] }} />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Analogous</h3>
              <p className="text-sm text-muted-foreground">Colors next to each other on the wheel. Serene and comfortable.</p>
              <div className="flex h-20 rounded-xl overflow-hidden shadow-inner">
                {palettes.analogous.map((c, i) => (
                  <div key={i} className="flex-1 transition-colors duration-500" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Monochromatic</h3>
              <p className="text-sm text-muted-foreground">Shades, tones and tints of your base color. Clean and elegant.</p>
              <div className="flex h-20 rounded-xl overflow-hidden shadow-inner">
                {palettes.monochromatic.map((c, i) => (
                  <div key={i} className="flex-1 transition-colors duration-500" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Triadic</h3>
              <p className="text-sm text-muted-foreground">Three colors evenly spaced around the wheel. Vibrant and balanced.</p>
              <div className="flex h-20 rounded-xl overflow-hidden shadow-inner">
                {palettes.triadic.map((c, i) => (
                  <div key={i} className="flex-1 transition-colors duration-500" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Psychology Section */}
        <section>
           <Card className="glass border-primary/20 overflow-hidden">
              <div className="h-32 transition-colors duration-500 flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: activeColor }}>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                 <h2 className="relative z-10 text-3xl font-bold text-white tracking-widest uppercase drop-shadow-md">
                    {activeColor}
                 </h2>
              </div>
              <CardContent className="p-8">
                 <h3 className="text-xl font-bold mb-4">Psychological Profile</h3>
                 <p className="text-muted-foreground leading-relaxed mb-4">
                    Based on its position on the color wheel, this shade is considered a <strong className={isWarm ? "text-orange-500" : "text-blue-500"}>{isWarm ? "Warm" : "Cool"}</strong> color.
                    {isWarm 
                       ? " Warm colors generally evoke feelings of energy, passion, action, and urgency. They are highly engaging and visually advance towards the viewer." 
                       : " Cool colors are strongly associated with calm, peace, professionalism, and logic. They naturally recede into the background, providing a stable foundation."}
                 </p>
                 <p className="text-muted-foreground leading-relaxed">
                    Additionally, because this color is <strong className={isDark ? "text-white" : "text-yellow-500"}>{isDark ? "Dark" : "Light"}</strong>, it conveys {isDark ? "sophistication, depth, and formality." : "openness, clarity, and approachability."}
                 </p>
              </CardContent>
           </Card>
        </section>

        {/* Section 2: The Basics (Static Theory) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Palette className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">The Color Wheel (Fundamentals)</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle>Primary Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <div className="h-12 flex-1 rounded-md bg-red-500 shadow-sm" />
                  <div className="h-12 flex-1 rounded-md bg-blue-500 shadow-sm" />
                  <div className="h-12 flex-1 rounded-md bg-yellow-500 shadow-sm" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Red, Blue, and Yellow. These are the foundation colors that cannot be created by mixing other colors together.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle>Secondary Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <div className="h-12 flex-1 rounded-md bg-green-500 shadow-sm" />
                  <div className="h-12 flex-1 rounded-md bg-orange-500 shadow-sm" />
                  <div className="h-12 flex-1 rounded-md bg-purple-500 shadow-sm" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Green, Orange, and Purple. Created by mixing equal parts of two primary colors.
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-primary/20">
              <CardHeader>
                <CardTitle>Tertiary Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2 mb-4">
                  <div className="h-12 flex-1 rounded-md bg-teal-500 shadow-sm" />
                  <div className="h-12 flex-1 rounded-md bg-amber-500 shadow-sm" />
                  <div className="h-12 flex-1 rounded-md bg-rose-500 shadow-sm" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Created by mixing a primary color with an adjacent secondary color on the wheel.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 3: Psychology (Static Theory) */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-full bg-yellow-500/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold">Color Psychology Matrix</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Red', hex: '#ef4444', desc: 'Urgent, Error, Passion' },
              { name: 'Blue', hex: '#3b82f6', desc: 'Trust, Safe, Corporate' },
              { name: 'Green', hex: '#22c55e', desc: 'Success, Nature, Growth' },
              { name: 'Yellow', hex: '#eab308', desc: 'Warning, Attention, Joy' },
              { name: 'Purple', hex: '#a855f7', desc: 'Luxury, Magic, Creative' },
              { name: 'Orange', hex: '#f97316', desc: 'Energetic, Warm, Action' },
              { name: 'Black', hex: '#000000', desc: 'Premium, Sleek, Power' },
              { name: 'White', hex: '#ffffff', desc: 'Clean, Minimal, Space' },
            ].map(c => (
              <div key={c.name} className="flex flex-col items-center p-4 rounded-xl border border-border/50 bg-card hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full mb-3 shadow-inner border border-white/10" style={{ backgroundColor: c.hex }} />
                <span className="font-bold mb-1">{c.name}</span>
                <span className="text-xs text-muted-foreground text-center">{c.desc}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
