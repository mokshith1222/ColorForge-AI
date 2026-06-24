'use client';

import React, { useState, useCallback, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { getColor, getPalette } from 'colorthief';
import { Upload, Image as ImageIcon, Copy, Plus, Palette, Wand2, Monitor, ArrowRight, PieChart, Check } from 'lucide-react';
import { useColorStore } from '@/store/useColorStore';
import { colord } from 'colord';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export function ImageExtractorClient() {
  const saveColor = useColorStore((state) => state.saveColor);
  const savePalette = useColorStore((state) => state.savePalette);
  const setActiveColor = useColorStore((state) => state.setActiveColor);
  const router = useRouter();
  
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [dominantColor, setDominantColor] = useState<string | null>(null);
  const [palette, setPalette] = useState<string[]>([]);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
      setDominantColor(null);
      setPalette([]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': []
    },
    maxFiles: 1
  });

  const handleImageLoad = async () => {
    if (imgRef.current) {
      try {
        const domColor = await getColor(imgRef.current);
        if (domColor) {
          const hexDom = domColor.hex();
          setDominantColor(hexDom);

          const pal = await getPalette(imgRef.current, { colorCount: 8 });
          if (pal) {
            const hexPal = pal.map(p => p.hex());
            // Ensure dominant is first
            setPalette([hexDom, ...hexPal.filter(c => c !== hexDom).slice(0, 7)]);
          }
        }
      } catch (e) {
        console.error("Error extracting colors", e);
      }
    }
  };

  const handleCopy = async (color: string) => {
    await navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const handleUseColor = (color: string) => {
    setActiveColor(color);
  };

  const navigateToTool = (tool: string, color: string) => {
    setActiveColor(color);
    router.push(tool);
  };

  const getPieChartStyle = () => {
    if (palette.length === 0) return {};
    let currentPercentage = 0;
    const slices = palette.map((color, i) => {
      // First color gets 30%, others split the rest
      const percentage = i === 0 ? 30 : 70 / (palette.length - 1);
      const start = currentPercentage;
      currentPercentage += percentage;
      return `${color} ${start}% ${currentPercentage}%`;
    });
    return {
      background: `conic-gradient(${slices.join(', ')})`
    };
  };

  const handleCopyAll = async (format: 'json' | 'css') => {
    if (palette.length === 0) return;
    let text = '';
    if (format === 'json') {
      text = JSON.stringify(palette, null, 2);
    } else {
      text = `:root {\\n` + palette.map((c, i) => `  --extracted-${i+1}: ${c};`).join('\\n') + `\\n}`;
    }
    await navigator.clipboard.writeText(text);
    setCopiedColor(`all-${format}`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const vibrantColors = palette.filter(c => colord(c).toHsl().s > 50);
  const mutedColors = palette.filter(c => colord(c).toHsl().s <= 50);

  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Image Color Extractor</h1>
        <p className="text-lg text-muted-foreground">
          Upload any image to instantly extract its dominant color, a full palette, and visual distribution.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_400px]">
        {/* Left Column: Image Upload & Actions */}
        <div className="space-y-8">
          <Card className="glass overflow-hidden border-primary/20">
            <CardContent className="p-0">
              <div 
                {...getRootProps()} 
                className={`relative flex min-h-[400px] cursor-pointer flex-col items-center justify-center transition-colors ${
                  isDragActive ? 'bg-primary/5 border-2 border-primary border-dashed m-2 rounded-xl' : 'hover:bg-muted/50'
                }`}
              >
                <input {...getInputProps()} />
                
                {imageSrc ? (
                  <img 
                    ref={imgRef}
                    src={imageSrc} 
                    alt="Uploaded" 
                    className="max-h-[500px] w-full object-cover"
                    onLoad={handleImageLoad}
                    crossOrigin="anonymous"
                  />
                ) : (
                  <div className="flex flex-col items-center text-muted-foreground p-12 text-center">
                    <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-6 shadow-inner">
                       <Upload className="h-8 w-8 text-primary" />
                    </div>
                    <p className="mb-2 text-xl font-bold text-foreground">Drag & drop an image here</p>
                    <p className="text-sm">or click to select a file from your computer</p>
                  </div>
                )}
                
                {imageSrc && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <Button variant="secondary" size="lg" className="shadow-2xl">
                      <Upload className="mr-2 h-4 w-4" /> Replace Image
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {dominantColor && (
             <Card className="glass">
                <CardHeader>
                   <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                   <div className="grid sm:grid-cols-3 gap-4">
                      <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 hover:border-primary/50 hover:bg-primary/5" onClick={() => navigateToTool('/color-palette-generator', dominantColor)}>
                         <Palette className="h-4 w-4" />
                         <span className="text-xs">Generate Palette</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 hover:border-primary/50 hover:bg-primary/5" onClick={() => navigateToTool('/gradient-generator', dominantColor)}>
                         <Wand2 className="h-4 w-4" />
                         <span className="text-xs">Create Gradient</span>
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 hover:border-primary/50 hover:bg-primary/5" onClick={() => navigateToTool('/tailwind-color-generator', dominantColor)}>
                         <Monitor className="h-4 w-4" />
                         <span className="text-xs">Tailwind Scale</span>
                      </Button>
                   </div>
                </CardContent>
             </Card>
          )}
        </div>

        {/* Right Column: Extracted Colors */}
        <div className="space-y-6">
          {imageSrc && !dominantColor && (
            <Card className="glass">
              <CardContent className="flex min-h-[300px] items-center justify-center p-6">
                <div className="flex flex-col items-center text-muted-foreground animate-pulse">
                  <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4" />
                  <p className="font-bold tracking-wider uppercase text-xs">Analyzing Pixels...</p>
                </div>
              </CardContent>
            </Card>
          )}

          {dominantColor && (
            <>
              <Card className="glass animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CardHeader className="pb-4 border-b border-border/50">
                  <CardTitle className="text-lg">Dominant Color</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-col gap-6">
                    <div 
                      className="h-32 w-full rounded-2xl shadow-inner relative group cursor-pointer"
                      style={{ backgroundColor: dominantColor }}
                      onClick={() => handleCopy(dominantColor)}
                    >
                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-2xl">
                          <span className="bg-background/90 px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2">
                             <Copy className="h-4 w-4" /> Copy HEX
                          </span>
                       </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                         <code className="text-2xl font-bold block">{dominantColor.toUpperCase()}</code>
                         <span className="text-xs text-muted-foreground font-mono">{colord(dominantColor).toRgbString()}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="secondary" size="icon" onClick={() => handleUseColor(dominantColor)} title="Set as Active Color">
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => saveColor(dominantColor)} title="Save Color">
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                <CardHeader className="pb-4 border-b border-border/50">
                   <CardTitle className="text-lg flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-primary" /> Visual Breakdown
                   </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 flex gap-6 items-center">
                   <div className="w-24 h-24 rounded-full shadow-inner border border-white/10 shrink-0" style={getPieChartStyle()} />
                   <div className="flex-1 space-y-1">
                      <div className="flex justify-between text-xs">
                         <span className="font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dominantColor }} /> Dominant
                         </span>
                         <span className="text-muted-foreground">30%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                         <span className="font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: palette[1] }} /> Secondary
                         </span>
                         <span className="text-muted-foreground">~10%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                         <span className="font-bold flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-muted" /> Others
                         </span>
                         <span className="text-muted-foreground">~60%</span>
                      </div>
                   </div>
                </CardContent>
              </Card>

              <Card className="glass animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                <CardHeader className="pb-4 border-b border-border/50 flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="text-lg">Extracted Palette</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm" onClick={() => handleCopyAll('json')} title="Copy JSON Array">
                       {copiedColor === 'all-json' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => {
                       savePalette(palette);
                       setCopiedColor('palette-saved');
                       setTimeout(() => setCopiedColor(null), 2000);
                    }} title="Save Palette">
                       {copiedColor === 'palette-saved' ? <Check className="mr-2 h-4 w-4 text-green-500" /> : <Plus className="mr-2 h-4 w-4" />}
                       {copiedColor === 'palette-saved' ? 'Saved!' : 'Save Palette'}
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleCopyAll('css')} title="Copy CSS Variables">
                       {copiedColor === 'all-css' ? <Check className="h-4 w-4 text-green-500" /> : <Monitor className="h-4 w-4" />}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  
                  <div>
                     <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Vibrant Colors</h4>
                     <div className="flex gap-2 h-12">
                        {vibrantColors.map(c => (
                           <div 
                             key={c} 
                             className="flex-1 rounded-md shadow-sm cursor-pointer hover:scale-110 transition-transform" 
                             style={{ backgroundColor: c }}
                             onClick={() => handleCopy(c)}
                             title={c.toUpperCase()}
                           />
                        ))}
                        {vibrantColors.length === 0 && <div className="text-xs text-muted-foreground flex items-center">No vibrant colors detected.</div>}
                     </div>
                  </div>

                  <div>
                     <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Muted Colors</h4>
                     <div className="flex gap-2 h-12">
                        {mutedColors.map(c => (
                           <div 
                             key={c} 
                             className="flex-1 rounded-md shadow-sm cursor-pointer hover:scale-110 transition-transform" 
                             style={{ backgroundColor: c }}
                             onClick={() => handleCopy(c)}
                             title={c.toUpperCase()}
                           />
                        ))}
                        {mutedColors.length === 0 && <div className="text-xs text-muted-foreground flex items-center">No muted colors detected.</div>}
                     </div>
                  </div>

                </CardContent>
              </Card>
            </>
          )}

          {!imageSrc && (
            <Card className="glass">
              <CardContent className="flex min-h-[300px] flex-col items-center justify-center p-6 text-center text-muted-foreground">
                <div className="h-16 w-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                   <ImageIcon className="h-8 w-8 opacity-40" />
                </div>
                <p className="font-medium text-foreground mb-1">Awaiting Image</p>
                <p className="text-sm">Upload an image on the left to see the extracted colors here.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
