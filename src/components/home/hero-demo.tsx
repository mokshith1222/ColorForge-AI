'use client';

import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import { useColorStore } from '@/store/useColorStore';
import { generateTailwindScale } from '@/lib/color-utils';
import { useRouter } from 'next/navigation';

export function HeroDemo() {
  const [demoColor, setDemoColor] = useState('#EC4899'); // Start with Pink
  const setActiveColor = useColorStore((state) => state.setActiveColor);
  const router = useRouter();

  const predefinedColors = ['#6366F1', '#8B5CF6', '#EC4899', '#06B6D4', '#10B981', '#F59E0B'];
  
  // Dynamically generate a real Tailwind scale
  const scale = useMemo(() => generateTailwindScale(demoColor), [demoColor]);

  return (
    <div className="w-full max-w-lg mx-auto relative perspective-1000">
      <motion.div 
        className="glass rounded-2xl p-6 shadow-2xl relative z-10 animate-float"
        initial={{ rotateY: -10, rotateX: 5 }}
        whileHover={{ rotateY: 0, rotateX: 0, transition: { duration: 0.3 } }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground font-mono font-medium tracking-widest uppercase">Live Demo</span>
        </div>

        {/* Picker Simulation */}
        <div className="mb-6 space-y-4">
          <div 
            className="w-full h-32 rounded-xl shadow-inner transition-colors duration-500"
            style={{ backgroundColor: demoColor }}
          />
          <div className="flex justify-between gap-2">
            {predefinedColors.map((c) => (
              <button
                key={c}
                onClick={() => setDemoColor(c)}
                className={`w-10 h-10 rounded-lg shadow-sm transition-transform hover:scale-110 ${demoColor === c ? 'ring-2 ring-foreground ring-offset-2 ring-offset-background' : ''}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        {/* Gradient Preview */}
        <div className="mb-6">
          <div className="text-sm font-medium mb-2">Generated Gradient</div>
          <div 
            className="w-full h-16 rounded-xl transition-all duration-500"
            style={{ backgroundImage: `linear-gradient(to right, ${demoColor}, transparent)` }}
          />
        </div>

        {/* Tailwind Scale Preview */}
        <div>
          <div className="text-sm font-medium mb-2">Tailwind Scale</div>
          <div className="flex h-8 w-full rounded-lg overflow-hidden shadow-inner">
            {[900, 800, 700, 600, 500, 400, 300, 200, 100].map((weight) => (
              <div 
                key={weight} 
                className="flex-1 transition-colors duration-500"
                style={{ backgroundColor: scale[weight as keyof typeof scale] }}
              />
            ))}
          </div>
        </div>
        
        <button 
          className="w-full mt-6 py-3 rounded-xl bg-foreground text-background font-bold text-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
          onClick={() => {
            setActiveColor(demoColor);
            router.push('/color-picker');
          }}
        >
          Use This Color
        </button>
      </motion.div>
      
      {/* Decorative background elements behind the demo */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/30 rounded-full blur-3xl -z-10 mix-blend-screen" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/30 rounded-full blur-3xl -z-10 mix-blend-screen" />
    </div>
  );
}
