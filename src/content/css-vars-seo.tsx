import React from 'react';
import { Settings, FileJson2, Braces, PaintBucket } from 'lucide-react';

export const cssVarsContent = {
  title: "CSS Custom Properties Generator",
  description: "Visually map out your design system's colors and automatically generate the perfect :root CSS variables block. Save time and prevent typos.",
  features: [
    {
      title: "Visual Mapping",
      description: "Define variable names and assign colors using an intuitive interface rather than staring at a text editor.",
      icon: <PaintBucket className="w-6 h-6 text-primary" />
    },
    {
      title: "Global Scope",
      description: "Automatically wraps your variables in the :root pseudo-class so they are available globally across your stylesheet.",
      icon: <Braces className="w-6 h-6 text-primary" />
    },
    {
      title: "Dynamic Updates",
      description: "Change a color in the UI and watch your CSS output update in real-time.",
      icon: <Settings className="w-6 h-6 text-primary" />
    },
    {
      title: "Clean Syntax",
      description: "Generates perfectly formatted, indented CSS ready to be copy-pasted directly into your globals.css or index.css.",
      icon: <FileJson2 className="w-6 h-6 text-primary" />
    }
  ],
  faqs: [
    {
      question: "What are CSS Custom Properties?",
      answer: "Also known as CSS Variables, they are entities defined by CSS authors that contain specific values to be reused throughout a document. They allow you to define a color once and use it everywhere, making theme changes effortless."
    },
    {
      question: "Why use the :root selector?",
      answer: "The :root selector matches the document's root element (the <html> tag). Declaring variables here ensures they are inherited by every element in your DOM, making them truly global."
    },
    {
      question: "Can I use these with SASS/SCSS?",
      answer: "Yes! While SCSS has its own variable system (using $), native CSS variables are preferred because they can be manipulated by Javascript at runtime, whereas SCSS variables are compiled away."
    }
  ]
};
