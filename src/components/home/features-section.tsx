import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, RefreshCcw, Maximize, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    title: 'Scroll Animations',
    description: 'Colors animate as you scroll',
    icon: RefreshCcw,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20'
  },
  {
    title: 'Interactive Elements',
    description: 'Engaging & micro-interactions',
    icon: MousePointerClick,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20'
  },
  {
    title: 'Dynamic Backgrounds',
    description: 'Real-time gradient shifts',
    icon: Maximize,
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20'
  },
  {
    title: 'Smooth & Fluid',
    description: '60fps animations',
    icon: Zap,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20'
  }
];

export function FeaturesSection() {
  return (
    <section className="w-full py-24 bg-background relative z-10 border-t border-border/50 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          <SparklesIcon className="w-3 h-3 mr-2" /> Scroll to Explore UI
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Colors That <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Move With You</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
          As you scroll, vibrant colors, gradients, and interactive elements animate into view — a truly immersive color experience.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} className="glass hover:-translate-y-2 transition-all duration-300 group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${feature.bg} ${feature.color} ${feature.border} border transition-colors group-hover:scale-110 duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
