'use client';

import React, { useState, useEffect } from 'react';
import { colord, extend } from 'colord';
import cmykPlugin from 'colord/plugins/cmyk';
import hwbPlugin from 'colord/plugins/hwb';
import namesPlugin from 'colord/plugins/names';
import { Copy, Check, ArrowRightLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useColorStore } from '@/store/useColorStore';

extend([cmykPlugin, hwbPlugin, namesPlugin]);

export function ColorConverterClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  const [inputColor, setInputColor] = useState(activeColor || '#6366f1');
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  useEffect(() => {
    if (activeColor) setInputColor(activeColor);
  }, [activeColor]);

  const c = colord(inputColor);
  const isValid = c.isValid();

  const formats = [
    { label: 'HEX', value: isValid ? c.toHex() : '' },
    { label: 'RGB', value: isValid ? c.toRgbString() : '' },
    { label: 'HSL', value: isValid ? c.toHslString() : '' },
    { label: 'CMYK', value: isValid ? c.toCmykString() : '' },
    { label: 'HWB', value: isValid ? c.toHwbString() : '' },
    { label: 'CSS Color Name', value: isValid ? (c.toName({ closest: true }) || 'N/A') : '' }
  ];

  const handleCopy = async (value: string, format: string) => {
    if (!value) return;
    await navigator.clipboard.writeText(value);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Unified Color Converter</h1>
        <p className="text-lg text-muted-foreground">
          Enter any valid color format and get instant conversions to all other major color spaces.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
         <Card className="glass flex flex-col items-center justify-center p-8 space-y-6">
            <div 
               className="w-full aspect-square max-h-[300px] rounded-3xl shadow-2xl border-4 transition-colors duration-300"
               style={{ backgroundColor: isValid ? c.toHex() : 'transparent', borderColor: 'rgba(255,255,255,0.1)' }}
            />
            <div className="w-full relative">
               <Label className="text-xs uppercase font-bold tracking-wider mb-2 block">Input Color</Label>
               <Input 
                  value={inputColor}
                  onChange={(e) => setInputColor(e.target.value)}
                  className="h-14 text-lg font-mono text-center bg-background/50"
                  placeholder="#000000 or rgb(0,0,0)"
               />
               {!isValid && inputColor && (
                  <p className="text-red-500 text-xs absolute -bottom-5 left-0">Invalid color format</p>
               )}
            </div>
         </Card>

         <div className="space-y-4">
            {formats.map((format) => (
               <Card key={format.label} className="glass overflow-hidden group">
                  <CardContent className="p-0 flex items-center">
                     <div className="p-4 bg-muted/20 border-r w-32 flex-shrink-0 flex items-center justify-between">
                        <span className="font-bold text-sm">{format.label}</span>
                     </div>
                     <div className="flex-1 p-4 font-mono text-sm truncate">
                        {format.value || '--'}
                     </div>
                     <Button 
                        variant="ghost" 
                        size="icon" 
                        className="mr-2 opacity-50 group-hover:opacity-100 transition-opacity"
                        onClick={() => handleCopy(format.value, format.label)}
                        disabled={!format.value}
                     >
                        {copiedFormat === format.label ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                     </Button>
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
    </div>
  );
}
