'use client';

import React, { useState } from 'react';
import { Terminal, Code2, Copy, Check, Box } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function DeveloperHubPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    npm: `npm install colorforge-ai`,
    usage: `import { generatePalette, getContrast } from 'colorforge-ai';

// Generate a Tailwind-compatible scale
const scale = generatePalette('#6366F1', 'tailwind');
console.log(scale); // { 50: '#...', 100: '#...', ..., 900: '#...' }

// Check WCAG Accessibility
const isAccessible = getContrast('#FFFFFF', '#000000') >= 4.5;
console.log('Passes AA:', isAccessible);`,
    api: `// POST https://api.colorforge.dev/v1/extract
{
  "image_url": "https://example.com/image.jpg",
  "palette_size": 5
}

// Response
{
  "dominant": "#1A2B3C",
  "palette": ["#1A2B3C", "#E2E8F0", "#4A5568", "#F56565", "#48BB78"]
}`
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Developer Hub</h1>
        <p className="text-lg text-muted-foreground">
          Integrate ColorForge AI into your workflow. Explore our NPM package, APIs, and CLI tools.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
         <div className="lg:col-span-2 space-y-8">
            <Card className="glass border-primary/20">
               <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                     <Box className="h-5 w-5 text-primary" /> NPM Package (Coming Soon)
                  </CardTitle>
                  <CardDescription>Integrate our color utilities directly into your Next.js or React projects.</CardDescription>
               </CardHeader>
               <CardContent className="space-y-6">
                  <div className="space-y-2">
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Install</span>
                        <Button variant="ghost" size="sm" onClick={() => handleCopy(codeExamples.npm)}>
                           {copiedCode === codeExamples.npm ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                     </div>
                     <code className="block bg-black text-green-400 p-4 rounded-lg font-mono text-sm border border-white/10">
                        {codeExamples.npm}
                     </code>
                  </div>

                  <div className="space-y-2">
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Usage</span>
                        <Button variant="ghost" size="sm" onClick={() => handleCopy(codeExamples.usage)}>
                           {copiedCode === codeExamples.usage ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                     </div>
                     <pre className="block bg-[#0d1117] text-[#e6edf3] p-4 rounded-lg font-mono text-sm border border-white/10 overflow-x-auto">
                        <code>{codeExamples.usage}</code>
                     </pre>
                  </div>
               </CardContent>
            </Card>

            <Card className="glass">
               <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                     <Code2 className="h-5 w-5 text-accent" /> REST API (Beta)
                  </CardTitle>
                  <CardDescription>Extract colors from images or generate palettes on the fly using our fast edge API.</CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="space-y-2">
                     <div className="flex justify-between items-center">
                        <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Example Request</span>
                        <Button variant="ghost" size="sm" onClick={() => handleCopy(codeExamples.api)}>
                           {copiedCode === codeExamples.api ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                        </Button>
                     </div>
                     <pre className="block bg-[#0d1117] text-[#e6edf3] p-4 rounded-lg font-mono text-sm border border-white/10 overflow-x-auto">
                        <code>{codeExamples.api}</code>
                     </pre>
                  </div>
               </CardContent>
            </Card>
         </div>

         <div className="space-y-6">
            <Card className="glass">
               <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                     <Terminal className="h-5 w-5" /> CLI Tool
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                     Generate Tailwind configurations directly from your terminal. Connect your Figma tokens and sync them automatically to your codebase.
                  </p>
                  <Button className="w-full" disabled>Coming in v3.0</Button>
               </CardContent>
            </Card>

            <Card className="glass bg-primary/5">
               <CardHeader>
                  <CardTitle>Documentation</CardTitle>
               </CardHeader>
               <CardContent className="space-y-3">
                  <a href="#" className="block p-3 rounded-lg bg-card/50 hover:bg-muted transition-colors border border-border/50 font-medium text-sm">
                     Color Theory Basics
                  </a>
                  <a href="#" className="block p-3 rounded-lg bg-card/50 hover:bg-muted transition-colors border border-border/50 font-medium text-sm">
                     WCAG Compliance Guide
                  </a>
                  <a href="#" className="block p-3 rounded-lg bg-card/50 hover:bg-muted transition-colors border border-border/50 font-medium text-sm">
                     Tailwind CSS Integration
                  </a>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
