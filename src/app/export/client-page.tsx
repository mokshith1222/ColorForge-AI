'use client';

import React, { useState } from 'react';
import { Download, Copy, Check, FileCode2, Paintbrush, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useColorStore } from '@/store/useColorStore';

export function ExportClient() {
  const activeColor = useColorStore((state) => state.activeColor) || '#6366f1';
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  // Mock colors for export based on active color
  const palette = {
    primary: activeColor,
    secondary: '#ec4899',
    background: '#0f172a',
    surface: '#1e293b',
    text: '#f8fafc',
  };

  const formats = {
    css: `:root {\n  --primary: ${palette.primary};\n  --secondary: ${palette.secondary};\n  --background: ${palette.background};\n  --surface: ${palette.surface};\n  --text: ${palette.text};\n}`,
    tailwind: `module.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: '${palette.primary}',\n        secondary: '${palette.secondary}',\n        background: '${palette.background}',\n        surface: '${palette.surface}',\n        text: '${palette.text}',\n      }\n    }\n  }\n}`,
    swift: `import SwiftUI\n\nextension Color {\n    static let theme = ColorTheme()\n}\n\nstruct ColorTheme {\n    let primary = Color(hex: "${palette.primary}")\n    let secondary = Color(hex: "${palette.secondary}")\n    let background = Color(hex: "${palette.background}")\n    let surface = Color(hex: "${palette.surface}")\n    let text = Color(hex: "${palette.text}")\n}`,
    android: `<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="primary">${palette.primary}</color>\n    <color name="secondary">${palette.secondary}</color>\n    <color name="background">${palette.background}</color>\n    <color name="surface">${palette.surface}</color>\n    <color name="text">${palette.text}</color>\n</resources>`
  };

  const handleCopy = async (code: string, format: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-[70vh]">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
           <Download className="w-8 h-8 text-primary" /> Export Center
        </h1>
        <p className="text-lg text-muted-foreground">
          Copy your palette code directly into your project in the format you need.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
         {/* CSS */}
         <Card className="glass">
            <CardHeader className="pb-4">
               <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                     <FileCode2 className="w-5 h-5 text-blue-400" /> CSS Variables
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleCopy(formats.css, 'css')}>
                     {copiedFormat === 'css' ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                     Copy CSS
                  </Button>
               </div>
            </CardHeader>
            <CardContent>
               <pre className="bg-[#0d1117] text-[#e6edf3] p-4 rounded-lg overflow-auto h-48 font-mono text-sm border border-white/10 scrollbar-thin">
                  <code>{formats.css}</code>
               </pre>
            </CardContent>
         </Card>

         {/* Tailwind */}
         <Card className="glass">
            <CardHeader className="pb-4">
               <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                     <Paintbrush className="w-5 h-5 text-sky-400" /> Tailwind Config
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleCopy(formats.tailwind, 'tailwind')}>
                     {copiedFormat === 'tailwind' ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                     Copy Config
                  </Button>
               </div>
            </CardHeader>
            <CardContent>
               <pre className="bg-[#0d1117] text-[#e6edf3] p-4 rounded-lg overflow-auto h-48 font-mono text-sm border border-white/10 scrollbar-thin">
                  <code>{formats.tailwind}</code>
               </pre>
            </CardContent>
         </Card>

         {/* iOS Swift */}
         <Card className="glass">
            <CardHeader className="pb-4">
               <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                     <Smartphone className="w-5 h-5 text-orange-400" /> iOS (SwiftUI)
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleCopy(formats.swift, 'swift')}>
                     {copiedFormat === 'swift' ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                     Copy Swift
                  </Button>
               </div>
            </CardHeader>
            <CardContent>
               <pre className="bg-[#0d1117] text-[#e6edf3] p-4 rounded-lg overflow-auto h-48 font-mono text-sm border border-white/10 scrollbar-thin">
                  <code>{formats.swift}</code>
               </pre>
            </CardContent>
         </Card>

         {/* Android XML */}
         <Card className="glass">
            <CardHeader className="pb-4">
               <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                     <Smartphone className="w-5 h-5 text-green-400" /> Android (XML)
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={() => handleCopy(formats.android, 'android')}>
                     {copiedFormat === 'android' ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                     Copy XML
                  </Button>
               </div>
            </CardHeader>
            <CardContent>
               <pre className="bg-[#0d1117] text-[#e6edf3] p-4 rounded-lg overflow-auto h-48 font-mono text-sm border border-white/10 scrollbar-thin">
                  <code>{formats.android}</code>
               </pre>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
