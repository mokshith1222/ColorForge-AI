import React from 'react';
import { Wand2, Sparkles, Layout, Palette } from 'lucide-react';

export const aiPaletteContent = {
  title: "AI Color Palette Generator",
  description: "Leverage artificial intelligence to generate perfect color combinations. Describe a mood, brand, industry, or concept, and our AI will translate it into a stunning, harmonious palette.",
  features: [
    {
      title: "Natural Language Prompts",
      description: "Type anything from 'cyberpunk neon city' to 'calm minimalist spa' and get instantly matched colors.",
      icon: <Wand2 className="w-6 h-6 text-primary" />
    },
    {
      title: "Smart Harmony",
      description: "The AI understands color theory, ensuring the generated colors have appropriate contrast and balance.",
      icon: <Sparkles className="w-6 h-6 text-primary" />
    },
    {
      title: "Context Aware",
      description: "The generated palettes are optimized for UI design, automatically designating backgrounds, text, and accent colors.",
      icon: <Layout className="w-6 h-6 text-primary" />
    },
    {
      title: "Infinite Inspiration",
      description: "Hit generate to explore endless variations of a concept until you find the exact aesthetic you need.",
      icon: <Palette className="w-6 h-6 text-primary" />
    }
  ],
  faqs: [
    {
      question: "How does the AI choose colors?",
      answer: "The AI is trained on millions of high-quality designs, artworks, and photographs. It associates words with the dominant and accent colors found in visually pleasing compositions."
    },
    {
      question: "Are the generated palettes accessible?",
      answer: "While the AI aims for good contrast, we always recommend verifying the contrast ratio between text and background colors using our Accessibility Checker before using them in production."
    },
    {
      question: "Can I export the AI generated palettes?",
      answer: "Yes! You can instantly copy the hex codes, export to CSS, or save them to your personal collection."
    }
  ]
};
