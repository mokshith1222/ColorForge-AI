import React from 'react';
import { Terminal, Code2, Box, Cpu } from 'lucide-react';

export const developerHubContent = {
  title: "ColorForge AI for Developers",
  description: "Bring the power of AI color generation, accessibility checking, and palette extraction directly into your own applications with our API and developer tools.",
  features: [
    {
      title: "REST API",
      description: "Extract color palettes from images or generate AI color schemes programmatically using our high-performance REST API.",
      icon: <Code2 className="w-6 h-6 text-primary" />
    },
    {
      title: "NPM Package",
      description: "Use our color utilities natively in your Javascript and Typescript applications without any external dependencies.",
      icon: <Box className="w-6 h-6 text-primary" />
    },
    {
      title: "CLI Tools",
      description: "Generate Tailwind config files, CSS variables, and design tokens directly from your command line.",
      icon: <Terminal className="w-6 h-6 text-primary" />
    },
    {
      title: "Edge Compute",
      description: "Our API runs on the edge, ensuring lightning-fast response times for real-time color processing in your apps.",
      icon: <Cpu className="w-6 h-6 text-primary" />
    }
  ],
  faqs: [
    {
      question: "Is the API free to use?",
      answer: "We offer a generous free tier for developers to test and build small applications. For production apps with high traffic, check out our premium plans."
    },
    {
      question: "Do I need an API key?",
      answer: "Yes, you can generate an API key from your account dashboard to authenticate requests."
    },
    {
      question: "Can I use the NPM package in React Native?",
      answer: "Yes, our core NPM package is framework agnostic and works seamlessly in React Native, Node.js, and web environments."
    }
  ]
};
