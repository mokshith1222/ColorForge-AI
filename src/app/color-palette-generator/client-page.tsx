'use client';

import React, { useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Copy, Plus, Download, Shuffle, Lock, Unlock, Check, Sparkles, Layout } from 'lucide-react';
import { useColorStore } from '@/store/useColorStore';
import { generatePalettes } from '@/lib/color-utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { colord } from 'colord';

export function PaletteGeneratorClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  const setActiveColor = useColorStore((state) => state.setActiveColor);
  const saveColor = useColorStore((state) => state.saveColor);
  const savePalette = useColorStore((state) => state.savePalette);
  
  const [localColor, setLocalColor] = useState(activeColor);
  const [harmonyType, setHarmonyType] = useState<string>('monochromatic');
  const [palettes, setPalettes] = useState<Record<string, string[]>>({});
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    if (!isLocked) {
      setLocalColor(activeColor);
    }
  }, [activeColor, isLocked]);

  useEffect(() => {
    if (isLocked || localColor === activeColor) return;
    const timeoutId = setTimeout(() => {
      setActiveColor(localColor);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [localColor, activeColor, isLocked, setActiveColor]);

  useEffect(() => {
    setPalettes(generatePalettes(localColor));
  }, [localColor]);

  const handleColorChange = (newColor: string) => {
    setLocalColor(newColor);
  };

  const handleShuffle = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    handleColorChange(randomColor);
  };

  const handleCopy = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const currentPalette = palettes[harmonyType] || [];
  
  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Palette Generator</h1>
        <p className="text-lg text-muted-foreground">
          Create harmonious palettes instantly. Explore monochromatic, analogous, and complementary relationships.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
        {/* Sidebar Controls */}
        <div className="space-y-6">
          <Card className="glass border-primary/10">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Controls</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label>Base Color</Label>
                  <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsLocked(!isLocked)} title={isLocked ? "Unlock Base Color" : "Lock Base Color"}>
                    {isLocked ? <Lock className="h-4 w-4 text-accent" /> : <Unlock className="h-4 w-4 text-muted-foreground" />}
                  </Button>
                </div>
                <HexColorPicker 
                  color={localColor} 
                  onChange={handleColorChange}
                  className="!w-full !h-48 rounded-xl shadow-inner"
                />
                <div className="flex gap-2">
                  <Input 
                    value={localColor.toUpperCase()}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="font-mono text-center uppercase"
                  />
                  <Button variant="outline" size="icon" onClick={handleShuffle} title="Random Color">
                    <Shuffle className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/50">
                <Label>Harmony Type</Label>
                <div className="flex flex-col gap-2">
                  {Object.keys(palettes).map((type) => (
                    <Button 
                      key={type}
                      variant={harmonyType === type ? 'default' : 'secondary'}
                      className="justify-start capitalize"
                      onClick={() => setHarmonyType(type)}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Palettes View */}
        <div className="space-y-8">
          <Card className="glass border-transparent overflow-hidden">
             <div className="p-6 pb-0 flex justify-between items-center">
                <h3 className="text-2xl font-bold capitalize">{harmonyType} Palette</h3>
                <div className="flex gap-2">
                   <Button variant="outline" size="sm" onClick={() => saveColor(localColor)}>
                      <Plus className="mr-2 h-4 w-4" /> Save Base
                   </Button>
                   <Button variant="outline" size="sm" onClick={() => {
                      savePalette(currentPalette);
                      setCopiedColor('palette-saved');
                      setTimeout(() => setCopiedColor(null), 2000);
                   }}>
                      {copiedColor === 'palette-saved' ? <Check className="mr-2 h-4 w-4 text-green-500" /> : <Plus className="mr-2 h-4 w-4" />}
                      {copiedColor === 'palette-saved' ? 'Saved!' : 'Save Palette'}
                   </Button>
                   <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" /> Export
                   </Button>
                </div>
             </div>
             <CardContent className="p-6">
                <div className="flex h-64 w-full rounded-2xl overflow-hidden shadow-2xl mb-8">
                  {currentPalette.map((color, i) => (
                    <div
                      key={`${color}-${i}`}
                      className="group relative flex-1 cursor-pointer transition-all duration-500 hover:flex-[1.5]"
                      style={{ backgroundColor: color }}
                      onClick={() => handleCopy(color)}
                    >
                      <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 opacity-0 transition-all duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/60 to-transparent">
                        <span className="rounded bg-background/90 px-3 py-1.5 font-mono text-sm font-bold shadow-lg flex items-center gap-2">
                          {copiedColor === color ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                          {color.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {currentPalette.map((color, i) => (
                    <div key={i} className="bg-muted/50 p-3 rounded-xl border border-border/50 text-center space-y-2">
                       <div className="w-full h-8 rounded-lg shadow-inner" style={{ backgroundColor: color }} />
                       <div className="text-xs font-mono font-medium">{color.toUpperCase()}</div>
                       <div className="text-[10px] font-mono text-muted-foreground">{colord(color).toRgbString()}</div>
                       <div className="text-[10px] font-mono text-muted-foreground">{colord(color).toHslString()}</div>
                    </div>
                  ))}
                </div>
             </CardContent>
          </Card>

          {/* Additional Panels */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-accent" /> Gradient Suggestion
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <div 
                   className="w-full h-32 rounded-xl shadow-inner mb-4"
                   style={{ backgroundImage: `linear-gradient(to right, ${currentPalette[0]}, ${currentPalette[currentPalette.length - 1]})` }}
                 />
                 <p className="text-sm text-muted-foreground">A smooth linear transition from the first to the last color in your selected palette.</p>
              </CardContent>
            </Card>
            
            <Card className="glass">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layout className="h-5 w-5 text-primary" /> UI Usage Example
                </CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="w-full h-32 rounded-xl border border-border/50 p-4 space-y-4 relative overflow-hidden" style={{ backgroundColor: currentPalette[0] }}>
                    <div className="w-3/4 h-4 rounded" style={{ backgroundColor: colord(currentPalette[0]).isDark() ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)' }} />
                    <div className="w-1/2 h-3 rounded" style={{ backgroundColor: colord(currentPalette[0]).isDark() ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }} />
                    <div className="absolute bottom-4 right-4 px-4 py-2 rounded-lg font-bold text-xs" style={{ backgroundColor: currentPalette[2] || currentPalette[1], color: colord(currentPalette[2] || currentPalette[1]).isDark() ? '#fff' : '#000' }}>
                       Primary Action
                    </div>
                 </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
