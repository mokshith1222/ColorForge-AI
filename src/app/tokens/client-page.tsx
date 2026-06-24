'use client';

import React, { useState } from 'react';
import { Code2, Copy, Check, FileJson } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useColorStore } from '@/store/useColorStore';

export function TokensClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  const [baseColor, setBaseColor] = useState(activeColor || '#3b82f6');
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const tokens = {
    color: {
      primary: {
        base: { value: baseColor, type: "color" },
        hover: { value: "#2563eb", type: "color" },
        active: { value: "#1d4ed8", type: "color" }
      },
      surface: {
        background: { value: "#ffffff", type: "color" },
        paper: { value: "#f8fafc", type: "color" }
      },
      text: {
        primary: { value: "#0f172a", type: "color" },
        secondary: { value: "#64748b", type: "color" }
      }
    }
  };

  const styleDictionaryJson = JSON.stringify(tokens, null, 2);
  
  const w3cJson = JSON.stringify({
     "color": {
        "primary": {
           "base": { "$value": baseColor, "$type": "color" },
           "hover": { "$value": "#2563eb", "$type": "color" }
        }
     }
  }, null, 2);

  const handleCopy = async (code: string, format: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
           <Code2 className="w-8 h-8 text-primary" /> Design Tokens
        </h1>
        <p className="text-lg text-muted-foreground">
          Convert your colors into standardized JSON tokens for use in Style Dictionary or Figma.
        </p>
      </div>

      <div className="grid lg:grid-cols-[300px_1fr] gap-8 max-w-6xl mx-auto">
         {/* Configuration */}
         <div className="space-y-6">
            <Card className="glass">
               <CardHeader>
                  <CardTitle className="text-lg">Token Configuration</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  <div className="space-y-2">
                     <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Primary Color Value</label>
                     <div className="flex gap-2">
                        <div className="w-10 h-10 rounded shadow-inner border flex-shrink-0" style={{ backgroundColor: baseColor }} />
                        <Input 
                           value={baseColor}
                           onChange={(e) => setBaseColor(e.target.value)}
                           className="font-mono bg-background/50"
                        />
                     </div>
                  </div>
                  <p className="text-xs text-muted-foreground pt-4">
                     In a full design system, this would automatically generate scales and map them to semantic aliases.
                  </p>
               </CardContent>
            </Card>
         </div>

         {/* Outputs */}
         <div className="space-y-6">
            <Card className="glass">
               <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                     <CardTitle className="text-lg flex items-center gap-2">
                        <FileJson className="w-5 h-5 text-yellow-500" /> Style Dictionary Format
                     </CardTitle>
                     <Button variant="outline" size="sm" onClick={() => handleCopy(styleDictionaryJson, 'sd')}>
                        {copiedFormat === 'sd' ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                        Copy JSON
                     </Button>
                  </div>
               </CardHeader>
               <CardContent>
                  <pre className="bg-[#0d1117] text-[#e6edf3] p-4 rounded-lg overflow-auto max-h-[400px] font-mono text-sm border border-white/10 scrollbar-thin scrollbar-thumb-white/20">
                     <code>{styleDictionaryJson}</code>
                  </pre>
               </CardContent>
            </Card>

            <Card className="glass opacity-75">
               <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                     <CardTitle className="text-lg flex items-center gap-2">
                        <FileJson className="w-5 h-5 text-blue-500" /> W3C Draft Format
                     </CardTitle>
                     <Button variant="outline" size="sm" onClick={() => handleCopy(w3cJson, 'w3c')}>
                        {copiedFormat === 'w3c' ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
                        Copy JSON
                     </Button>
                  </div>
               </CardHeader>
               <CardContent>
                  <pre className="bg-[#0d1117] text-[#e6edf3] p-4 rounded-lg overflow-auto font-mono text-sm border border-white/10 scrollbar-thin scrollbar-thumb-white/20">
                     <code>{w3cJson}</code>
                  </pre>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
