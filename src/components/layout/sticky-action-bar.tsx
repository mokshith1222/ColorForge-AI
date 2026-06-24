'use client';

import { useColorStore } from '@/store/useColorStore';
import { Button } from '@/components/ui/button';
import { Copy, Save, Share2, Download, History, Check } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function StickyActionBar() {
  const activeColor = useColorStore((state) => state.activeColor);
  const saveColor = useColorStore((state) => state.saveColor);
  const [copied, setCopied] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const recentColors = useColorStore((state) => state.recentColors);
  const setActiveColor = useColorStore((state) => state.setActiveColor);

  const [copiedShare, setCopiedShare] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(activeColor);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    saveColor(activeColor);
  };

  const handleDownload = () => {
    // Generate an SVG swatch of the active color
    const isDark = activeColor ? (parseInt(activeColor.slice(1, 3), 16) * 0.299 + parseInt(activeColor.slice(3, 5), 16) * 0.587 + parseInt(activeColor.slice(5, 7), 16) * 0.114) < 128 : false;
    const textColor = isDark ? '#ffffff' : '#000000';
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
      <rect width="100%" height="100%" fill="${activeColor}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="48" font-weight="bold" fill="${textColor}">${activeColor.toUpperCase()}</text>
    </svg>`;
    
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `colorforge-${activeColor.replace('#', '')}.svg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('c', activeColor.replace('#', ''));
      await navigator.clipboard.writeText(url.toString());
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2000);
    } catch (err) {
      console.error("Could not copy share link", err);
    }
  };

  // Only show the action bar if there's an active color
  if (!activeColor) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
    >
      <AnimatePresence>
        {showHistory && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="mb-4 bg-card/90 backdrop-blur-md border border-border p-3 rounded-xl shadow-2xl flex gap-2 overflow-x-auto max-w-[90vw] md:max-w-md"
          >
            {recentColors.slice(0, 10).map((c: any) => {
              const colorStr = typeof c === 'string' ? c : (c.hex || '');
              return (
              <button
                key={colorStr}
                onClick={() => setActiveColor(colorStr)}
                className="w-8 h-8 rounded-full shrink-0 border border-white/10 shadow-sm transition-transform hover:scale-110 hover:shadow-md"
                style={{ backgroundColor: colorStr }}
                title={colorStr}
              />
            )})}
            {recentColors.length === 0 && (
              <span className="text-sm text-muted-foreground px-2 py-1">No recent colors</span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="glass rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl border-white/10 dark:border-white/5 bg-background/80 dark:bg-black/60">
        <div className="flex items-center gap-3 px-3 border-r border-border/50">
          <div
            className="w-6 h-6 rounded-full shadow-inner border border-white/20"
            style={{ backgroundColor: activeColor }}
          />
          <span className="font-mono text-sm font-semibold tracking-wider uppercase w-20">
            {activeColor}
          </span>
        </div>

        <div className="flex items-center gap-1 px-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full hover:bg-muted/80"
            onClick={handleCopy}
            title="Copy Hex"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full hover:bg-muted/80"
            onClick={handleSave}
            title="Save Color"
          >
            <Save className="h-4 w-4" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full hover:bg-muted/80"
            onClick={handleDownload}
            title="Download Swatch SVG"
          >
            <Download className="h-4 w-4" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full hover:bg-muted/80"
            onClick={handleShare}
            title="Copy Shareable Link"
          >
            {copiedShare ? <Check className="h-4 w-4 text-green-500" /> : <Share2 className="h-4 w-4" />}
          </Button>

          <div className="w-px h-6 bg-border/50 mx-1" />

          <Button
            variant="ghost"
            size="icon"
            className={`h-9 w-9 rounded-full hover:bg-muted/80 ${showHistory ? 'bg-muted' : ''}`}
            onClick={() => setShowHistory(!showHistory)}
            title="Recent History"
          >
            <History className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
