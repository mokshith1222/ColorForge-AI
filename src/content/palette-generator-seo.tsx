export const paletteGeneratorContent = {
  toolName: 'Color Palette Generator',
  introduction: (
    <>
      <p className="mb-4">
        The ColorForge AI Color Palette Generator is an essential utility for designers, artists, and developers looking to construct mathematically harmonious color schemes. Creating a beautiful color palette from scratch can be daunting, often relying on intuition rather than established design principles.
      </p>
      <p className="mb-4">
        Our generator eliminates the guesswork by applying classic color theory directly to your chosen base color. Whether you need a high-contrast Complementary scheme for a vibrant landing page or a soothing Analogous palette for a healthcare application, the generator instantly calculates the perfect corresponding hues.
      </p>
      <p>
        Every generated palette provides detailed breakdowns including Hex codes, RGB strings, and HSL values. We also provide instant visual context by displaying how your palette translates into a smooth CSS gradient and a realistic UI mockup, allowing you to validate your design choices immediately.
      </p>
    </>
  ),
  howToUse: [
    {
      step: 'Pick a Base Color',
      desc: 'Use the interactive color picker, enter a Hex code, or click the Shuffle button to establish your foundation. This color anchors the entire generation process.',
    },
    {
      step: 'Lock Your Foundation',
      desc: 'If you want to ensure your base color never changes while exploring different harmonies, click the Lock icon. This is useful when you have a strict brand color you must adhere to.',
    },
    {
      step: 'Select a Harmony Type',
      desc: 'Choose from established color theory algorithms: Monochromatic, Analogous, Complementary, Split-Complementary, Triadic, or Tetradic to instantly generate your palette.',
    },
    {
      step: 'Preview and Export',
      desc: 'Hover over any color in the generated palette to see its Hex code, and click to copy it. Use the UI Usage Example panel to see how the colors look when applied to standard web elements.',
    },
  ],
  examples: [
    {
      title: 'Monochromatic Corporate UI',
      desc: 'For professional software (like banking or legal tech), select a deep blue and use the Monochromatic harmony. This creates varying shades of the same blue, ensuring a highly unified, serious, and distraction-free interface.',
    },
    {
      title: 'High-Energy Marketing Sites',
      desc: 'When building a site for a sale or event, use a Triadic harmony. This selects three colors evenly spaced on the color wheel (e.g., Red, Yellow, Blue), providing extremely high contrast and a vibrant, energetic feel.',
    },
    {
      title: 'Nature-Inspired Applications',
      desc: 'For health, wellness, or environmental apps, pick a natural green and use the Analogous harmony. This selects colors directly next to each other on the color wheel (like Yellow-Green and Blue-Green), mimicking the smooth color transitions found in nature.',
    },
  ],
  benefits: [
    'Removes the guesswork from color selection by relying on mathematical color theory.',
    'Provides instant visual feedback via the UI mockup component, proving the palette works in practice.',
    'Generates 5-color palettes which is the industry standard size for establishing Primary, Secondary, Background, Surface, and Accent colors.',
    'Allows one-click copying of individual colors or saving the entire base concept to your ColorForge profile.',
  ],
  mistakes: [
    'Using a Triadic or Tetradic palette and giving every color equal weight on the page. You should pick one dominant color and use the others sparingly as accents.',
    'Selecting a Complementary palette (e.g., pure Red and pure Green) and placing them directly on top of each other, which causes visual vibration and ruins readability.',
    'Forgetting to check the contrast ratio of the generated colors against your background color.',
  ],
  proTips: [
    'The 60-30-10 Rule: When applying your generated palette to a design, use your background/surface color for 60% of the area, your secondary color for 30%, and your accent (complementary) color for only 10%.',
    'If an Analogous palette feels too boring, try Split-Complementary. It gives you the smooth adjacent colors of Analogous but adds one highly contrasting color for buttons and links.',
    'Always lock your base brand color before clicking through the different harmony types so you do not lose your starting point.',
  ],
  faqs: [
    {
      question: 'What is a Complementary color palette?',
      answer: 'Complementary colors are pairs of colors that are directly opposite each other on the color wheel (e.g., Red and Green, or Blue and Orange). They create maximum contrast and high visibility, but should be balanced carefully.',
    },
    {
      question: 'What does Monochromatic mean?',
      answer: 'A monochromatic palette uses a single base hue but alters the lightness and saturation. This guarantees that all colors will match perfectly, making it the safest and often most elegant choice for UI design.',
    },
    {
      question: 'How is a Triadic palette calculated?',
      answer: 'A Triadic palette selects three colors that are equally spaced around the color wheel (120 degrees apart). This provides a very diverse, vibrant palette while maintaining a mathematical balance.',
    },
    {
      question: 'Can I export the entire palette at once?',
      answer: 'Currently, you can copy individual Hex codes with a single click, or save the base color to your global store to access it across all ColorForge tools. Full CSS/SCSS file exporting is coming in a future update!',
    },
  ],
  relatedTools: [
    { name: 'Color Picker', href: '/color-picker' },
    { name: 'Color Theory', href: '/color-theory' },
    { name: 'Tailwind Generator', href: '/tailwind-color-generator' },
  ],
};
