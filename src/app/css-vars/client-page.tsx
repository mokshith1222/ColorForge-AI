'use client';

import React, { useState } from 'react';
import { Settings, Plus, Trash2, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useColorStore } from '@/store/useColorStore';

interface CssVariable {
  id: string;
  name: string;
  value: string;
}

export function CssVarsClient() {
  const activeColor = useColorStore((state) => state.activeColor) || '#6366f1';
  const [copied, setCopied] = useState(false);

  const [variables, setVariables] = useState<CssVariable[]>([
    { id: '1', name: 'primary', value: activeColor },
    { id: '2', name: 'secondary', value: '#ec4899' },
    { id: '3', name: 'background', value: '#0f172a' },
    { id: '4', name: 'text', value: '#f8fafc' },
  ]);

  const addVariable = () => {
    setVariables([
      ...variables,
      { id: Date.now().toString(), name: `new-color-${variables.length + 1}`, value: '#ffffff' }
    ]);
  };

  const updateVariable = (id: string, field: 'name' | 'value', newValue: string) => {
    setVariables(variables.map(v => v.id === id ? { ...v, [field]: newValue } : v));
  };

  const removeVariable = (id: string) => {
    setVariables(variables.filter(v => v.id !== id));
  };

  const generateCSS = () => {
    const lines = variables.map(v => `  --${v.name.replace(/[^a-zA-Z0-9-]/g, '-')}: ${v.value};`);
    return `:root {\n${lines.join('\n')}\n}`;
  };

  const cssOutput = generateCSS();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12 min-h-[70vh]">
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <h1 className="mb-4 text-4xl font-bold tracking-tight flex items-center justify-center gap-3">
           <Settings className="w-8 h-8 text-primary" /> CSS Variables
        </h1>
        <p className="text-lg text-muted-foreground">
          Map your colors to variable names and instantly generate a ready-to-copy :root block.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-8 max-w-6xl mx-auto">
         {/* Builder */}
         <Card className="glass h-fit">
            <CardHeader className="flex flex-row justify-between items-center">
               <CardTitle className="text-lg">Variable Builder</CardTitle>
               <Button onClick={addVariable} size="sm" variant="secondary">
                  <Plus className="w-4 h-4 mr-2" /> Add Variable
               </Button>
            </CardHeader>
            <CardContent className="space-y-4">
               {variables.map((v) => (
                  <div key={v.id} className="flex items-center gap-4 bg-background/50 p-2 rounded-lg border">
                     <div className="flex items-center gap-2 px-3 text-muted-foreground font-mono">
                        --
                     </div>
                     <Input 
                        value={v.name}
                        onChange={(e) => updateVariable(v.id, 'name', e.target.value)}
                        placeholder="variable-name"
                        className="font-mono border-0 bg-transparent focus-visible:ring-1"
                     />
                     <div className="w-px h-8 bg-border mx-2" />
                     <div className="flex items-center gap-2 flex-1">
                        <div className="w-8 h-8 rounded border shadow-inner shrink-0" style={{ backgroundColor: v.value }} />
                        <Input 
                           value={v.value}
                           onChange={(e) => updateVariable(v.id, 'value', e.target.value)}
                           className="font-mono border-0 bg-transparent focus-visible:ring-1"
                        />
                     </div>
                     <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => removeVariable(v.id)}
                        className="text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
                     >
                        <Trash2 className="w-4 h-4" />
                     </Button>
                  </div>
               ))}
               
               {variables.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                     No variables defined. Click "Add Variable" to start.
                  </div>
               )}
            </CardContent>
         </Card>

         {/* Output */}
         <Card className="glass h-fit sticky top-24">
            <CardHeader className="flex flex-row justify-between items-center pb-4">
               <CardTitle className="text-lg">Output</CardTitle>
               <Button variant="default" size="sm" onClick={handleCopy} disabled={variables.length === 0}>
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  Copy CSS
               </Button>
            </CardHeader>
            <CardContent>
               <pre className="bg-[#0d1117] text-[#e6edf3] p-4 rounded-lg overflow-auto font-mono text-sm border border-white/10 shadow-inner">
                  <code>{cssOutput}</code>
               </pre>
            </CardContent>
         </Card>
      </div>
    </div>
  );
}
