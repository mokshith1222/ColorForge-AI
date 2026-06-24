export const colorTheoryContent = {
  toolName: 'Color Theory',
  introduction: (
    <>
      <p className="mb-4">
        Color theory is the art and science of using color to communicate visually. It encompasses how colors mix, how they contrast, and most importantly, how they impact human psychology. In web design and product development, color theory isn't just about making things look pretty—it's a critical mechanism for guiding user behavior, establishing brand trust, and creating an intuitive user experience.
      </p>
      <p className="mb-4">
        The fundamental tool in color theory is the color wheel, a visual representation of colors arranged according to their chromatic relationship. By understanding the relationships between primary, secondary, and tertiary colors, designers can create mathematically harmonious color palettes that feel naturally balanced.
      </p>
      <p>
        But color goes beyond physics and mathematics. Every color carries deep psychological weight. For instance, the reason almost all social media networks use Blue is because it inherently projects trust, security, and communication.
      </p>
    </>
  ),
  howToUse: [
    {
      step: 'Select a Base Color',
      desc: 'Use the global command menu or any of our color generation tools to set an Active Color. This entire page dynamically responds to your selection.',
    },
    {
      step: 'Analyze Harmonies',
      desc: 'Observe how your active color interacts with its complementary, analogous, monochromatic, and triadic counterparts. This helps you build out your supporting color palette.',
    },
    {
      step: 'Understand the Psychology',
      desc: 'Read the psychological breakdown of your chosen color to ensure the message it projects aligns with your brand identity.',
    },
  ],
  examples: [
    {
      title: 'Analogous Schemes in Dashboards',
      desc: 'Dashboards often use analogous color schemes (colors next to each other on the wheel, like Blue, Blue-Green, and Green) because they are incredibly easy on the eyes when users must look at data for hours at a time.',
    },
    {
      title: 'Complementary Schemes in E-commerce',
      desc: 'An e-commerce site might use a predominantly blue theme (trust and security), but use a vibrant orange (the complementary opposite of blue) exclusively for the "Add to Cart" button to make it pop and drive conversions.',
    },
  ],
  benefits: [
    'Dynamic learning: See the abstract concepts of color theory applied instantly to your specific active color.',
    'Provides an immediate understanding of how to build out a full palette without guessing.',
    'Explains both the mathematical (the wheel) and the psychological aspects of color design.',
  ],
  mistakes: [
    'Using highly saturated complementary colors directly next to each other in equal amounts. This causes "visual vibration" and extreme eye strain. Always use one color dominantly, and the opposite color sparingly as an accent.',
    'Ignoring cultural context. Color psychology changes drastically depending on the target audience (e.g., White signifies purity in Western cultures, but mourning in some Eastern cultures).',
  ],
  proTips: [
    'When using a monochromatic scheme, ensure you have extremely high contrast in lightness between your elements (e.g., a very light blue background with very dark blue text), otherwise the design will look flat and lack hierarchy.',
    'The 60-30-10 Rule: A classic design rule states you should use your dominant color 60% of the time (usually a background), a secondary color 30% of the time, and an accent color 10% of the time (buttons, highlights).',
  ],
  faqs: [
    {
      question: 'What are Warm vs. Cool colors?',
      answer: 'Warm colors (reds, oranges, yellows) are associated with energy, passion, and action. They visually advance towards the user. Cool colors (blues, greens, purples) are associated with calm, peace, and serenity. They visually recede into the background.',
    },
    {
      question: 'Why do so many tech companies use Blue?',
      answer: 'Blue is almost universally perceived as safe, reliable, and corporate. It is non-threatening and does not trigger the urgency of red or the caution of yellow, making it perfect for platforms handling data or communication.',
    },
  ],
  relatedTools: [
    { name: 'Palette Generator', href: '/color-palette-generator' },
    { name: 'Accessibility Checker', href: '/accessibility-checker' },
    { name: 'Design Systems', href: '/design-systems' },
  ],
};
