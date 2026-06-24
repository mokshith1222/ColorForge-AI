'use client';

import React, { useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Copy, Plus, Check, Thermometer, Hash, Info, Sparkles } from 'lucide-react';
import { useColorStore } from '@/store/useColorStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { colord, extend } from 'colord';
import cmykPlugin from 'colord/plugins/cmyk';
import hwbPlugin from 'colord/plugins/hwb';
import lchPlugin from 'colord/plugins/lch';
import labPlugin from 'colord/plugins/lab';
import namesPlugin from 'colord/plugins/names';

extend([cmykPlugin, hwbPlugin, lchPlugin, labPlugin, namesPlugin]);

export function ColorPickerClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  const setActiveColor = useColorStore((state) => state.setActiveColor);
  const saveColor = useColorStore((state) => state.saveColor);
  
  const [localColor, setLocalColor] = useState(activeColor);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  useEffect(() => {
    setLocalColor(activeColor);
  }, [activeColor]);

  useEffect(() => {
    if (localColor === activeColor) return;
    const timeoutId = setTimeout(() => {
      setActiveColor(localColor);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [localColor, activeColor, setActiveColor]);

  const handleColorChange = (newColor: string) => {
    setLocalColor(newColor);
  };

  const handleCopy = async (text: string, format: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const colorObj = colord(localColor);
  const formats = {
    HEX: colorObj.toHex(),
    RGB: colorObj.toRgbString(),
    HSL: colorObj.toHslString(),
    HSV: `hsv(${Math.round(colorObj.toHsv().h)}, ${Math.round(colorObj.toHsv().s)}%, ${Math.round(colorObj.toHsv().v)}%)`,
    CMYK: colorObj.toCmykString(),
    LAB: `lab(${Math.round(colorObj.toLab().l)} ${Math.round(colorObj.toLab().a)} ${Math.round(colorObj.toLab().b)})`,
    LCH: `lch(${Math.round(colorObj.toLch().l)} ${Math.round(colorObj.toLch().c)} ${Math.round(colorObj.toLch().h)})`,
  };

  const isDark = colorObj.isDark();
  const closestName = colorObj.toName({ closest: true }) || 'Unknown';
  
  // Approximate temperature logic based on hue
  const h = colorObj.toHsl().h;
  const isWarm = (h >= 0 && h <= 90) || (h >= 300 && h <= 360);
  const temperatureName = isWarm ? 'Warm' : 'Cool';

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Color Picker & Converter</h1>
        <p className="text-lg text-muted-foreground">
          Select, convert, and manage colors with precision. Supports HEX, RGB, HSL, HSV, CMYK, LAB, and LCH.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        {/* Left Column: Interactive Picker */}
        <div className="space-y-6">
          <Card className="glass overflow-hidden border-2 border-primary/10">
            <div 
              className="h-64 w-full transition-colors duration-200 relative group" 
              style={{ backgroundColor: localColor }}
            >
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                    {localColor.toUpperCase()}
                  </h2>
               </div>
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col gap-8 md:flex-row md:items-start">
                <div className="flex-1 w-full max-w-sm mx-auto md:mx-0">
                  <HexColorPicker 
                    color={localColor} 
                    onChange={handleColorChange}
                    className="!w-full !h-64 rounded-xl shadow-inner"
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="hex-input" className="text-muted-foreground uppercase text-xs font-bold tracking-wider">HEX Code</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="hex-input"
                        value={localColor.toUpperCase()}
                        onChange={(e) => handleColorChange(e.target.value)}
                        className="font-mono text-lg h-12 bg-background/50"
                      />
                      <Button 
                        variant="default" 
                        onClick={() => saveColor(localColor)}
                        className="h-12 shrink-0 shadow-lg"
                      >
                        <Plus className="mr-2 h-4 w-4" /> Save
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-muted/50 p-4 rounded-xl border border-border/50">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                           <Thermometer className="h-4 w-4" />
                           <span className="text-xs font-bold uppercase tracking-wider">Temperature</span>
                        </div>
                        <div className="font-semibold text-lg">{temperatureName}</div>
                     </div>
                     <div className="bg-muted/50 p-4 rounded-xl border border-border/50">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                           <Hash className="h-4 w-4" />
                           <span className="text-xs font-bold uppercase tracking-wider">Closest CSS Name</span>
                        </div>
                        <div className="font-semibold text-lg capitalize">{closestName}</div>
                     </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Color Information */}
        <div className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center text-lg gap-2">
                <Info className="h-5 w-5 text-primary" />
                Color Values
              </CardTitle>
            </CardHeader>
            <CardContent>
               <div className="space-y-3">
                  {Object.entries(formats).map(([format, value]) => (
                    <div key={format} className="flex items-center justify-between gap-4 p-2 hover:bg-muted/50 rounded-lg transition-colors group">
                      <span className="w-14 text-sm font-bold uppercase text-muted-foreground">{format}</span>
                      <code className="flex-1 text-sm font-mono tracking-wide">{value}</code>
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        onClick={() => handleCopy(value as string, format)}
                        className="h-8 w-8 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        {copiedFormat === format ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>

          <Card className="glass">
             <CardHeader>
               <CardTitle className="flex items-center text-lg gap-2">
                 <Sparkles className="h-5 w-5 text-accent" />
                 Color Meaning
               </CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isWarm 
                     ? "Warm colors like red, orange, and yellow evoke emotions ranging from feelings of warmth and comfort to feelings of anger and hostility." 
                     : "Cool colors like blue, green, and light purple are often described as calm, but can also call to mind feelings of sadness or indifference."}
                  <br /><br />
                  This specific shade of <strong>{closestName}</strong> is often used in modern UI design to convey {isDark ? 'sophistication, luxury, and depth' : 'openness, clarity, and approachability'}.
                </p>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
