'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check, ArrowRightLeft } from 'lucide-react';
import { colord } from 'colord';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export function HexToRgbClient() {
  const [hex, setHex] = useState('#3b82f6');
  const [opacity, setOpacity] = useState(1);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  // Validate hex on the fly
  let validHex = hex;
  if (!validHex.startsWith('#')) validHex = '#' + validHex;
  const colorObj = colord(validHex);
  const isValid = colorObj.isValid();

  const handleCopy = async (text: string, format: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const rgb = isValid ? colorObj.toRgb() : { r: 0, g: 0, b: 0 };
  const rawRgb = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
  const rgbString = `rgb(${rawRgb})`;
  const rgbaString = `rgba(${rawRgb}, ${opacity})`;

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">HEX to RGB Converter</h1>
        <p className="text-lg text-muted-foreground">
          Instantly convert Hexadecimal color codes to RGB/RGBA strings for CSS and design software.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        <Card className="glass border-primary/20">
           <CardHeader>
              <CardTitle>Input HEX</CardTitle>
           </CardHeader>
           <CardContent className="space-y-6">
              <div className="space-y-2">
                 <Label className="text-xs uppercase font-bold tracking-wider text-muted-foreground">HEX Code</Label>
                 <Input 
                   value={hex}
                   onChange={(e) => setHex(e.target.value)}
                   className="font-mono text-2xl h-16 uppercase bg-background/50 text-center"
                   placeholder="#000000"
                 />
                 {!isValid && hex.length > 0 && <p className="text-xs text-destructive mt-1 text-center">Invalid HEX code</p>}
              </div>

              <div 
                className="w-full h-48 rounded-xl shadow-inner transition-colors duration-300 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: isValid ? hex : 'transparent' }}
              >
                 {!isValid && (
                    <div className="absolute inset-0 pattern-grid-lg text-muted/20 opacity-50 flex items-center justify-center">
                       <span className="bg-background/80 px-4 py-2 rounded-lg font-bold text-sm">Preview</span>
                    </div>
                 )}
              </div>
           </CardContent>
        </Card>

        <Card className="glass border-primary/20">
           <CardHeader>
              <CardTitle>RGB Output</CardTitle>
           </CardHeader>
           <CardContent className="space-y-8">
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <Label className="text-xs uppercase font-bold tracking-wider text-muted-foreground">RGB Format</Label>
                    <Button variant="ghost" size="sm" onClick={() => handleCopy(rgbString, 'rgb')}>
                       {copiedFormat === 'rgb' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                 </div>
                 <code className="block w-full p-4 bg-muted/50 rounded-xl text-xl font-mono text-center border border-border/50 transition-colors">
                    {isValid ? rgbString : 'rgb(-, -, -)'}
                 </code>
              </div>

              <div className="space-y-4 pt-4 border-t border-border/50">
                 <div className="flex justify-between items-center">
                    <Label className="text-xs uppercase font-bold tracking-wider text-muted-foreground">RGBA (Transparent)</Label>
                    <span className="font-mono text-sm">{Math.round(opacity * 100)}%</span>
                 </div>
                 <Slider 
                   value={opacity} 
                   onChange={(e) => setOpacity(parseFloat(e.target.value))} 
                   min={0} 
                   max={1} 
                   step={0.01} 
                   className="py-2"
                   disabled={!isValid}
                 />
                 <div className="flex justify-between items-center mt-2">
                    <code className="flex-1 p-4 bg-muted/50 rounded-xl text-lg font-mono text-center border border-border/50 transition-colors">
                       {isValid ? rgbaString : 'rgba(-, -, -, -)'}
                    </code>
                    <Button variant="ghost" size="icon" className="ml-2 h-14 w-14 shrink-0" onClick={() => handleCopy(rgbaString, 'rgba')} disabled={!isValid}>
                       {copiedFormat === 'rgba' ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                    </Button>
                 </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                 <div className="bg-red-500/10 p-3 rounded-lg text-center border border-red-500/20">
                    <div className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-1">Red</div>
                    <div className="font-mono text-lg font-bold">{isValid ? rgb.r : '-'}</div>
                 </div>
                 <div className="bg-green-500/10 p-3 rounded-lg text-center border border-green-500/20">
                    <div className="text-[10px] font-bold text-green-500 uppercase tracking-wider mb-1">Green</div>
                    <div className="font-mono text-lg font-bold">{isValid ? rgb.g : '-'}</div>
                 </div>
                 <div className="bg-blue-500/10 p-3 rounded-lg text-center border border-blue-500/20">
                    <div className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-1">Blue</div>
                    <div className="font-mono text-lg font-bold">{isValid ? rgb.b : '-'}</div>
                 </div>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
