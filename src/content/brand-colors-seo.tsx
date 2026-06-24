export const brandColorsContent = {
  toolName: 'Brand Colors Explorer',
  introduction: (
    <>
      <p className="mb-4">
        A brand's color palette is one of its most powerful psychological tools. Before a user reads a single word of copy, they have already formed an impression of your company based entirely on the colors you use. This is why the world's most successful companies spend millions of dollars meticulously defining their brand guidelines.
      </p>
      <p className="mb-4">
        The Brand Colors Explorer is a curated library of exact hex codes used by top technology, social media, finance, and entertainment companies. It allows you to peer behind the curtain and analyze how industry leaders combine primary colors with strategic secondary accents to build highly recognizable visual identities.
      </p>
      <p>
        Whether you are a developer looking to integrate a third-party login button perfectly, a designer seeking inspiration from the best in the business, or a marketer analyzing competitor palettes, this tool provides the precise values you need in instantly usable formats.
      </p>
    </>
  ),
  howToUse: [
    {
      step: 'Search for a Brand',
      desc: 'Use the search bar to find specific companies or filter by categories like "Technology" or "Social Media". The grid will instantly update.',
    },
    {
      step: 'Copy Individual Hex Codes',
      desc: 'Hover over any color swatch to reveal its exact HEX value. Click the swatch to instantly copy the code to your clipboard.',
    },
    {
      step: 'Export the Entire Palette',
      desc: 'Click on a brand\'s card to expand it. From there, you can export the entire palette at once as a JSON array or as pre-formatted CSS custom properties (variables) ready to be pasted into your stylesheet.',
    },
    {
      step: 'View Official Guidelines',
      desc: 'Click the external link icon in the top right of any brand card to search for their official brand and press guidelines, providing further context on how they use their colors.',
    },
  ],
  examples: [
    {
      title: 'Third-Party Authentications',
      desc: 'If you are building a "Sign in with Google" or "Sign in with Apple" button, using an approximation of their brand color is a violation of their trademark guidelines. Use this tool to grab their exact, approved hex codes.',
    },
    {
      title: 'Competitor Analysis',
      desc: 'Building a new fintech app? Filter the explorer by "Finance" to analyze the palettes of Stripe, PayPal, and others. You will notice a heavy reliance on deep blues and vibrant purples to convey security and modernity.',
    },
  ],
  benefits: [
    'Provides exact, real-world color data from successful enterprise design systems.',
    'Allows instant, one-click exporting of entire palettes into CSS or JSON formats.',
    'Helps designers understand the ratio of primary to secondary colors used by top brands.',
  ],
  mistakes: [
    'Copying a brand\'s entire palette for your own product. While it is great for inspiration, directly lifting a competitor\'s color scheme will make your product look like a cheap imitation.',
    'Using a brand\'s vibrant accent color as a background. Often, the brightest color in a brand\'s palette is meant exclusively for buttons or highlights. Using it too broadly will overwhelm the user.',
  ],
  proTips: [
    'Notice how almost every major tech brand (Google, Apple, Microsoft) includes a specific set of grays or off-whites in their official palette. These "neutral" colors are just as important as the primary colors for building clean interfaces.',
    'If you are integrating a brand logo into your footer or partners section, convert their brand color to grayscale and apply a hover effect that reveals the true brand color. It keeps your design clean while respecting their identity.',
  ],
  faqs: [
    {
      question: 'Are these colors copyrighted?',
      answer: 'Colors themselves cannot generally be copyrighted, but specific colors can be trademarked within a specific industry (e.g., T-Mobile\'s magenta or UPS\'s brown). You should use these colors for integration and reference, not to imitate a brand.',
    },
    {
      question: 'Why do some brands have so many colors?',
      answer: 'While a brand usually has one or two primary colors (like Twitter/X Blue), they define extended palettes for use in illustrations, data visualization, and complex UI states. This ensures consistency across massive ecosystems.',
    },
  ],
  relatedTools: [
    { name: 'Palette Generator', href: '/color-palette-generator' },
    { name: 'Image Color Extractor', href: '/image-color-extractor' },
    { name: 'Color Theory', href: '/color-theory' },
  ],
};
