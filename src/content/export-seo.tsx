import React from 'react';
import { Download, FileCode2, Paintbrush, Smartphone } from 'lucide-react';

export const exportContent = {
  title: "Export Center",
  description: "Stop manually translating hex codes. Generate production-ready code snippets for your exact tech stack with a single click.",
  features: [
    {
      title: "Web Standards",
      description: "Export instantly to raw CSS custom properties (:root variables) or SCSS maps.",
      icon: <FileCode2 className="w-6 h-6 text-primary" />
    },
    {
      title: "Tailwind CSS",
      description: "Generate a perfectly formatted theme object to paste directly into your tailwind.config.js.",
      icon: <Paintbrush className="w-6 h-6 text-primary" />
    },
    {
      title: "Mobile Native",
      description: "Get color definitions for iOS (Swift) and Android (XML resource files) instantly.",
      icon: <Smartphone className="w-6 h-6 text-primary" />
    },
    {
      title: "Bulk Export",
      description: "Define your entire palette and export all formats at once as a downloadable ZIP file.",
      icon: <Download className="w-6 h-6 text-primary" />
    }
  ],
  faqs: [
    {
      question: "How do I use the Tailwind export?",
      answer: "Copy the JSON object provided and paste it under the 'theme.extend.colors' section of your tailwind.config.js file."
    },
    {
      question: "Are the Swift colors compatible with SwiftUI?",
      answer: "Yes, the exported Swift code uses the modern Color() struct compatible with both SwiftUI and recent versions of UIKit."
    },
    {
      question: "Do you support CSS-in-JS?",
      answer: "Yes! The JSON object export format is perfect for CSS-in-JS libraries like Styled Components, Emotion, or standard React inline styles."
    }
  ]
};
