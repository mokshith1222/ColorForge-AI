import React from 'react';
import { Code2, BookOpen, Repeat, Database } from 'lucide-react';

export const tokensContent = {
  title: "Design Token Generator",
  description: "Bridge the gap between design and development by generating standard design tokens. Export semantic colors into JSON formats ready for Style Dictionary or the W3C Design Tokens Community Group specification.",
  features: [
    {
      title: "Semantic Naming",
      description: "Map raw color values (e.g., #3B82F6) to semantic names (e.g., color.primary.base) for better maintainability.",
      icon: <BookOpen className="w-6 h-6 text-primary" />
    },
    {
      title: "W3C Draft Compatible",
      description: "Export tokens in the format proposed by the W3C Design Tokens Community Group to future-proof your design system.",
      icon: <Code2 className="w-6 h-6 text-primary" />
    },
    {
      title: "Style Dictionary Ready",
      description: "Instantly copy JSON structures that can be consumed directly by Amazon's Style Dictionary tool.",
      icon: <Database className="w-6 h-6 text-primary" />
    },
    {
      title: "Single Source of Truth",
      description: "Generate your tokens once and use them across iOS, Android, and Web platforms.",
      icon: <Repeat className="w-6 h-6 text-primary" />
    }
  ],
  faqs: [
    {
      question: "What are design tokens?",
      answer: "Design tokens are the visual design atoms of a design system. Instead of hardcoding hex values in your CSS or mobile apps, you use tokens (like 'color-brand-primary'). This ensures consistency and makes global redesigns trivial."
    },
    {
      question: "What is Style Dictionary?",
      answer: "Style Dictionary is a build system that allows you to define your design tokens once in JSON, and compile them into platform-specific formats like CSS variables, SCSS variables, Android XML, and iOS Swift classes."
    },
    {
      question: "Why semantic naming?",
      answer: "Naming a token 'blue-500' is descriptive, but naming it 'button-primary-background' is semantic. Semantic tokens describe how the color is used, meaning if you later rebrand to use red buttons, you only change the value of the token, not the name."
    }
  ]
};
