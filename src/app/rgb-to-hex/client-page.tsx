'use client';

import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import { colord } from 'colord';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export function RgbToHexClient() {
  const [r, setR] = useState(59);
  const [g, setG] = useState(130);
  const [b, setB] = useState(246);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedFormat('hex');
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>, value: string) => {
    let num = parseInt(value, 10);
    if (isNaN(num)) num = 0;
    if (num < 0) num = 0;
    if (num > 255) num = 255;
    setter(num);
  };

  const rgbString = `rgb(${r}, ${g}, ${b})`;
  const colorObj = colord(rgbString);
  const hexString = colorObj.toHex();

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">RGB to HEX Converter</h1>
        <p className="text-lg text-muted-foreground">
          Instantly convert RGB (Red, Green, Blue) color values to standard Hexadecimal codes.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        <Card className="glass border-primary/20">
           <CardHeader>
              <CardTitle>Input RGB</CardTitle>
           </CardHeader>
           <CardContent className="space-y-6">
              
              <div className="space-y-4">
                 <div>
                    <div className="flex justify-between items-center mb-2">
                       <Label className="text-xs uppercase font-bold tracking-wider text-red-500">Red (0-255)</Label>
                       <Input 
                         value={r.toString()}
                         onChange={(e) => handleInputChange(setR, e.target.value)}
                         className="w-20 text-center font-mono h-8"
                       />
                    </div>
                    <Slider value={r} onChange={(e) => setR(parseInt(e.target.value))} max={255} step={1} className="py-2" />
                 </div>

                 <div>
                    <div className="flex justify-between items-center mb-2">
                       <Label className="text-xs uppercase font-bold tracking-wider text-green-500">Green (0-255)</Label>
                       <Input 
                         value={g.toString()}
                         onChange={(e) => handleInputChange(setG, e.target.value)}
                         className="w-20 text-center font-mono h-8"
                       />
                    </div>
                    <Slider value={g} onChange={(e) => setG(parseInt(e.target.value))} max={255} step={1} className="py-2" />
                 </div>

                 <div>
                    <div className="flex justify-between items-center mb-2">
                       <Label className="text-xs uppercase font-bold tracking-wider text-blue-500">Blue (0-255)</Label>
                       <Input 
                         value={b.toString()}
                         onChange={(e) => handleInputChange(setB, e.target.value)}
                         className="w-20 text-center font-mono h-8"
                       />
                    </div>
                    <Slider value={b} onChange={(e) => setB(parseInt(e.target.value))} max={255} step={1} className="py-2" />
                 </div>
              </div>

           </CardContent>
        </Card>

        <Card className="glass border-primary/20 flex flex-col">
           <CardHeader>
              <CardTitle>HEX Output</CardTitle>
           </CardHeader>
           <CardContent className="space-y-8 flex-1 flex flex-col justify-between">
              
              <div 
                className="w-full h-48 rounded-xl shadow-inner transition-colors duration-300"
                style={{ backgroundColor: hexString }}
              />

              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                    <Label className="text-xs uppercase font-bold tracking-wider text-muted-foreground">HEX Format</Label>
                    <span className="text-xs font-mono text-muted-foreground">{rgbString}</span>
                 </div>
                 
                 <div className="flex justify-between items-center mt-2 gap-4">
                    <code className="flex-1 p-6 bg-background/50 rounded-xl text-3xl font-mono text-center border-2 border-primary/20 uppercase font-bold shadow-sm">
                       {hexString}
                    </code>
                    <Button variant="default" size="icon" className="h-20 w-20 shrink-0 rounded-xl shadow-lg" onClick={() => handleCopy(hexString)}>
                       {copiedFormat === 'hex' ? <Check className="h-8 w-8 text-white" /> : <Copy className="h-8 w-8" />}
                    </Button>
                 </div>
              </div>
              
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
