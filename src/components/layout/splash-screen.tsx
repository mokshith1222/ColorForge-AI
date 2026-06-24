'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorForgeLogo } from '@/components/branding/colorforge-logo';

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative">
            {/* Background ambient glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0, 0.5, 0.3], scale: [0.8, 1.2, 1] }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 -z-10 blur-[80px] bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full"
            />
            
            <ColorForgeLogo 
              animated 
              isSplash 
              iconClassName="w-24 h-24 sm:w-32 sm:h-32" 
              wordmarkClassName="text-4xl sm:text-5xl"
              badgeClassName="text-xs px-2 py-1"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
