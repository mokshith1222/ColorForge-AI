export const tailwindGeneratorContent = {
  toolName: 'Tailwind CSS Color Generator',
  introduction: (
    <>
      <p className="mb-4">
        Tailwind CSS has revolutionized utility-first styling, but creating a custom color scale that perfectly matches the framework's native 50-950 weight system is notoriously difficult. A proper scale requires complex luminance adjustments to ensure accessible contrast ratios and visual harmony across all shades.
      </p>
      <p className="mb-4">
        The ColorForge AI Tailwind Scale Generator completely automates this process. By inputting a single base brand color (which acts as the 500-weight anchor), our algorithm mathematically generates the entire spectrum from 50 (the lightest tint) to 950 (the darkest shade). 
      </p>
      <p>
        To ensure your scale is production-ready, we provide a Live UI Preview that renders standard web components (buttons, badges, inputs) using your newly generated scale. This instantly validates if your 100-weight is too dark for backgrounds, or if your 900-weight is too light for text. Once verified, you can copy the raw JavaScript object directly into your <code>tailwind.config.ts</code> or export it as native CSS variables.
      </p>
    </>
  ),
  howToUse: [
    {
      step: 'Set Your Base Color',
      desc: 'Use the color picker on the right side to select your brand color. This color will be automatically assigned to the 500-weight slot, and the rest of the scale will be interpolated around it.',
    },
    {
      step: 'Name Your Scale',
      desc: 'Type a semantic name for your scale in the "Scale Name" input (e.g., primary, brand, accent). This name will be used to generate your Tailwind configuration code.',
    },
    {
      step: 'Verify with Live Preview',
      desc: 'Check the "Live UI Preview" panel to see how your colors perform in real-world scenarios. Ensure that text elements remain highly legible against their respective background colors.',
    },
    {
      step: 'Export Your Configuration',
      desc: 'Scroll down to the Export panels. You can copy the JavaScript object directly into the `extend.colors` section of your Tailwind config, or copy the CSS variables if you are using a modern CSS-in-JS architecture.',
    },
  ],
  examples: [
    {
      title: 'Creating a Primary Brand Scale',
      desc: 'If your logo is a vibrant orange (#F97316), use that as the base. The generator will create ultra-light oranges (50) for your warning alert backgrounds, and deep, muddy oranges (900) for your warning alert text.',
    },
    {
      title: 'Building a Dark Mode Surface Scale',
      desc: 'Pick a deep, desaturated blue (#0F172A). The generator will provide a scale where 800, 900, and 950 can serve as your layered dark mode backgrounds, while 50 and 100 serve as the text colors.',
    },
    {
      title: 'Custom State Colors',
      desc: 'Instead of relying on Tailwind\'s default red, green, and yellow, pick your own custom semantic colors (e.g., a "softer" mint green for success) and generate a full 50-900 scale to ensure your UI looks entirely bespoke.',
    },
  ],
  benefits: [
    'Perfect mathematical interpolation ensures your custom scale perfectly mimics the visual rhythm of Tailwind\'s default palette.',
    'Saves hours of manual tweaking and calculating lightness values.',
    'Live UI component preview guarantees your scale actually works for buttons, badges, and inputs before you write any code.',
    'Generates 11 distinct shades (50 through 950) conforming to modern Tailwind v3+ standards.',
  ],
  mistakes: [
    'Using an extremely light or pastel color as your 500 base. The 500 weight is meant to be a solid, accessible mid-tone. If your base is too light, the generator cannot accurately create the 50-400 tints.',
    'Forgetting to place your generated object inside the `extend: { colors: {} }` block of your config. If placed outside `extend`, it will overwrite Tailwind\'s default colors entirely.',
    'Ignoring contrast ratios between the 100 and 900 weights when designing alerts.',
  ],
  proTips: [
    'If you want to use CSS variables for dynamic theming (Dark Mode), export the "CSS Variables" snippet to your global.css, and then map those variables in your tailwind.config.js (e.g., `primary: "var(--color-brand-500)"`).',
    'Click on any individual color block in the generated scale to instantly copy just that specific Hex code to your clipboard.',
    'You can test different brand colors rapidly by locking the scale name and clicking the "Random" button on the global color picker.',
  ],
  faqs: [
    {
      question: 'What do the numbers (50-950) mean in Tailwind?',
      answer: 'The numbers represent the visual weight (lightness) of the color. 50 is the lightest tint (nearly white, used for subtle backgrounds), 500 is the base color (used for primary buttons and borders), and 950 is the darkest shade (nearly black, used for high-contrast text).',
    },
    {
      question: 'How is the scale calculated?',
      answer: 'We convert your base Hex color into the HSL (Hue, Saturation, Lightness) color space. We then map your color to the 500 index, and mathematically interpolate the Lightness and Saturation values up to 98% lightness for 50, and down to 10% lightness for 950, applying subtle hue-shifting for a more natural look.',
    },
    {
      question: 'Where do I paste the generated code?',
      answer: 'In your `tailwind.config.ts` or `tailwind.config.js` file, find the `theme.extend.colors` object, and paste the generated JavaScript directly inside.',
    },
    {
      question: 'Does this work with Tailwind CSS v4?',
      answer: 'Yes! While Tailwind v4 introduces new ways of defining theme variables natively in CSS, the generated CSS Variables output from this tool is perfectly compatible with v4 architectures.',
    },
  ],
  relatedTools: [
    { name: 'Color Picker', href: '/color-picker' },
    { name: 'Palette Generator', href: '/color-palette-generator' },
    { name: 'Design Systems', href: '/design-systems' },
  ],
};
