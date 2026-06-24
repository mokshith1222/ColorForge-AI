'use client';

import React, { useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Copy, RefreshCw, Download, Check, Settings2, LayoutTemplate } from 'lucide-react';
import { useColorStore } from '@/store/useColorStore';
import { colord } from 'colord';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ThemeGeneratorClient() {
  const activeColor = useColorStore((state) => state.activeColor);
  const [baseColor, setBaseColor] = useState(activeColor);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  useEffect(() => {
    setBaseColor(activeColor);
  }, [activeColor]);

  const generateTheme = (base: string, dark: boolean) => {
    const c = colord(base);
    const bg = dark ? '#0a0a0a' : '#ffffff';
    const surface = dark ? '#1a1a1a' : '#f5f5f5';
    const text = dark ? '#ffffff' : '#000000';
    const textMuted = dark ? '#a3a3a3' : '#525252';
    const border = dark ? '#333333' : '#e5e5e5';
    
    return {
      primary: base,
      secondary: c.rotate(180).toHex(),
      accent: c.rotate(90).toHex(),
      background: bg,
      surface: surface,
      text: text,
      textMuted: textMuted,
      border: border,
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    };
  };

  const theme = generateTheme(baseColor, isDarkMode);

  const handleCopy = async (text: string, format: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  const randomize = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    setBaseColor(randomColor);
  };

  const cssVars = `:root {
  --primary: ${theme.primary};
  --secondary: ${theme.secondary};
  --accent: ${theme.accent};
  --background: ${theme.background};
  --surface: ${theme.surface};
  --text: ${theme.text};
  --text-muted: ${theme.textMuted};
  --border: ${theme.border};
  --success: ${theme.success};
  --warning: ${theme.warning};
  --error: ${theme.error};
  --info: ${theme.info};
}`;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Theme Generator</h1>
        <p className="text-lg text-muted-foreground">
          Generate complete design systems from a single base color. Preview instantly in a mock dashboard.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
        {/* Sidebar Controls */}
        <div className="space-y-8">
          <Card className="glass">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg flex items-center justify-between">
                 <span>Base Settings</span>
                 <Button variant="ghost" size="icon" onClick={randomize}>
                    <RefreshCw className="h-4 w-4" />
                 </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label className="text-xs uppercase tracking-wider font-bold">Base Color</Label>
                    <div className="w-6 h-6 rounded border shadow-sm" style={{ backgroundColor: baseColor }} />
                  </div>
                  <HexColorPicker 
                    color={baseColor} 
                    onChange={setBaseColor}
                    className="!w-full !h-48 rounded-xl shadow-inner"
                  />
                  <Input 
                    value={baseColor.toUpperCase()}
                    onChange={(e) => setBaseColor(e.target.value)}
                    className="font-mono text-center uppercase bg-background/50"
                  />
               </div>

               <div className="space-y-3 pt-4 border-t border-border/50">
                  <Label className="text-xs uppercase tracking-wider font-bold block mb-2">Theme Mode</Label>
                  <div className="flex gap-2">
                     <Button 
                       variant={isDarkMode ? 'secondary' : 'default'} 
                       className="flex-1"
                       onClick={() => setIsDarkMode(false)}
                     >
                        Light
                     </Button>
                     <Button 
                       variant={isDarkMode ? 'default' : 'secondary'} 
                       className="flex-1"
                       onClick={() => setIsDarkMode(true)}
                     >
                        Dark
                     </Button>
                  </div>
               </div>
            </CardContent>
          </Card>

          <Card className="glass">
             <CardHeader className="pb-4">
                <CardTitle className="text-lg">Export Theme</CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
                <Button className="w-full justify-between" variant="outline" onClick={() => handleCopy(cssVars, 'css')}>
                   CSS Variables
                   {copiedFormat === 'css' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                </Button>
                <Button className="w-full justify-between" variant="outline" onClick={() => handleCopy(JSON.stringify(theme, null, 2), 'json')}>
                   JSON Object
                   {copiedFormat === 'json' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                </Button>
                <Button className="w-full justify-between" variant="secondary" onClick={() => handleCopy(cssVars, 'css')}>
                   <Download className="mr-2 h-4 w-4" /> Download .css
                </Button>
             </CardContent>
          </Card>
        </div>

        {/* Dashboard Preview */}
        <div className="space-y-8">
           <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                 <LayoutTemplate className="h-6 w-6 text-primary" /> Live UI Sandbox
              </h2>
           </div>

           <div 
             className="w-full min-h-[600px] rounded-2xl shadow-2xl border transition-colors duration-500 overflow-hidden flex flex-col"
             style={{ backgroundColor: theme.background, borderColor: theme.border, color: theme.text }}
           >
              {/* Dashboard Header */}
              <div className="h-16 border-b px-6 flex items-center justify-between shrink-0" style={{ borderColor: theme.border, backgroundColor: theme.surface }}>
                 <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center text-white font-bold" style={{ backgroundColor: theme.primary }}>
                       TF
                    </div>
                    <span className="font-bold tracking-tight">ThemeForge</span>
                 </div>
                 <div className="flex items-center gap-4">
                    <div className="h-8 w-64 rounded-md hidden md:block" style={{ backgroundColor: theme.background, border: `1px solid ${theme.border}` }} />
                    <div className="h-8 w-8 rounded-full border-2" style={{ borderColor: theme.primary, backgroundColor: theme.secondary }} />
                 </div>
              </div>

              {/* Dashboard Body */}
              <div className="flex-1 flex flex-col md:flex-row">
                 {/* Sidebar */}
                 <div className="w-full md:w-64 border-r p-4 space-y-2 shrink-0 hidden md:block" style={{ borderColor: theme.border, backgroundColor: theme.surface }}>
                    <div className="px-4 py-2 rounded-md font-medium text-sm flex items-center gap-3" style={{ backgroundColor: theme.primary, color: '#fff' }}>
                       <Settings2 className="h-4 w-4" /> Overview
                    </div>
                    {['Analytics', 'Customers', 'Products', 'Settings'].map(item => (
                       <div key={item} className="px-4 py-2 rounded-md font-medium text-sm cursor-pointer transition-colors" style={{ color: theme.textMuted }}>
                          {item}
                       </div>
                    ))}
                 </div>

                 {/* Main Content */}
                 <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                    <div className="flex justify-between items-end mb-8">
                       <div>
                          <h3 className="text-2xl font-bold mb-1">Welcome back</h3>
                          <p className="text-sm" style={{ color: theme.textMuted }}>Here's what's happening with your store today.</p>
                       </div>
                       <Button style={{ backgroundColor: theme.primary, color: '#fff' }}>Create Report</Button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                       {[
                          { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', color: theme.success },
                          { label: 'Subscriptions', value: '+2350', change: '+180.1%', color: theme.success },
                          { label: 'Sales', value: '+12,234', change: '+19%', color: theme.success },
                          { label: 'Active Now', value: '+573', change: '-201', color: theme.error }
                       ].map((stat, i) => (
                          <div key={i} className="p-5 rounded-xl border shadow-sm" style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
                             <div className="text-sm font-medium mb-2" style={{ color: theme.textMuted }}>{stat.label}</div>
                             <div className="text-2xl font-bold mb-1">{stat.value}</div>
                             <div className="text-xs font-medium" style={{ color: stat.color }}>{stat.change} from last month</div>
                          </div>
                       ))}
                    </div>

                    {/* Charts & Activity */}
                    <div className="grid md:grid-cols-3 gap-6">
                       <div className="md:col-span-2 p-6 rounded-xl border shadow-sm" style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
                          <h4 className="font-bold mb-6">Revenue Overview</h4>
                          <div className="w-full h-48 flex items-end justify-between gap-2">
                             {[40, 70, 45, 90, 65, 55, 80, 100, 60, 40].map((h, i) => (
                                <div key={i} className="w-full rounded-t-sm transition-all duration-500" style={{ height: `${h}%`, backgroundColor: i === 7 ? theme.accent : theme.primary, opacity: i === 7 ? 1 : 0.7 }} />
                             ))}
                          </div>
                       </div>
                       <div className="p-6 rounded-xl border shadow-sm" style={{ backgroundColor: theme.surface, borderColor: theme.border }}>
                          <h4 className="font-bold mb-6">Recent Sales</h4>
                          <div className="space-y-6">
                             {[1, 2, 3, 4].map(i => (
                                <div key={i} className="flex items-center gap-4">
                                   <div className="w-10 h-10 rounded-full border-2" style={{ borderColor: theme.secondary }} />
                                   <div className="flex-1">
                                      <div className="text-sm font-bold">User {i}</div>
                                      <div className="text-xs" style={{ color: theme.textMuted }}>user{i}@mokshithnaik932.gmail.com</div>
                                   </div>
                                   <div className="font-bold text-sm">+$299.00</div>
                                </div>
                             ))}
                          </div>
                       </div>
                    </div>

                    {/* Alert */}
                    <div className="mt-8 p-4 rounded-lg border flex gap-3 items-start" style={{ backgroundColor: `${theme.info}15`, borderColor: `${theme.info}50` }}>
                       <div className="p-1 rounded-full text-white" style={{ backgroundColor: theme.info }}>
                          <Check className="h-4 w-4" />
                       </div>
                       <div>
                          <h5 className="font-bold text-sm mb-1" style={{ color: theme.info }}>System Update Complete</h5>
                          <p className="text-sm" style={{ color: theme.textMuted }}>All services are running normally. Theme updates have been applied successfully.</p>
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
