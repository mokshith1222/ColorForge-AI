'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, SlidersHorizontal } from 'lucide-react';
import { colord } from 'colord';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export function HslConverterClient() {
  const [h, setH] = useState(217);
  const [s, setS] = useState(91);
  const [l, setL] = useState(60);
  const [hexInput, setHexInput] = useState('#3b82f6');
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const handleCopy = async (text: string, format: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  // Sync from HEX input to HSL
  useEffect(() => {
    let validHex = hexInput;
    if (!validHex.startsWith('#')) validHex = '#' + validHex;
    const colorObj = colord(validHex);
    if (colorObj.isValid()) {
      const hsl = colorObj.toHsl();
      setH(Math.round(hsl.h));
      setS(Math.round(hsl.s));
      setL(Math.round(hsl.l));
    }
  }, [hexInput]);

  const hslString = `hsl(${h}, ${s}%, ${l}%)`;
  const colorObj = colord(hslString);
  const hexOutput = colorObj.toHex();
  const rgbOutput = colorObj.toRgbString();

  // Background gradients for the sliders
  const hueGradient = `linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)`;
  const saturationGradient = `linear-gradient(to right, hsl(${h}, 0%, ${l}%), hsl(${h}, 100%, ${l}%))`;
  const lightnessGradient = `linear-gradient(to right, hsl(${h}, ${s}%, 0%), hsl(${h}, ${s}%, 50%), hsl(${h}, ${s}%, 100%))`;

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">HSL Color Converter</h1>
        <p className="text-lg text-muted-foreground">
          Translate colors into the intuitive Hue, Saturation, and Lightness format.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px] max-w-6xl mx-auto">
        <div className="space-y-8">
           <Card className="glass border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                 <CardTitle className="flex items-center gap-2">
                    <SlidersHorizontal className="h-5 w-5 text-primary" /> HSL Controls
                 </CardTitle>
                 <div className="flex items-center gap-2">
                    <Label className="text-xs uppercase font-bold text-muted-foreground">From HEX:</Label>
                    <Input 
                      value={hexInput}
                      onChange={(e) => setHexInput(e.target.value)}
                      className="w-24 h-8 font-mono text-xs uppercase"
                    />
                 </div>
              </CardHeader>
              <CardContent className="space-y-8 pt-6">
                 
                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <Label className="text-sm font-bold uppercase tracking-wider">Hue (0-360°)</Label>
                       <span className="font-mono bg-muted/50 px-2 py-1 rounded text-sm border border-border/50">{h}°</span>
                    </div>
                    <div className="h-4 rounded-full w-full" style={{ background: hueGradient }}>
                       <input 
                         type="range" 
                         min="0" 
                         max="360" 
                         value={h} 
                         onChange={(e) => setH(Number(e.target.value))}
                         className="w-full h-full opacity-0 cursor-pointer"
                       />
                    </div>
                    <p className="text-xs text-muted-foreground">Position on the color wheel (Red = 0, Green = 120, Blue = 240)</p>
                 </div>

                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <Label className="text-sm font-bold uppercase tracking-wider">Saturation (0-100%)</Label>
                       <span className="font-mono bg-muted/50 px-2 py-1 rounded text-sm border border-border/50">{s}%</span>
                    </div>
                    <div className="h-4 rounded-full w-full" style={{ background: saturationGradient }}>
                       <input 
                         type="range" 
                         min="0" 
                         max="100" 
                         value={s} 
                         onChange={(e) => setS(Number(e.target.value))}
                         className="w-full h-full opacity-0 cursor-pointer"
                       />
                    </div>
                    <p className="text-xs text-muted-foreground">Intensity of the color (0% = Grayscale, 100% = Full Color)</p>
                 </div>

                 <div className="space-y-4">
                    <div className="flex justify-between items-center">
                       <Label className="text-sm font-bold uppercase tracking-wider">Lightness (0-100%)</Label>
                       <span className="font-mono bg-muted/50 px-2 py-1 rounded text-sm border border-border/50">{l}%</span>
                    </div>
                    <div className="h-4 rounded-full w-full" style={{ background: lightnessGradient }}>
                       <input 
                         type="range" 
                         min="0" 
                         max="100" 
                         value={l} 
                         onChange={(e) => setL(Number(e.target.value))}
                         className="w-full h-full opacity-0 cursor-pointer"
                       />
                    </div>
                    <p className="text-xs text-muted-foreground">Brightness of the color (0% = Black, 50% = Normal, 100% = White)</p>
                 </div>

              </CardContent>
           </Card>
        </div>

        <div className="space-y-6">
           <Card className="glass border-primary/20 overflow-hidden">
              <div 
                className="h-48 w-full transition-colors duration-200"
                style={{ backgroundColor: hslString }}
              />
              <CardContent className="p-6 space-y-6">
                 
                 <div className="space-y-2">
                    <div className="flex justify-between items-center">
                       <Label className="text-xs uppercase font-bold tracking-wider text-muted-foreground">HSL</Label>
                       <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleCopy(hslString, 'hsl')}>
                          {copiedFormat === 'hsl' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                       </Button>
                    </div>
                    <code className="block w-full p-3 bg-muted/50 rounded-lg text-sm font-mono text-center border border-border/50 transition-colors">
                       {hslString}
                    </code>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between items-center">
                       <Label className="text-xs uppercase font-bold tracking-wider text-muted-foreground">HEX</Label>
                       <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleCopy(hexOutput, 'hex')}>
                          {copiedFormat === 'hex' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                       </Button>
                    </div>
                    <code className="block w-full p-3 bg-muted/50 rounded-lg text-sm font-mono text-center border border-border/50 uppercase font-bold transition-colors">
                       {hexOutput}
                    </code>
                 </div>

                 <div className="space-y-2">
                    <div className="flex justify-between items-center">
                       <Label className="text-xs uppercase font-bold tracking-wider text-muted-foreground">RGB</Label>
                       <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleCopy(rgbOutput, 'rgb')}>
                          {copiedFormat === 'rgb' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                       </Button>
                    </div>
                    <code className="block w-full p-3 bg-muted/50 rounded-lg text-sm font-mono text-center border border-border/50 transition-colors">
                       {rgbOutput}
                    </code>
                 </div>

              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
