import React from 'react';
import { Palette, Layout, Settings2, Download } from 'lucide-react';

export const themeGeneratorContent = {
  title: "Complete Theme Generator",
  description: "Instantly create cohesive design systems and themes from a single base color. Perfect for React, Next.js, Vue, and vanilla CSS projects.",
  features: [
    {
      title: "One-Click Theming",
      description: "Pick a single base color and let our algorithm generate primary, secondary, accent, and semantic colors (success, error, warning).",
      icon: <Palette className="w-6 h-6 text-primary" />
    },
    {
      title: "Real-Time UI Sandbox",
      description: "Preview how your generated colors will look on an actual dashboard interface instantly.",
      icon: <Layout className="w-6 h-6 text-primary" />
    },
    {
      title: "Light & Dark Mode",
      description: "Automatically scale and adjust your theme colors for both light and dark backgrounds.",
      icon: <Settings2 className="w-6 h-6 text-primary" />
    },
    {
      title: "Export Ready",
      description: "Copy your theme as CSS Custom Properties (variables) or as a JSON object for Javascript-based styling.",
      icon: <Download className="w-6 h-6 text-primary" />
    }
  ],
  faqs: [
    {
      question: "How does the theme generator algorithm work?",
      answer: "We use color theory algorithms to find harmonious counterparts to your base color. Using the HSL color space, we calculate perfect secondary and accent colors based on complementary and analogous relationships."
    },
    {
      question: "Can I use this with Tailwind CSS?",
      answer: "Yes! You can copy the CSS variables output and map them inside your tailwind.config.js file to create a dynamic Tailwind theme."
    },
    {
      question: "What are semantic colors?",
      answer: "Semantic colors are colors that convey meaning in UI design, such as green for success, red for errors, and yellow for warnings."
    }
  ]
};
