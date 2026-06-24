'use client';

import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/theme-provider';
import { 
  Palette, Layers, Wand2, Monitor, Eye, 
  Image as ImageIcon, BookOpen, TrendingUp, Code,
  Sun, Moon, Laptop, RefreshCcw
} from 'lucide-react';
import { useColorStore } from '@/store/useColorStore';

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();
  const recentColors = useColorStore((state) => state.recentColors);
  const setActiveColor = useColorStore((state) => state.setActiveColor);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 hover:bg-muted rounded-md border border-border transition-colors"
      >
        <span className="hidden lg:inline-flex">Search or jump to...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in-0"
      >
        <div className="w-full max-w-2xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col">
          <Command className="w-full flex flex-col">
            <div className="flex items-center border-b border-border px-3">
              <Command.Input 
                placeholder="Type a command or search..." 
                className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            
            <Command.List className="max-h-[60vh] overflow-y-auto p-2">
              <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                No results found.
              </Command.Empty>

              <Command.Group heading="Tools" className="text-xs font-medium text-muted-foreground px-2 py-1.5">
                {[
                  { icon: Palette, name: 'Color Picker', href: '/color-picker' },
                  { icon: Layers, name: 'Palette Generator', href: '/color-palette-generator' },
                  { icon: Wand2, name: 'Gradient Generator', href: '/gradient-generator' },
                  { icon: Monitor, name: 'Tailwind Generator', href: '/tailwind-color-generator' },
                  { icon: Eye, name: 'Accessibility Checker', href: '/accessibility-checker' },
                  { icon: ImageIcon, name: 'Image Color Extractor', href: '/image-color-extractor' },
                  { icon: BookOpen, name: 'Brand Colors', href: '/brand-colors' },
                ].map((tool) => (
                  <Command.Item
                    key={tool.href}
                    onSelect={() => runCommand(() => router.push(tool.href))}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                  >
                    <tool.icon className="h-4 w-4" />
                    {tool.name}
                  </Command.Item>
                ))}
              </Command.Group>

              <Command.Group heading="Hubs" className="text-xs font-medium text-muted-foreground px-2 py-1.5 mt-2">
                {[
                  { icon: Layers, name: 'Collections', href: '/collections' },
                  { icon: TrendingUp, name: 'Trends', href: '/trends' },
                  { icon: Code, name: 'Developer Hub', href: '/developer-hub' },
                ].map((hub) => (
                  <Command.Item
                    key={hub.href}
                    onSelect={() => runCommand(() => router.push(hub.href))}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                  >
                    <hub.icon className="h-4 w-4" />
                    {hub.name}
                  </Command.Item>
                ))}
              </Command.Group>

              <Command.Group heading="Converters" className="text-xs font-medium text-muted-foreground px-2 py-1.5 mt-2">
                {[
                  { icon: RefreshCcw, name: 'HEX to RGB Converter', href: '/hex-to-rgb' },
                  { icon: RefreshCcw, name: 'RGB to HEX Converter', href: '/rgb-to-hex' },
                  { icon: RefreshCcw, name: 'HSL Converter', href: '/hsl-converter' },
                ].map((converter) => (
                  <Command.Item
                    key={converter.href}
                    onSelect={() => runCommand(() => router.push(converter.href))}
                    className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                  >
                    <converter.icon className="h-4 w-4" />
                    {converter.name}
                  </Command.Item>
                ))}
              </Command.Group>

              {recentColors.length > 0 && (
                <Command.Group heading="Recent Colors" className="text-xs font-medium text-muted-foreground px-2 py-1.5 mt-2">
                  {recentColors.slice(0, 5).map((color: any) => {
                    const colorStr = typeof color === 'string' ? color : (color.hex || '');
                    if (!colorStr) return null;
                    return (
                    <Command.Item
                      key={colorStr}
                      onSelect={() => runCommand(() => {
                        setActiveColor(colorStr);
                        router.push('/color-picker');
                      })}
                      className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                    >
                      <div 
                        className="h-4 w-4 rounded-full border border-border" 
                        style={{ backgroundColor: colorStr }}
                      />
                      {colorStr.toUpperCase()}
                    </Command.Item>
                  )})}
                </Command.Group>
              )}

              <Command.Group heading="Theme" className="text-xs font-medium text-muted-foreground px-2 py-1.5 mt-2">
                <Command.Item
                  onSelect={() => runCommand(() => setTheme('light'))}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                >
                  <Sun className="h-4 w-4" /> Light
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => setTheme('dark'))}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                >
                  <Moon className="h-4 w-4" /> Dark
                </Command.Item>
                <Command.Item
                  onSelect={() => runCommand(() => setTheme('system'))}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                >
                  <Laptop className="h-4 w-4" /> System
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </div>
      </Command.Dialog>
    </>
  );
}
