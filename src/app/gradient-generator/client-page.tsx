'use client';

import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Copy, Plus, Trash2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ColorStop {
  id: string;
  color: string;
  position: number;
}

export function GradientGeneratorClient() {
  const [stops, setStops] = useState<ColorStop[]>([
    { id: '1', color: '#6366F1', position: 0 },
    { id: '2', color: '#8B5CF6', position: 100 },
  ]);
  const [type, setType] = useState<'linear' | 'radial' | 'conic'>('linear');
  const [angle, setAngle] = useState(90);
  const [activeStop, setActiveStop] = useState<string>(stops[0].id);
  const [copied, setCopied] = useState<string | null>(null);

  const getCssString = () => {
    const sortedStops = [...stops].sort((a, b) => a.position - b.position);
    const stopsString = sortedStops.map(s => `${s.color} ${s.position}%`).join(', ');
    
    if (type === 'linear') return `linear-gradient(${angle}deg, ${stopsString})`;
    if (type === 'radial') return `radial-gradient(circle at center, ${stopsString})`;
    return `conic-gradient(from ${angle}deg, ${stopsString})`;
  };

  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const addStop = () => {
    if (stops.length >= 5) return;
    const newStop = {
      id: Math.random().toString(),
      color: '#ffffff',
      position: 50,
    };
    setStops([...stops, newStop]);
    setActiveStop(newStop.id);
  };

  const removeStop = (id: string) => {
    if (stops.length <= 2) return;
    const newStops = stops.filter(s => s.id !== id);
    setStops(newStops);
    if (activeStop === id) setActiveStop(newStops[0].id);
  };

  const updateStop = (id: string, updates: Partial<ColorStop>) => {
    setStops(stops.map(s => s.id === id ? { ...s, ...updates } : s));
  };

  const activeColor = stops.find(s => s.id === activeStop)?.color || '#000';

  const presets = {
    Aurora: ['linear-gradient(120deg, #a18cd1 0%, #fbc2eb 100%)', 'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'],
    Neon: ['linear-gradient(to right, #ff0844 0%, #ffb199 100%)', 'linear-gradient(to right, #f83600 0%, #f9d423 100%)'],
    Glass: ['linear-gradient(to top, #dfe9f3 0%, white 100%)', 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'],
  };

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Gradient Builder</h1>
        <p className="text-lg text-muted-foreground">
          Construct complex linear, radial, and conic gradients with a precision visual editor.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* Left Column: Preview & Code */}
        <div className="space-y-6">
          <Card className="glass overflow-hidden p-2 border-primary/20">
            <div 
              className="h-[400px] w-full rounded-xl transition-all duration-300 relative shadow-inner" 
              style={{ background: getCssString() }}
            />
          </Card>

          <Card className="glass">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="text-lg">Export Options</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">CSS</span>
                  <Button variant="ghost" size="sm" onClick={() => handleCopy(`background: ${getCssString()};`, 'css')}>
                    {copied === 'css' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <code className="block w-full p-3 bg-muted/50 rounded-lg text-sm font-mono break-all">{`background: ${getCssString()};`}</code>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tailwind (Arbitrary Value)</span>
                  <Button variant="ghost" size="sm" onClick={() => handleCopy(`bg-[${getCssString().replace(/ /g, '_')}]`, 'tw')}>
                    {copied === 'tw' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <code className="block w-full p-3 bg-muted/50 rounded-lg text-sm font-mono break-all">{`bg-[${getCssString().replace(/ /g, '_')}]`}</code>
              </div>
            </CardContent>
          </Card>
          
          {/* Gradient Library */}
          <Card className="glass">
             <CardHeader className="pb-4 border-b border-border/50">
               <CardTitle className="text-lg">Gradient Library</CardTitle>
             </CardHeader>
             <CardContent className="pt-6">
                <div className="space-y-6">
                   {Object.entries(presets).map(([category, grads]) => (
                      <div key={category}>
                         <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">{category}</h4>
                         <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {grads.map((grad, i) => (
                               <div 
                                 key={i} 
                                 className="h-20 rounded-xl cursor-pointer shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95 border border-white/10"
                                 style={{ background: grad }}
                               />
                            ))}
                         </div>
                      </div>
                   ))}
                </div>
             </CardContent>
          </Card>
        </div>

        {/* Right Column: Controls */}
        <div className="space-y-6">
          <Card className="glass">
            <CardHeader className="pb-4 border-b border-border/50">
              <CardTitle className="text-lg">Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-3">
                <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Type</Label>
                <div className="flex gap-2">
                  {(['linear', 'radial', 'conic'] as const).map(t => (
                    <Button 
                      key={t}
                      variant={type === t ? 'default' : 'secondary'} 
                      className="flex-1 capitalize"
                      onClick={() => setType(t)}
                    >
                      {t}
                    </Button>
                  ))}
                </div>
              </div>

              {(type === 'linear' || type === 'conic') && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Angle</Label>
                    <span className="font-mono text-sm">{angle}°</span>
                  </div>
                  {/* Provide an input type range natively or a slider component */}
                  <input 
                    type="range"
                    min="0"
                    max="360"
                    value={angle}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="pb-4 border-b border-border/50 flex flex-row justify-between items-center">
              <CardTitle className="text-lg">Color Stops</CardTitle>
              <Button variant="outline" size="sm" onClick={addStop} disabled={stops.length >= 5}>
                 <Plus className="h-4 w-4 mr-2" /> Add
              </Button>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="flex flex-col gap-3">
                {stops.map((stop) => (
                  <div 
                    key={stop.id} 
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer ${activeStop === stop.id ? 'border-primary bg-primary/5' : 'border-border/50 bg-card hover:bg-muted/50'}`}
                    onClick={() => setActiveStop(stop.id)}
                  >
                    <div 
                      className="w-8 h-8 rounded-full border border-white/20 shadow-inner flex-shrink-0"
                      style={{ backgroundColor: stop.color }}
                    />
                    <div className="flex-1 space-y-2">
                       <div className="flex justify-between items-center">
                          <span className="font-mono text-xs uppercase font-medium">{stop.color}</span>
                          <span className="font-mono text-xs text-muted-foreground">{stop.position}%</span>
                       </div>
                       <input 
                         type="range"
                         min="0"
                         max="100"
                         value={stop.position}
                         onChange={(e) => updateStop(stop.id, { position: Number(e.target.value) })}
                         className="w-full h-1 accent-primary"
                         onClick={(e) => e.stopPropagation()}
                       />
                    </div>
                    {stops.length > 2 && (
                       <Button 
                         variant="ghost" 
                         size="icon" 
                         className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
                         onClick={(e) => {
                            e.stopPropagation();
                            removeStop(stop.id);
                         }}
                       >
                          <Trash2 className="h-4 w-4" />
                       </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border/50">
                 <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 block">Edit Active Stop</Label>
                 <HexColorPicker 
                   color={activeColor} 
                   onChange={(color) => updateStop(activeStop, { color })}
                   className="!w-full !h-48 rounded-xl shadow-inner mb-3"
                 />
                 <Input 
                   value={activeColor.toUpperCase()}
                   onChange={(e) => updateStop(activeStop, { color: e.target.value })}
                   className="font-mono text-center uppercase"
                 />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
