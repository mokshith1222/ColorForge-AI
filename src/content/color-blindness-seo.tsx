import React from 'react';
import { EyeOff, CheckSquare, Layers, Contrast } from 'lucide-react';

export const colorBlindnessContent = {
  title: "Color Blindness Simulator",
  description: "Ensure your designs are accessible to everyone. Simulate how your color palettes and UIs appear to users with various forms of color vision deficiency (CVD).",
  features: [
    {
      title: "All Major CVD Types",
      description: "Accurately simulate Protanopia (red-blind), Deuteranopia (green-blind), Tritanopia (blue-blind), and Achromatopsia (monochromacy).",
      icon: <EyeOff className="w-6 h-6 text-primary" />
    },
    {
      title: "Real-Time Adjustments",
      description: "Tweak your base colors and instantly see how the simulated palette changes, allowing you to find a universally distinct color set.",
      icon: <Layers className="w-6 h-6 text-primary" />
    },
    {
      title: "Accessibility First",
      description: "Combined with contrast checking, this ensures your charts, graphs, and UI states don't rely solely on color to convey information.",
      icon: <CheckSquare className="w-6 h-6 text-primary" />
    },
    {
      title: "Accurate Matrix Math",
      description: "We use industry-standard SVG color matrix transformations to provide scientifically accurate simulations of color deficiencies.",
      icon: <Contrast className="w-6 h-6 text-primary" />
    }
  ],
  faqs: [
    {
      question: "Why do I need to test for color blindness?",
      answer: "Approximately 8% of men and 0.5% of women of Northern European descent have some form of color vision deficiency. Designing without considering this means a significant portion of your users may struggle to use your product."
    },
    {
      question: "What is the most common form of color blindness?",
      answer: "Deuteranomaly (a type of red-green color blindness) is the most common. People with this condition have a reduced sensitivity to green light, making it hard to distinguish between reds, greens, browns, and oranges."
    },
    {
      question: "Should I only use high contrast colors?",
      answer: "Not necessarily! The key is to ensure that you do not rely solely on color to convey meaning. Add icons, patterns, or text labels to differentiate states, and use this simulator to ensure your chosen colors still have adequate luminance contrast when hue is removed."
    }
  ]
};
