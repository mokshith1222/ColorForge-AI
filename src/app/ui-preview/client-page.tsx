'use client';

import React, { useState } from 'react';
import { Layers, MousePointerClick, AlertCircle, CheckCircle2 } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';
import { useColorStore } from '@/store/useColorStore';

export function UIPreviewClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  
  const [colors, setColors] = useState({
    primary: activeColor || '#6366f1',
    secondary: '#ec4899',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f8fafc',
    textMuted: '#94a3b8'
  });

  const [activePicker, setActivePicker] = useState<keyof typeof colors | null>(null);

  const updateColor = (key: keyof typeof colors, value: string) => {
    setColors(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-[70vh]">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
           <Layers className="w-8 h-8 text-primary" /> Live UI Preview
        </h1>
        <p className="text-lg text-muted-foreground">
          See exactly how your color palette translates to actual interface components.
        </p>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-8 max-w-6xl mx-auto">
         {/* Controls */}
         <div className="space-y-6">
            <div className="glass p-6 rounded-2xl space-y-4">
               <h3 className="font-bold text-lg mb-4">Palette Tokens</h3>
               
               {(Object.keys(colors) as Array<keyof typeof colors>).map((key) => (
                  <div key={key} className="space-y-2">
                     <div className="flex justify-between items-center text-sm">
                        <span className="capitalize font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="font-mono text-xs text-muted-foreground">{colors[key]}</span>
                     </div>
                     <div className="flex gap-3">
                        <button 
                           className="w-10 h-10 rounded-lg shadow-inner border-2 transition-all hover:scale-105"
                           style={{ backgroundColor: colors[key], borderColor: activePicker === key ? 'white' : 'transparent' }}
                           onClick={() => setActivePicker(activePicker === key ? null : key)}
                        />
                     </div>
                     
                     {activePicker === key && (
                        <div className="pt-2 animate-in fade-in slide-in-from-top-2">
                           <HexColorPicker 
                              color={colors[key]} 
                              onChange={(c) => updateColor(key, c)}
                              className="!w-full"
                           />
                        </div>
                     )}
                  </div>
               ))}
            </div>
         </div>

         {/* Preview Area */}
         <div 
            className="rounded-3xl border shadow-2xl p-8 transition-colors duration-500 overflow-hidden"
            style={{ backgroundColor: colors.background, borderColor: colors.surface }}
         >
            <div className="max-w-2xl mx-auto space-y-8">
               {/* Header Preview */}
               <div className="space-y-4">
                  <h2 className="text-3xl font-bold transition-colors" style={{ color: colors.text }}>
                     Build something amazing
                  </h2>
                  <p className="text-lg transition-colors" style={{ color: colors.textMuted }}>
                     This text uses your muted text color. Notice how it contrasts with the background.
                  </p>
               </div>

               {/* Buttons Preview */}
               <div className="flex flex-wrap gap-4 pt-4">
                  <button 
                     className="px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90 shadow-lg flex items-center gap-2"
                     style={{ backgroundColor: colors.primary, color: '#fff' }}
                  >
                     <MousePointerClick className="w-4 h-4" /> Primary Action
                  </button>
                  <button 
                     className="px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90 shadow-lg"
                     style={{ backgroundColor: colors.secondary, color: '#fff' }}
                  >
                     Secondary Action
                  </button>
                  <button 
                     className="px-6 py-3 rounded-lg font-bold transition-all hover:bg-opacity-20 border-2"
                     style={{ borderColor: colors.primary, color: colors.primary, backgroundColor: 'transparent' }}
                  >
                     Outline Button
                  </button>
               </div>

               {/* Cards Preview */}
               <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  <div 
                     className="p-6 rounded-2xl border transition-colors shadow-xl"
                     style={{ backgroundColor: colors.surface, borderColor: colors.textMuted + '40' }}
                  >
                     <div 
                        className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                        style={{ backgroundColor: colors.primary + '20', color: colors.primary }}
                     >
                        <Layers className="w-6 h-6" />
                     </div>
                     <h3 className="text-xl font-bold mb-2" style={{ color: colors.text }}>Feature Card</h3>
                     <p className="text-sm" style={{ color: colors.textMuted }}>
                        This card sits on the surface color. Make sure the surface color stands out from the background.
                     </p>
                  </div>
                  
                  <div className="space-y-4">
                     {/* Alerts */}
                     <div 
                        className="p-4 rounded-xl flex items-start gap-3 border"
                        style={{ backgroundColor: colors.primary + '15', borderColor: colors.primary + '50' }}
                     >
                        <AlertCircle className="w-5 h-5 mt-0.5" style={{ color: colors.primary }} />
                        <div>
                           <h4 className="font-bold text-sm" style={{ color: colors.primary }}>Information Alert</h4>
                           <p className="text-sm mt-1" style={{ color: colors.textMuted }}>Using primary color with low opacity for the background.</p>
                        </div>
                     </div>
                     <div 
                        className="p-4 rounded-xl flex items-start gap-3 border"
                        style={{ backgroundColor: colors.secondary + '15', borderColor: colors.secondary + '50' }}
                     >
                        <CheckCircle2 className="w-5 h-5 mt-0.5" style={{ color: colors.secondary }} />
                        <div>
                           <h4 className="font-bold text-sm" style={{ color: colors.secondary }}>Success State</h4>
                           <p className="text-sm mt-1" style={{ color: colors.textMuted }}>Using secondary color as a semantic success or warning indicator.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
