'use client';

import React, { useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { CheckCircle2, XCircle, Layers, Monitor, Shuffle } from 'lucide-react';
import { useColorStore } from '@/store/useColorStore';
import { getContrastRatio, isAccessible } from '@/lib/color-utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { colord } from 'colord';

export function AccessibilityCheckerClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  
  const [textColor, setTextColor] = useState('#ffffff');
  const [bgColor, setBgColor] = useState(activeColor);
  const [previewMode, setPreviewMode] = useState<'text' | 'button' | 'link' | 'card'>('text');
  
  const [contrastRatio, setContrastRatio] = useState(1);
  const [aaNormal, setAaNormal] = useState(false);
  const [aaLarge, setAaLarge] = useState(false);
  const [aaaNormal, setAaaNormal] = useState(false);
  const [aaaLarge, setAaaLarge] = useState(false);

  useEffect(() => {
    setBgColor(activeColor);
  }, [activeColor]);

  useEffect(() => {
    setContrastRatio(getContrastRatio(textColor, bgColor));
    setAaNormal(isAccessible(textColor, bgColor, 'AA', 'normal'));
    setAaLarge(isAccessible(textColor, bgColor, 'AA', 'large'));
    setAaaNormal(isAccessible(textColor, bgColor, 'AAA', 'normal'));
    setAaaLarge(isAccessible(textColor, bgColor, 'AAA', 'large'));
  }, [textColor, bgColor]);

  const passes = aaNormal || aaLarge || aaaNormal || aaaLarge;
  
  const swapColors = () => {
    const temp = textColor;
    setTextColor(bgColor);
    setBgColor(temp);
  };

  const getScore = () => {
    if (aaaNormal) return { label: 'Excellent', color: 'text-green-500' };
    if (aaNormal) return { label: 'Good', color: 'text-green-400' };
    if (aaLarge) return { label: 'Passable (Large Only)', color: 'text-yellow-500' };
    return { label: 'Poor', color: 'text-red-500' };
  };

  const score = getScore();

  const getSuggestion = () => {
    if (aaaNormal) return "Perfect contrast! Safe to use anywhere.";
    if (aaNormal) return "Good contrast for general use, but you could increase it slightly to meet AAA standards.";
    if (aaLarge) return "Only safe for large text (18pt+). Try darkening the background or lightening the text.";
    return "Insufficient contrast. You must adjust the colors before using this combination in production.";
  };

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Accessibility Checker</h1>
        <p className="text-lg text-muted-foreground">
          Validate your color combinations against WCAG guidelines to ensure inclusive and readable designs.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* Left Column: Preview and Results */}
        <div className="space-y-6">
          <Card className="glass overflow-hidden border-primary/20">
            <CardHeader className="pb-4 border-b border-border/50 flex flex-row justify-between items-center">
              <CardTitle className="text-lg flex items-center gap-2">
                 <Monitor className="h-5 w-5" /> Live Preview
              </CardTitle>
              <div className="flex gap-2">
                 {(['text', 'button', 'link', 'card'] as const).map(mode => (
                   <Button 
                     key={mode}
                     variant={previewMode === mode ? 'default' : 'ghost'}
                     size="sm"
                     className="capitalize text-xs h-8"
                     onClick={() => setPreviewMode(mode)}
                   >
                     {mode}
                   </Button>
                 ))}
              </div>
            </CardHeader>
            <div 
              className="flex min-h-[400px] flex-col items-center justify-center p-8 transition-colors duration-300" 
              style={{ backgroundColor: previewMode === 'card' ? (colord(bgColor).isDark() ? '#000' : '#f0f0f0') : bgColor }}
            >
              {previewMode === 'text' && (
                <div className="max-w-xl text-center" style={{ color: textColor }}>
                  <h2 className="mb-6 text-4xl font-bold tracking-tight">Accessible Design is Good Design</h2>
                  <p className="text-lg leading-relaxed">
                    Color contrast is fundamental to readability. A high contrast ratio ensures that everyone, including people with visual impairments, can consume your content easily.
                  </p>
                </div>
              )}
              
              {previewMode === 'button' && (
                <div className="flex flex-col gap-6 items-center">
                   <button 
                     className="px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
                     style={{ backgroundColor: bgColor, color: textColor }}
                   >
                     Primary Action
                   </button>
                   <p className="text-sm opacity-80" style={{ color: bgColor }}>Buttons must be highly legible.</p>
                </div>
              )}

              {previewMode === 'link' && (
                <div className="max-w-xl text-center text-lg" style={{ color: colord(bgColor).isDark() ? '#fff' : '#000' }}>
                  <p className="leading-relaxed">
                    Check out our <a href="#" className="font-bold underline underline-offset-4" style={{ color: textColor }}>comprehensive guide to accessibility</a>. Links should stand out from surrounding text and maintain sufficient contrast with the background.
                  </p>
                </div>
              )}

              {previewMode === 'card' && (
                <div 
                  className="max-w-sm w-full p-8 rounded-2xl shadow-2xl"
                  style={{ backgroundColor: bgColor }}
                >
                  <h3 className="text-2xl font-bold mb-3" style={{ color: textColor }}>Card Component</h3>
                  <p className="text-sm leading-relaxed opacity-90" style={{ color: textColor }}>
                    Cards often group related information. The text inside the card needs to be readable against the card's surface color.
                  </p>
                  <button className="mt-6 px-4 py-2 rounded-lg text-sm font-bold w-full" style={{ backgroundColor: textColor, color: bgColor }}>
                     Read More
                  </button>
                </div>
              )}
            </div>
          </Card>

          <Card className="glass">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle className="text-lg">Contrast Results</CardTitle>
              </div>
              <div className="text-right flex items-center gap-4">
                <div className="flex flex-col items-end">
                   <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Score</span>
                   <span className={`text-sm font-bold ${score.color}`}>{score.label}</span>
                </div>
                <div className="w-px h-8 bg-border/50" />
                <div className="flex flex-col items-end">
                   <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Ratio</span>
                   <div className={`text-2xl font-black ${passes ? 'text-green-500' : 'text-red-500'}`}>
                     {contrastRatio.toFixed(2)}:1
                   </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-4 border-t border-border/50">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className={`flex items-center justify-between rounded-xl border p-4 transition-colors ${aaNormal ? 'border-green-500/50 bg-green-500/10' : 'border-red-500/50 bg-red-500/10'}`}>
                  <div>
                    <div className="font-bold text-sm">WCAG AA</div>
                    <div className="text-xs mt-1 opacity-80 font-medium">Normal Text (4.5:1)</div>
                  </div>
                  {aaNormal ? <CheckCircle2 className="h-6 w-6 text-green-500" /> : <XCircle className="h-6 w-6 text-red-500" />}
                </div>
                <div className={`flex items-center justify-between rounded-xl border p-4 transition-colors ${aaLarge ? 'border-green-500/50 bg-green-500/10' : 'border-red-500/50 bg-red-500/10'}`}>
                  <div>
                    <div className="font-bold text-sm">WCAG AA</div>
                    <div className="text-xs mt-1 opacity-80 font-medium">Large Text (3.0:1)</div>
                  </div>
                  {aaLarge ? <CheckCircle2 className="h-6 w-6 text-green-500" /> : <XCircle className="h-6 w-6 text-red-500" />}
                </div>
                <div className={`flex items-center justify-between rounded-xl border p-4 transition-colors ${aaaNormal ? 'border-green-500/50 bg-green-500/10' : 'border-red-500/50 bg-red-500/10'}`}>
                  <div>
                    <div className="font-bold text-sm">WCAG AAA</div>
                    <div className="text-xs mt-1 opacity-80 font-medium">Normal Text (7.0:1)</div>
                  </div>
                  {aaaNormal ? <CheckCircle2 className="h-6 w-6 text-green-500" /> : <XCircle className="h-6 w-6 text-red-500" />}
                </div>
                <div className={`flex items-center justify-between rounded-xl border p-4 transition-colors ${aaaLarge ? 'border-green-500/50 bg-green-500/10' : 'border-red-500/50 bg-red-500/10'}`}>
                  <div>
                    <div className="font-bold text-sm">WCAG AAA</div>
                    <div className="text-xs mt-1 opacity-80 font-medium">Large Text (4.5:1)</div>
                  </div>
                  {aaaLarge ? <CheckCircle2 className="h-6 w-6 text-green-500" /> : <XCircle className="h-6 w-6 text-red-500" />}
                </div>
              </div>

              <div className="bg-muted/50 p-4 rounded-xl border border-border/50 flex gap-3 items-start">
                 <div className="mt-0.5">
                    <Layers className="h-5 w-5 text-accent" />
                 </div>
                 <div>
                    <h5 className="font-bold text-sm mb-1">AI Suggestion</h5>
                    <p className="text-sm text-muted-foreground">{getSuggestion()}</p>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Controls */}
        <div className="space-y-6">
          <Card className="glass">
            <CardHeader className="pb-4 border-b border-border/50 flex flex-row justify-between items-center">
              <CardTitle className="text-lg">Color Selection</CardTitle>
              <Button variant="ghost" size="icon" onClick={swapColors} title="Swap Colors">
                 <Shuffle className="h-4 w-4 text-muted-foreground" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-8 pt-6">
              
              <div className="space-y-4">
                 <div className="flex justify-between items-center">
                   <Label className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Text Color</Label>
                   <div className="w-8 h-8 rounded-md border shadow-sm" style={{ backgroundColor: textColor }} />
                 </div>
                 <HexColorPicker 
                   color={textColor} 
                   onChange={setTextColor}
                   className="!w-full !h-32 rounded-xl shadow-inner"
                 />
                 <Input 
                   value={textColor.toUpperCase()}
                   onChange={(e) => setTextColor(e.target.value)}
                   className="font-mono text-center uppercase bg-background/50"
                 />
              </div>

              <div className="space-y-4 pt-6 border-t border-border/50">
                 <div className="flex justify-between items-center">
                   <Label className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Background Color</Label>
                   <div className="w-8 h-8 rounded-md border shadow-sm" style={{ backgroundColor: bgColor }} />
                 </div>
                 <HexColorPicker 
                   color={bgColor} 
                   onChange={setBgColor}
                   className="!w-full !h-32 rounded-xl shadow-inner"
                 />
                 <Input 
                   value={bgColor.toUpperCase()}
                   onChange={(e) => setBgColor(e.target.value)}
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
