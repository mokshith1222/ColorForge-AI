export const hexToRgbContent = {
  toolName: 'HEX to RGB Converter',
  introduction: (
    <>
      <p className="mb-4">
        Converting HEX color codes to RGB (Red, Green, Blue) is one of the most common tasks in web development and graphic design. While HEX codes are incredibly concise and perfect for sharing color values in a simple string, RGB values are often required by modern CSS-in-JS libraries, animation engines, and design software.
      </p>
      <p className="mb-4">
        Our HEX to RGB Converter provides instant, mathematically perfect translation between these two formats. It not only provides the raw RGB string, but also breaks down the individual Red, Green, and Blue channels as percentages, making it much easier to understand the actual composition of the color.
      </p>
      <p>
        Additionally, the tool instantly generates the corresponding CSS <code>rgba()</code> syntax, allowing you to easily add an alpha (transparency) channel to your solid HEX color.
      </p>
    </>
  ),
  howToUse: [
    {
      step: 'Enter your HEX Code',
      desc: 'Type or paste your HEX code into the input field. The tool supports both 6-character (#FF0000) and 3-character (#F00) shorthand formats. The "#" symbol is optional.',
    },
    {
      step: 'Instant Conversion',
      desc: 'As you type, the tool instantly calculates the RGB values. You will see the visual preview update in real-time.',
    },
    {
      step: 'Adjust Opacity (Optional)',
      desc: 'If you need a transparent color, use the Opacity slider to instantly generate an RGBA string (e.g., rgba(255, 0, 0, 0.5)).',
    },
    {
      step: 'Copy and Paste',
      desc: 'Click the "Copy" button next to any of the generated formats to instantly copy the code to your clipboard.',
    },
  ],
  examples: [
    {
      title: 'Creating Transparent Backgrounds',
      desc: 'You have a brand color #3B82F6, but you want to use it as a subtle background for a card. Convert it to RGB (59, 130, 246) and add a 10% opacity: rgba(59, 130, 246, 0.1).',
    },
    {
      title: 'CSS Custom Properties',
      desc: 'Tailwind CSS and other frameworks often require you to define your base colors as raw RGB comma-separated values (e.g., --color-primary: 59 130 246;) so they can inject opacity later.',
    },
  ],
  benefits: [
    'Instantly handles 3-digit shorthand HEX codes correctly.',
    'Provides the raw values needed for modern CSS variable architectures.',
    'Includes a built-in opacity slider to generate perfect RGBA strings.',
  ],
  mistakes: [
    'Forgetting that HEX to RGB conversion is exact. If the colors look different in your design software, check your monitor\'s color profile.',
    'Trying to add a 4th channel to a standard rgb() function in older CSS. Always use rgba() if you need transparency.',
  ],
  proTips: [
    'If you are using Tailwind CSS v4, you can actually use HEX codes directly with opacity modifiers like bg-[#ff0000]/50, but RGB is still required for many older codebases.',
  ],
  faqs: [
    {
      question: 'What is a HEX Code?',
      answer: 'HEX stands for Hexadecimal. It is a base-16 numbering system used to represent colors on the web. The 6 characters represent the Red, Green, and Blue values (2 characters each).',
    },
    {
      question: 'What does RGB stand for?',
      answer: 'RGB stands for Red, Green, and Blue. It is an additive color model, meaning colors are created by mixing different amounts of red, green, and blue light (from 0 to 255).',
    },
  ],
  relatedTools: [
    { name: 'Color Picker', href: '/color-picker' },
    { name: 'RGB to HEX', href: '/rgb-to-hex' },
  ],
};
