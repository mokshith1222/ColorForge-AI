import React from 'react';
import { Layers, MousePointerClick, AppWindow, Paintbrush } from 'lucide-react';

export const uiPreviewContent = {
  title: "Real-Time UI Palette Preview",
  description: "Don't just guess how your colors will look. Apply them to a live, interactive UI component library to see exactly how your primary, secondary, and accent colors interact with text and surfaces.",
  features: [
    {
      title: "Interactive Components",
      description: "Test your colors on buttons, cards, inputs, and alerts. Hover over elements to ensure your interaction states have enough contrast.",
      icon: <MousePointerClick className="w-6 h-6 text-primary" />
    },
    {
      title: "Holistic View",
      description: "See the big picture. Evaluate how a full palette comes together on a mockup landing page or dashboard.",
      icon: <AppWindow className="w-6 h-6 text-primary" />
    },
    {
      title: "Typography Check",
      description: "Instantly verify that your chosen text colors are legible against your generated surface and background colors.",
      icon: <Layers className="w-6 h-6 text-primary" />
    },
    {
      title: "Quick Tweaks",
      description: "Adjust individual variables on the fly without leaving the preview window until you achieve the perfect harmony.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />
    }
  ],
  faqs: [
    {
      question: "What is the 60-30-10 rule?",
      answer: "A classic design rule where 60% of your UI is a dominant (usually neutral) color, 30% is a secondary color, and 10% is an accent color. This preview tool helps you balance these proportions visually."
    },
    {
      question: "How do I choose surface colors?",
      answer: "Surface colors are usually slight variations of your background color. In light mode, they might be slightly darker or pure white. In dark mode, they are typically lighter shades of your dark background to show elevation."
    },
    {
      question: "Can I export these components?",
      answer: "This tool is meant for color evaluation rather than code generation. However, the components represent standard Tailwind CSS structures that you can easily replicate."
    }
  ]
};
