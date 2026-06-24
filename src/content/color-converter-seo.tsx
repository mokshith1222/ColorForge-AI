import React from 'react';
import { ArrowRightLeft, Palette, Droplet, Hash } from 'lucide-react';

export const colorConverterContent = {
  title: "Ultimate Color Format Converter",
  description: "Seamlessly convert between HEX, RGB, HSL, CMYK, and HSV. The most accurate and developer-friendly color conversion tool available online.",
  features: [
    {
      title: "Real-Time Conversion",
      description: "Type in any color format and instantly see the equivalent values across all other color spaces.",
      icon: <ArrowRightLeft className="w-6 h-6 text-primary" />
    },
    {
      title: "Alpha Channel Support",
      description: "Full support for transparent colors (HEX8, RGBA, HSLA) to ensure your web gradients and overlays are pixel-perfect.",
      icon: <Droplet className="w-6 h-6 text-primary" />
    },
    {
      title: "Print & Digital",
      description: "Convert from digital RGB/HEX formats to print-ready CMYK values to maintain brand consistency across mediums.",
      icon: <Palette className="w-6 h-6 text-primary" />
    },
    {
      title: "Click to Copy",
      description: "One-click copy for the exact syntax you need in your CSS, SCSS, or Tailwind configuration.",
      icon: <Hash className="w-6 h-6 text-primary" />
    }
  ],
  faqs: [
    {
      question: "Why do colors look different in CMYK vs RGB?",
      answer: "RGB is an additive color model used for screens (light), while CMYK is a subtractive color model used for physical printing (ink). Some bright RGB colors cannot be perfectly reproduced in CMYK."
    },
    {
      question: "What is HSL and why should I use it?",
      answer: "HSL (Hue, Saturation, Lightness) is an intuitive color model. It's preferred by many UI designers because adjusting the 'Lightness' value makes it incredibly easy to generate hover states and color scales."
    },
    {
      question: "Does the converter support 3-digit HEX codes?",
      answer: "Yes! 3-digit hex codes (like #F00) are automatically expanded to their full 6-digit representation (#FF0000)."
    }
  ]
};
