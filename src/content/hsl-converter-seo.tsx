export const hslConverterContent = {
  toolName: 'HSL Converter',
  introduction: (
    <>
      <p className="mb-4">
        While HEX and RGB are the most common color formats in web development, they are notoriously difficult for humans to read and manipulate. If you want to make a HEX color "10% darker", you essentially have to guess the new alphanumeric string. Enter HSL (Hue, Saturation, Lightness).
      </p>
      <p className="mb-4">
        Our HSL Converter allows you to seamlessly translate any color into the human-readable HSL format. This is the format preferred by UI/UX designers because it perfectly maps to how we intuitively think about color.
      </p>
      <p>
        By breaking a color down into its position on the color wheel (Hue), its intensity (Saturation), and its brightness (Lightness), you can programmatically generate color palettes, hover states, and dark modes with simple mathematical adjustments.
      </p>
    </>
  ),
  howToUse: [
    {
      step: 'Enter your Base Color',
      desc: 'You can type a HEX code or RGB string into the input field, or use the interactive sliders to dial in a specific HSL value directly.',
    },
    {
      step: 'Adjust Hue (0-360)',
      desc: 'The Hue slider moves you around the color wheel. 0 is Red, 120 is Green, 240 is Blue, and 360 brings you back to Red.',
    },
    {
      step: 'Adjust Saturation (0-100%)',
      desc: 'Saturation controls the intensity. 100% is the purest, most vibrant version of the color. 0% strips away all color, leaving you with a grayscale tone.',
    },
    {
      step: 'Adjust Lightness (0-100%)',
      desc: 'Lightness controls brightness. 50% is the true color. Pushing it down to 0% creates pure Black, while pushing it up to 100% creates pure White.',
    },
  ],
  examples: [
    {
      title: 'Creating Hover States',
      desc: 'If your primary button is `hsl(210, 100%, 50%)`, you can create a perfect hover state by simply dropping the lightness by 10%. The hover color becomes `hsl(210, 100%, 40%)`.',
    },
    {
      title: 'Monochromatic Theming',
      desc: 'Keep the Hue and Saturation locked, and generate an entire UI theme (backgrounds, borders, text) by only changing the Lightness value.',
    },
  ],
  benefits: [
    'Provides bidirectional conversion between HEX, RGB, and HSL.',
    'Visual sliders make it incredibly easy to understand how Hue, Saturation, and Lightness interact.',
    'Generates production-ready CSS `hsl()` strings instantly.',
  ],
  mistakes: [
    'Confusing HSL with HSV or HSB. While they are similar, they calculate lightness differently. Web CSS natively supports HSL, not HSV.',
    'Forgetting that Lightness at 100% is always pure white, regardless of what your Hue and Saturation are set to.',
  ],
  proTips: [
    'When building a Dark Mode, do not just invert the lightness. You often need to drop the saturation slightly in dark mode to prevent the colors from "vibrating" against a dark background and causing eye strain.',
    'Tailwind CSS variables are often defined using HSL values without the `hsl()` wrapper (e.g., `--primary: 210 100% 50%;`), allowing you to easily inject opacity later with `hsl(var(--primary) / 0.5)`.',
  ],
  faqs: [
    {
      question: 'Why is HSL better than RGB?',
      answer: 'HSL is more intuitive for programmatic design. If you need a "darker blue", it is much easier to reduce the Lightness value in HSL than it is to calculate the precise reduction across all three Red, Green, and Blue channels simultaneously.',
    },
    {
      question: 'Is HSL supported in all browsers?',
      answer: 'Yes, the `hsl()` and `hsla()` functions have been universally supported across all modern browsers for over a decade.',
    },
  ],
  relatedTools: [
    { name: 'HEX to RGB', href: '/hex-to-rgb' },
    { name: 'Tailwind Generator', href: '/tailwind-color-generator' },
  ],
};
