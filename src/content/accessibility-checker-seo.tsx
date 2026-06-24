export const accessibilityCheckerContent = {
  toolName: 'WCAG Accessibility Checker',
  introduction: (
    <>
      <p className="mb-4">
        Web accessibility is not an optional feature; it is a fundamental requirement for creating inclusive digital experiences. The Web Content Accessibility Guidelines (WCAG) provide strict mathematical thresholds for color contrast to ensure that text is readable for users with visual impairments, including color blindness and low vision.
      </p>
      <p className="mb-4">
        The ColorForge AI Accessibility Checker instantly calculates the contrast ratio between any foreground (text) and background color. It then evaluates this ratio against the official WCAG 2.1 AA and AAA standards for both normal and large text sizes.
      </p>
      <p>
        To bridge the gap between abstract numbers and real-world application, our tool includes a Live Preview pane. This allows you to instantly see how your color combination looks on standard UI components like Buttons, Links, and Cards, ensuring your designs are both beautiful and legally compliant.
      </p>
    </>
  ),
  howToUse: [
    {
      step: 'Select Foreground and Background',
      desc: 'Use the color pickers on the right to define your Text Color (Foreground) and your Background Color. You can manually enter HEX codes or use the visual selection grid.',
    },
    {
      step: 'Review the Contrast Ratio',
      desc: 'Look at the "Contrast Results" panel. The system calculates a ratio (e.g., 4.5:1). A higher number means higher contrast.',
    },
    {
      step: 'Check WCAG Compliance',
      desc: 'The tool breaks down compliance into four categories: AA Normal Text, AA Large Text, AAA Normal Text, and AAA Large Text. Green checkmarks indicate a pass, while red X\'s indicate a failure.',
    },
    {
      step: 'Test in the Live Preview',
      desc: 'Switch between Text, Button, Link, and Card modes in the Live Preview panel. This gives you immediate context on whether the colors feel visually comfortable, regardless of the raw mathematical score.',
    },
  ],
  examples: [
    {
      title: 'Testing Primary Buttons',
      desc: 'A common mistake is using white text on a bright brand color (like a vibrant cyan). While it looks modern, it almost always fails WCAG AA standards. Use the checker to find the exact point you need to darken the cyan to make the white text accessible.',
    },
    {
      title: 'Designing Dark Mode Surfaces',
      desc: 'Dark mode isn\'t just black and white. If you are using a dark gray background with light gray text, use the tool to ensure the contrast ratio remains above 4.5:1. Text that is too dark will cause severe eye strain.',
    },
    {
      title: 'Evaluating Link Colors',
      desc: 'Inline links must contrast with both the background AND the surrounding text. Use the "Link" preview mode to verify that your link color stands out while remaining legible.',
    },
  ],
  benefits: [
    'Instantly calculates precise contrast ratios based on the official WCAG relative luminance formula.',
    'Provides actionable AI suggestions when a color combination fails.',
    'Live component previews eliminate the disconnect between mathematical scores and actual UI implementation.',
    'Allows one-click swapping of foreground and background colors to test inverted states.',
  ],
  mistakes: [
    'Assuming that "Passable for Large Text" means the color combination is safe to use everywhere. Large text is defined as 18pt (24px) or 14pt bold (18.5px bold). If your text is smaller, it fails.',
    'Relying purely on the math. A ratio of 4.51:1 technically passes AA, but if it visually strains your eyes, you should increase the contrast further.',
    'Checking contrast on a perfectly calibrated monitor and assuming it will look the same on a cheap, low-brightness mobile screen.',
  ],
  proTips: [
    'If you are locked into a brand color that fails contrast with white text, try adding a very subtle drop shadow to the text. (Note: The checker cannot mathematically verify shadows, but it drastically improves perceived contrast).',
    'When designing forms, the borders of your input fields must have a contrast ratio of at least 3:1 against the background to pass WCAG Non-text Contrast guidelines.',
    'Aim for AAA compliance (7:1 ratio) for long-form reading content (like blog posts) to maximize user comfort.',
  ],
  faqs: [
    {
      question: 'What is the difference between AA and AAA?',
      answer: 'WCAG AA is the standard legal requirement for most business and government websites (requiring a 4.5:1 ratio for normal text). AAA is the gold standard for accessibility (requiring a 7:1 ratio), usually targeted by specialized applications for the elderly or visually impaired.',
    },
    {
      question: 'How is the contrast ratio calculated?',
      answer: 'The ratio is calculated using the relative luminance of the colors, representing how bright they appear to the human eye. The formula is (L1 + 0.05) / (L2 + 0.05), where L1 is the lighter color and L2 is the darker color.',
    },
    {
      question: 'Does this tool account for color blindness?',
      answer: 'While this tool measures raw contrast, high contrast generally benefits users with color vision deficiencies. However, you should never rely on color alone to convey meaning (e.g., using only red to indicate an error). Always include icons or text labels.',
    },
  ],
  relatedTools: [
    { name: 'Color Picker', href: '/color-picker' },
    { name: 'Palette Generator', href: '/color-palette-generator' },
    { name: 'Color Theory', href: '/color-theory' },
  ],
};
