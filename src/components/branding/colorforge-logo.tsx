'use client';

import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

export type LogoVariant = 'full' | 'icon' | 'monochrome';

interface ColorForgeLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: LogoVariant;
  animated?: boolean;
  iconClassName?: string;
  wordmarkClassName?: string;
  badgeClassName?: string;
  isSplash?: boolean;
}

export function ColorForgeLogo({
  variant = 'full',
  animated = false,
  className,
  iconClassName,
  wordmarkClassName,
  badgeClassName,
  isSplash = false,
  ...props
}: ColorForgeLogoProps) {
  const { resolvedTheme } = useTheme();
  const id = useId();
  const isMonochrome = variant === 'monochrome';

  // Animation Variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const particleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      opacity: [0, 1, 0.8, 1],
      transition: { delay: 1 + (i * 0.05), duration: 0.5 }
    })
  };

  const IconSVG = (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-10 h-10 shrink-0 drop-shadow-xl", iconClassName)}
    >
      <defs>
        {/* Primary Flow Gradient */}
        <linearGradient id={`grad1-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isMonochrome ? 'currentColor' : '#00E5FF'} />
          <stop offset="50%" stopColor={isMonochrome ? 'currentColor' : '#3300FF'} />
          <stop offset="100%" stopColor={isMonochrome ? 'currentColor' : '#BD00FF'} />
        </linearGradient>
        
        {/* Secondary Flow Gradient */}
        <linearGradient id={`grad2-${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={isMonochrome ? 'currentColor' : '#FF0055'} />
          <stop offset="50%" stopColor={isMonochrome ? 'currentColor' : '#FF7A2A'} />
          <stop offset="100%" stopColor={isMonochrome ? 'currentColor' : '#FFC92A'} />
        </linearGradient>

        <filter id={`glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main C Body - Back Layer */}
      <motion.path
        d="M75 25C65 15 50 10 35 15C15 22 5 45 10 65C15 85 35 95 55 90C65 87 72 80 78 72"
        stroke={`url(#grad1-${id})`}
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
        filter={isMonochrome ? undefined : `url(#glow-${id})`}
        initial={animated ? "hidden" : "visible"}
        animate="visible"
        variants={pathVariants}
      />

      {/* Inner C Body - Front Flow */}
      <motion.path
        d="M68 32C60 25 48 22 38 28C26 35 20 50 25 62C30 75 45 80 55 75C62 71 68 65 72 58"
        stroke={`url(#grad2-${id})`}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        initial={animated ? "hidden" : "visible"}
        animate="visible"
        variants={pathVariants}
        transition={{ delay: 0.2 }}
      />

      {/* Flowing Wave Extension */}
      <motion.path
        d="M72 58C78 48 90 50 95 60C100 70 85 85 75 80C68 76 65 65 60 62"
        stroke={`url(#grad2-${id})`}
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        initial={animated ? "hidden" : "visible"}
        animate="visible"
        variants={pathVariants}
        transition={{ delay: 0.4 }}
      />

      {/* Dispersion Particles */}
      {[
        { x: 80, y: 15, s: 5, c: '#BD00FF' },
        { x: 92, y: 22, s: 4, c: '#FF0055' },
        { x: 85, y: 30, s: 6, c: '#FF7A2A' },
        { x: 95, y: 38, s: 4, c: '#FFC92A' },
        { x: 78, y: 40, s: 5, c: '#00E5FF' },
        { x: 90, y: 50, s: 3, c: '#3300FF' },
      ].map((p, i) => (
        <motion.rect
          key={i}
          x={p.x}
          y={p.y}
          width={p.s}
          height={p.s}
          rx={1}
          fill={isMonochrome ? 'currentColor' : p.c}
          custom={i}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          variants={particleVariants}
          className="drop-shadow-sm"
        />
      ))}
    </svg>
  );

  if (variant === 'icon') {
    return (
      <motion.div 
        className={cn("inline-flex items-center justify-center relative group", className)}
        whileHover={!isSplash ? { scale: 1.05 } : {}}
        {...props}
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
        {IconSVG}
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={cn("inline-flex items-center gap-3 relative group cursor-pointer", className)}
      whileHover={!isSplash ? { scale: 1.02 } : {}}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Dynamic Splash Reveal */}
      {isSplash ? (
        <motion.div
          initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
        >
          {IconSVG}
        </motion.div>
      ) : (
        IconSVG
      )}
      
      <div className={cn("flex items-center gap-1.5", wordmarkClassName)}>
        <span className="text-2xl font-black tracking-tight text-foreground">
          Color
          <span className={cn(
            "text-transparent bg-clip-text bg-gradient-to-r",
            isMonochrome ? "from-foreground to-foreground" : "from-blue-500 via-purple-500 to-pink-500"
          )}>
            Forge
          </span>
        </span>
        
        <motion.div 
          className={cn(
            "relative flex items-center justify-center px-1.5 py-0.5 rounded-md overflow-hidden",
            isMonochrome ? "border-2 border-foreground" : "bg-background border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.3)]",
            badgeClassName
          )}
          initial={animated ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: animated ? 1.5 : 0 }}
        >
          {/* Animated border gradient for AI Badge */}
          {!isMonochrome && (
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-20 animate-[spin_3s_linear_infinite]" />
          )}
          <span className={cn(
            "relative z-10 text-[10px] font-black uppercase tracking-wider",
            isMonochrome ? "text-foreground" : "text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-500"
          )}>
            AI
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
