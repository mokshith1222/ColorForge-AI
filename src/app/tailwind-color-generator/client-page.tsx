'use client';

import React, { useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Copy, Code, Check, Eye } from 'lucide-react';
import { useColorStore } from '@/store/useColorStore';
import { generateTailwindScale } from '@/lib/color-utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function TailwindGeneratorClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  const setActiveColor = useColorStore((state) => state.setActiveColor);
  
  const [localColor, setLocalColor] = useState(activeColor);
  const [scaleName, setScaleName] = useState('brand');
  const [scale, setScale] = useState<Record<number, string>>({});
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

  useEffect(() => {
    setScale(generateTailwindScale(localColor));
  }, [localColor]);

  const handleColorChange = (newColor: string) => {
    setLocalColor(newColor);
  };

  const handleCopy = async (text: string, format: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const tailwindConfigStr = `module.exports = {
  theme: {
    extend: {
      colors: {
        '${scaleName}': {
${Object.entries(scale).map(([k, v]) => `          '${k}': '${v}',`).join('\n')}
        }
      }
    }
  }
}`;

  const cssVarsStr = `:root {
${Object.entries(scale).map(([k, v]) => `  --color-${scaleName}-${k}: ${v};`).join('\n')}
}`;

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Tailwind Scale Generator</h1>
        <p className="text-lg text-muted-foreground">
          Convert any color into a perfectly balanced 50-950 Tailwind CSS color scale with live UI previews.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* Left Column: Preview and Output */}
        <div className="space-y-8">
          <Card className="glass overflow-hidden border-primary/20">
            <CardHeader className="pb-4">
              <CardTitle>Color Scale (50-950)</CardTitle>
            </CardHeader>
            <div className="flex flex-col sm:flex-row w-full h-auto sm:h-32">
              {Object.entries(scale).map(([weight, color]) => (
                <div
                  key={weight}
                  className="group relative flex flex-1 h-16 sm:h-full cursor-pointer flex-col items-center justify-end p-2 transition-all duration-300 hover:flex-[2]"
                  style={{ backgroundColor: color }}
                  onClick={() => handleCopy(color, weight)}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <span className="absolute top-2 rounded bg-background/80 px-2 py-1 text-[10px] font-bold opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 shadow-xl">
                    {copiedFormat === weight ? 'COPIED' : color.toUpperCase()}
                  </span>
                  <span className={`text-xs font-bold relative z-10 ${Number(weight) > 400 ? 'text-white' : 'text-black'}`}>
                    {weight}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Live UI Preview Pane */}
          <Card className="glass">
             <CardHeader>
                <CardTitle className="flex items-center gap-2">
                   <Eye className="h-5 w-5 text-primary" /> Live UI Preview
                </CardTitle>
             </CardHeader>
             <CardContent className="space-y-8">
                {/* Buttons */}
                <div className="space-y-3">
                   <Label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Buttons</Label>
                   <div className="flex flex-wrap gap-4">
                      <button className="px-4 py-2 rounded-md font-medium text-sm transition-opacity hover:opacity-90 shadow-sm" style={{ backgroundColor: scale[500], color: '#fff' }}>Primary</button>
                      <button className="px-4 py-2 rounded-md font-medium text-sm transition-opacity hover:opacity-90" style={{ backgroundColor: scale[100], color: scale[900] }}>Secondary</button>
                      <button className="px-4 py-2 rounded-md font-medium text-sm transition-colors border" style={{ borderColor: scale[200], color: scale[700], backgroundColor: 'transparent' }}>Outline</button>
                      <button className="px-4 py-2 rounded-md font-medium text-sm transition-colors hover:bg-muted" style={{ color: scale[600], backgroundColor: 'transparent' }}>Ghost</button>
                   </div>
                </div>

                {/* Alerts & Badges */}
                <div className="space-y-3">
                   <Label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Alerts & Badges</Label>
                   <div className="p-4 rounded-lg border flex gap-3 items-start" style={{ backgroundColor: scale[50], borderColor: scale[200] }}>
                      <div className="p-1 rounded-full mt-0.5" style={{ backgroundColor: scale[100], color: scale[600] }}>
                         <Code className="h-4 w-4" />
                      </div>
                      <div>
                         <h5 className="text-sm font-semibold mb-1" style={{ color: scale[900] }}>Update Available</h5>
                         <p className="text-xs" style={{ color: scale[700] }}>A new version of this package is available. Please update to continue.</p>
                      </div>
                   </div>
                   <div className="flex gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: scale[100], color: scale[800] }}>New Feature</span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold border" style={{ borderColor: scale[300], color: scale[700] }}>v2.0.1</span>
                   </div>
                </div>

                {/* Cards & Inputs */}
                <div className="space-y-3">
                   <Label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Cards & Inputs</Label>
                   <div className="p-5 rounded-xl border shadow-sm max-w-sm space-y-4" style={{ borderColor: scale[200] }}>
                      <div>
                         <Label className="text-xs mb-1.5 block" style={{ color: scale[700] }}>Email Address</Label>
                         <input 
                           type="email" 
                           placeholder="you@example.com" 
                           className="w-full px-3 py-2 rounded-md text-sm outline-none transition-colors" 
                           style={{ border: `1px solid ${scale[300]}`, backgroundColor: '#fff', color: scale[900] }}
                         />
                      </div>
                      <button className="w-full px-4 py-2 rounded-md font-medium text-sm transition-opacity hover:opacity-90 shadow-sm" style={{ backgroundColor: scale[500], color: '#fff' }}>Subscribe</button>
                   </div>
                </div>
             </CardContent>
          </Card>

          {/* Export Panels */}
          <div className="grid md:grid-cols-2 gap-6">
             <Card className="glass">
               <CardHeader className="flex flex-row items-center justify-between pb-4">
                 <CardTitle className="text-lg">Tailwind Config</CardTitle>
                 <Button variant="ghost" size="icon" onClick={() => handleCopy(tailwindConfigStr, 'config')}>
                   {copiedFormat === 'config' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                 </Button>
               </CardHeader>
               <CardContent>
                 <code className="block whitespace-pre-wrap rounded-lg bg-muted/50 p-4 text-xs font-mono text-muted-foreground h-48 overflow-y-auto border border-border/50">
                   {tailwindConfigStr}
                 </code>
               </CardContent>
             </Card>

             <Card className="glass">
               <CardHeader className="flex flex-row items-center justify-between pb-4">
                 <CardTitle className="text-lg">CSS Variables</CardTitle>
                 <Button variant="ghost" size="icon" onClick={() => handleCopy(cssVarsStr, 'css')}>
                   {copiedFormat === 'css' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                 </Button>
               </CardHeader>
               <CardContent>
                 <code className="block whitespace-pre-wrap rounded-lg bg-muted/50 p-4 text-xs font-mono text-muted-foreground h-48 overflow-y-auto border border-border/50">
                   {cssVarsStr}
                 </code>
               </CardContent>
             </Card>
          </div>
        </div>

        {/* Right Column: Controls */}
        <div className="space-y-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle>Generator Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="scale-name" className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Scale Name</Label>
                <Input 
                  id="scale-name"
                  value={scaleName}
                  onChange={(e) => setScaleName(e.target.value)}
                  placeholder="e.g. brand, primary, accent"
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2 pt-4 border-t border-border/50">
                <Label className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Base Color (500)</Label>
                <HexColorPicker 
                  color={localColor} 
                  onChange={handleColorChange}
                  className="!w-full !h-48 rounded-xl shadow-inner mb-3"
                />
                <Input 
                  value={localColor.toUpperCase()}
                  onChange={(e) => handleColorChange(e.target.value)}
                  className="font-mono text-center uppercase bg-background/50"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
