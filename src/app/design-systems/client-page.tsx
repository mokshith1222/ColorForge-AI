'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, Box, Monitor } from 'lucide-react';
import { useColorStore } from '@/store/useColorStore';
import { generateTailwindScale } from '@/lib/color-utils';
import { colord } from 'colord';

export function DesignSystemsClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  const scale = generateTailwindScale(activeColor);
  const base = colord(activeColor);
  
  const secondaryColor = base.rotate(30).toHex();
  const mutedColor = base.mix('#808080', 0.8).toHex();
  const isDark = base.isDark();

  return (
    <div className="container mx-auto px-4 py-16 relative z-10 max-w-5xl animate-in fade-in duration-500">
      <div className="mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Color in Design Systems
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A definitive guide to structuring scalable, semantic, and accessible color tokens. 
          Currently demonstrating an architecture based on your active color: <span className="font-mono font-bold" style={{ color: activeColor }}>{activeColor.toUpperCase()}</span>.
        </p>
      </div>

      <div className="space-y-16">
        {/* Section 1: Tokens */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">The Token Architecture</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl">1. Global Tokens (Primitives)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  The raw palette. These are absolute values that never change contextually. They form the building blocks of your app.
                </p>
                <div className="bg-muted p-4 rounded-md font-mono text-xs space-y-1">
                  <div>--brand-100: {scale[100]}; <span className="inline-block w-3 h-3 rounded-full align-middle ml-1" style={{ backgroundColor: scale[100] }} /></div>
                  <div>--brand-500: {scale[500]}; <span className="inline-block w-3 h-3 rounded-full align-middle ml-1" style={{ backgroundColor: scale[500] }} /></div>
                  <div>--brand-900: {scale[900]}; <span className="inline-block w-3 h-3 rounded-full align-middle ml-1" style={{ backgroundColor: scale[900] }} /></div>
                  <div>--slate-900: #0f172a; <span className="inline-block w-3 h-3 rounded-full align-middle ml-1 bg-slate-900" /></div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-xl">2. Semantic Tokens (Aliases)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  These give meaning to the primitives. They describe *how* a color is used, making them essential for Dark Mode support.
                </p>
                <div className="bg-muted p-4 rounded-md font-mono text-xs space-y-1">
                  <div>--color-primary: var(--brand-500);</div>
                  <div>--color-background: var(--slate-50);</div>
                  <div>--color-text: var(--slate-900);</div>
                  <div className="text-muted-foreground mt-2">/* Dark Mode Switch */</div>
                  <div>--color-background: var(--slate-900);</div>
                  <div>--color-text: var(--slate-50);</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Section 2: Building the Palette */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Box className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">Essential Semantic Roles</h2>
          </div>

          <div className="grid gap-4">
            <div className="flex flex-col md:flex-row gap-6 items-center p-6 rounded-2xl border border-border/50 bg-card transition-colors duration-500">
              <div className="flex gap-2 shrink-0">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold shadow-lg transition-colors duration-500"
                  style={{ backgroundColor: activeColor, color: isDark ? '#ffffff' : '#000000' }}
                >
                  Pri
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Primary (Brand)</h3>
                <p className="text-sm text-muted-foreground">The main identity color of the product. Used for primary buttons, active states, and focused elements. Should stand out strongly against the background.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center p-6 rounded-2xl border border-border/50 bg-card transition-colors duration-500">
              <div className="flex gap-2 shrink-0">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold shadow-lg transition-colors duration-500"
                  style={{ backgroundColor: secondaryColor, color: colord(secondaryColor).isDark() ? '#ffffff' : '#000000' }}
                >
                  Sec
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Secondary / Accent</h3>
                <p className="text-sm text-muted-foreground">Supports the primary color. Used for less prominent buttons, badges, or elements that need to draw attention without overpowering the main action.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center p-6 rounded-2xl border border-border/50 bg-card transition-colors duration-500">
              <div className="flex gap-2 shrink-0">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center font-bold border border-border transition-colors duration-500"
                  style={{ backgroundColor: mutedColor, color: colord(mutedColor).isDark() ? '#ffffff' : '#000000' }}
                >
                  Mut
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Surface & Muted</h3>
                <p className="text-sm text-muted-foreground">Backgrounds for cards, modals, disabled states, and subtle borders. These build the structural hierarchy of the page.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center p-6 rounded-2xl border border-border/50 bg-card">
              <div className="flex gap-2 shrink-0">
                <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center text-destructive-foreground font-bold shadow-lg">Err</div>
              </div>
              <div>
                <h3 className="font-bold text-lg">Feedback (Destructive, Success, Warning)</h3>
                <p className="text-sm text-muted-foreground">Crucial for system statuses. Red for errors, Green for success, Yellow for warnings. Never rely solely on color for feedback (ensure text/icons accompany them).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Tailwind Config */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-10 w-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <Monitor className="h-5 w-5 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold">Implementing in Tailwind CSS</h2>
          </div>

          <Card className="glass overflow-hidden border-border/50">
            <div className="bg-muted px-4 py-2 border-b border-border/50 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-xs font-mono ml-4 text-muted-foreground">tailwind.config.ts</span>
            </div>
            <CardContent className="p-0">
              <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
{`export default {
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      }
    }
  }
}`}
              </pre>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
