'use client';

import React from 'react';
import { BarChart3, Activity, Users, Globe2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Global Color Analytics</h1>
        <p className="text-lg text-muted-foreground">
          See what colors the world is designing with right now. These statistics are aggregated anonymously across all ColorForge AI users.
        </p>
      </div>

      {/* Hero Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
         <Card className="glass">
            <CardContent className="p-6">
               <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                     <Globe2 className="h-6 w-6" />
                  </div>
                  <div>
                     <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Palettes Generated</p>
                     <h3 className="text-3xl font-bold mt-1">2.4M</h3>
                  </div>
               </div>
            </CardContent>
         </Card>
         <Card className="glass">
            <CardContent className="p-6">
               <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                     <Activity className="h-6 w-6" />
                  </div>
                  <div>
                     <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Images Extracted</p>
                     <h3 className="text-3xl font-bold mt-1">842K</h3>
                  </div>
               </div>
            </CardContent>
         </Card>
         <Card className="glass">
            <CardContent className="p-6">
               <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center">
                     <Users className="h-6 w-6" />
                  </div>
                  <div>
                     <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Creators</p>
                     <h3 className="text-3xl font-bold mt-1">15.2K</h3>
                  </div>
               </div>
            </CardContent>
         </Card>
         <Card className="glass">
            <CardContent className="p-6">
               <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                     <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                     <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">API Requests (30d)</p>
                     <h3 className="text-3xl font-bold mt-1">12M</h3>
                  </div>
               </div>
            </CardContent>
         </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
         <div className="space-y-8">
            <Card className="glass h-full">
               <CardHeader>
                  <CardTitle className="text-xl">Most Copied Colors Today</CardTitle>
                  <CardDescription>Real-time data of the exact HEX codes being used across the globe.</CardDescription>
               </CardHeader>
               <CardContent>
                  <div className="space-y-4">
                     {[
                        { hex: '#0F172A', name: 'Slate 900', count: '14,231' },
                        { hex: '#3B82F6', name: 'Blue 500', count: '12,845' },
                        { hex: '#10B981', name: 'Emerald 500', count: '9,430' },
                        { hex: '#F43F5E', name: 'Rose 500', count: '8,211' },
                        { hex: '#8B5CF6', name: 'Violet 500', count: '7,902' },
                        { hex: '#F59E0B', name: 'Amber 500', count: '6,104' }
                     ].map((color, i) => (
                        <div key={color.hex} className="flex items-center justify-between p-4 rounded-xl border border-border/50 hover:bg-muted/50 transition-colors">
                           <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-lg shadow-sm" style={{ backgroundColor: color.hex }} />
                              <div>
                                 <div className="font-bold text-lg">{color.hex}</div>
                                 <div className="text-sm text-muted-foreground">{color.name}</div>
                              </div>
                           </div>
                           <div className="text-right">
                              <div className="font-bold text-lg">{color.count}</div>
                              <div className="text-xs uppercase tracking-widest text-muted-foreground">Copies</div>
                           </div>
                        </div>
                     ))}
                  </div>
               </CardContent>
            </Card>
         </div>

         <div className="space-y-8">
            <Card className="glass">
               <CardHeader>
                  <CardTitle className="text-xl">Trending Hues</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="space-y-6">
                     <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                           <span className="font-bold">Blues & Teals</span>
                           <span className="text-muted-foreground">42%</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
                           <div className="h-full bg-blue-500 rounded-full" style={{ width: '42%' }} />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                           <span className="font-bold">Monochrome</span>
                           <span className="text-muted-foreground">28%</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
                           <div className="h-full bg-slate-500 rounded-full" style={{ width: '28%' }} />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                           <span className="font-bold">Warm Tones (Reds/Oranges)</span>
                           <span className="text-muted-foreground">18%</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
                           <div className="h-full bg-orange-500 rounded-full" style={{ width: '18%' }} />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                           <span className="font-bold">Purples & Pinks</span>
                           <span className="text-muted-foreground">12%</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-muted overflow-hidden">
                           <div className="h-full bg-purple-500 rounded-full" style={{ width: '12%' }} />
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>

            <Card className="glass bg-accent/5 border-accent/20">
               <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                     <Sparkles className="h-6 w-6 text-accent shrink-0 mt-1" />
                     <div>
                        <h4 className="font-bold mb-1">Join the AI Beta</h4>
                        <p className="text-sm text-muted-foreground mb-4">Want access to deeper demographic insights and AI-driven color predictions?</p>
                        <Button variant="secondary" className="w-full">Request Access</Button>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}
