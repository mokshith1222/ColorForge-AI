'use client';

import React from 'react';
import { Bookmark, LayoutGrid, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useColorStore } from '@/store/useColorStore';

export default function CollectionsPage() {
  const [mounted, setMounted] = React.useState(false);
  const savedColors = useColorStore((state) => state.savedColors);
  const savedPalettes = useColorStore((state) => state.savedPalettes);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Your Collections</h1>
        <p className="text-lg text-muted-foreground">
          Manage your saved colors, palettes, gradients, and themes across all your projects.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
           <Card className="glass">
              <CardHeader className="pb-4 border-b border-border/50 flex flex-row items-center justify-between">
                 <CardTitle className="text-xl flex items-center gap-2">
                    <Heart className="h-5 w-5 text-destructive" /> Saved Colors
                 </CardTitle>
                 <span className="text-sm text-muted-foreground font-bold bg-muted px-2 py-1 rounded-md">{savedColors.length} items</span>
              </CardHeader>
              <CardContent className="pt-6">
                 {savedColors.length > 0 ? (
                   <div className="flex flex-wrap gap-3">
                      {savedColors.map((color, i) => (
                        <div key={i} className="group relative w-16 h-16 rounded-xl shadow-sm hover:scale-110 transition-transform cursor-pointer" style={{ backgroundColor: color }}>
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-xl">
                              <span className="bg-background/90 text-foreground px-2 py-1 rounded-md text-[10px] font-bold shadow-lg">
                                 {color.toUpperCase()}
                              </span>
                           </div>
                        </div>
                      ))}
                   </div>
                 ) : (
                   <div className="text-center py-12 text-muted-foreground">
                      <Bookmark className="h-12 w-12 mx-auto mb-4 opacity-20" />
                      <p>You haven't saved any colors yet.</p>
                      <p className="text-sm mt-1">Click the "Save" button on any tool to add colors here.</p>
                   </div>
                 )}
              </CardContent>
           </Card>

           <Card className="glass">
              <CardHeader className="pb-4 border-b border-border/50 flex flex-row items-center justify-between">
                 <CardTitle className="text-xl flex items-center gap-2">
                    <LayoutGrid className="h-5 w-5 text-primary" /> Saved Palettes
                 </CardTitle>
                 <span className="text-sm text-muted-foreground font-bold bg-muted px-2 py-1 rounded-md">{savedPalettes.length} items</span>
              </CardHeader>
              <CardContent className="pt-6">
                 {savedPalettes.length > 0 ? (
                   <div className="grid gap-4 sm:grid-cols-2">
                      {savedPalettes.map((palette, i) => (
                        <div key={i} className="group relative rounded-xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                           <div className="flex h-20 w-full">
                              {palette.map((color, j) => (
                                 <div key={j} className="flex-1" style={{ backgroundColor: color }} />
                              ))}
                           </div>
                           <div className="p-3 bg-card flex justify-between items-center">
                              <span className="text-xs font-mono text-muted-foreground">{palette.length} Colors</span>
                              <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-destructive hover:text-destructive hover:bg-destructive/10" onClick={() => {
                                 // To remove, we need the removeSavedPalette action
                                 useColorStore.getState().removeSavedPalette(palette.join(','));
                              }}>
                                 Remove
                              </Button>
                           </div>
                        </div>
                      ))}
                   </div>
                 ) : (
                   <div className="text-center py-12 text-muted-foreground">
                      <LayoutGrid className="h-12 w-12 mx-auto mb-4 opacity-20" />
                      <p>You haven't saved any palettes yet.</p>
                      <p className="text-sm mt-1">Generate and save palettes to access them here.</p>
                   </div>
                 )}
              </CardContent>
           </Card>
        </div>

        <div className="space-y-6">
           <Card className="glass bg-primary/5 border-primary/20">
              <CardHeader>
                 <CardTitle>Pro Tip</CardTitle>
                 <CardDescription>Organize your work</CardDescription>
              </CardHeader>
              <CardContent>
                 <p className="text-sm text-muted-foreground leading-relaxed">
                    Collections are stored locally in your browser. If you clear your site data or use a different device, your collections will not sync. 
                    <br/><br/>
                    In the future, we'll be adding cloud sync so you can access your collections anywhere.
                 </p>
              </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}
