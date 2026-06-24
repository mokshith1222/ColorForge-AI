export const designSystemsContent = {
  toolName: 'Design Systems Color Guide',
  introduction: (
    <>
      <p className="mb-4">
        A design system is the single source of truth that groups all the elements that will allow teams to design, realize, and develop a product. When it comes to color in a design system, hardcoding HEX values across hundreds of files is a recipe for maintenance nightmares and visual inconsistency.
      </p>
      <p className="mb-4">
        The solution is a multi-tiered token architecture. By separating colors into Global Tokens (the absolute primitive values) and Semantic Tokens (how the colors are actually used), you create a highly scalable system that inherently supports complex requirements like dynamic theming and Dark Mode.
      </p>
      <p>
        The ColorForge AI Design Systems Guide visually demonstrates this architecture. Using your active base color, it instantly generates a production-ready token structure, explaining the crucial roles of Primary, Secondary, Muted, and Feedback colors in your UI hierarchy.
      </p>
    </>
  ),
  howToUse: [
    {
      step: 'Define your Core Brand Color',
      desc: 'Everything starts with your brand. Select your active color in the tool, and watch as the entire architectural demonstration re-calculates to fit your brand identity.',
    },
    {
      step: 'Review the Global Tokens',
      desc: 'Notice how your single color is expanded into a full 100-900 scale. These are your primitives (e.g., brand-500). They never change contextually.',
    },
    {
      step: 'Understand Semantic Aliases',
      desc: 'See how primitives are mapped to semantic aliases (e.g., color-primary maps to brand-500). This mapping is what you actually use in your CSS/Tailwind classes.',
    },
    {
      step: 'Copy the Implementation',
      desc: 'At the bottom of the page, review the exact Tailwind CSS configuration required to implement this specific architecture in your own codebase.',
    },
  ],
  examples: [
    {
      title: 'Implementing Dark Mode',
      desc: 'Instead of writing `bg-white dark:bg-slate-900` everywhere in your code, semantic tokens allow you to write `bg-background`. The design system handles the swap behind the scenes: `--color-background: var(--white)` in light mode, and `--color-background: var(--slate-900)` in dark mode.',
    },
    {
      title: 'Rebranding an Application',
      desc: 'If a company rebrands from Blue to Purple, an app built with semantic tokens requires exactly ONE line of code to change: mapping `--color-primary` from `var(--blue-500)` to `var(--purple-500)`.',
    },
  ],
  benefits: [
    'Provides a crystal clear, visual explanation of complex token architectures.',
    'Dynamically generates a cohesive system based on any single hex code you provide.',
    'Includes actionable Tailwind CSS boilerplate to immediately start building.',
  ],
  mistakes: [
    'Naming semantic tokens after their appearance rather than their function. Never name a token `--color-light-gray` if its purpose is for a disabled button. Name it `--color-action-disabled`.',
    'Using too many colors. A robust design system rarely needs more than 2-3 core brand colors, plus standard semantic colors for feedback (success, error, warning).',
  ],
  proTips: [
    'Use standard scales (50, 100-900, 950) for your primitives. 500 should almost always be the "base" color that passes accessibility against white.',
    'When building your grayscale, do not use pure `#808080` gray. Always tint your grays slightly with your brand color. This is called a "cool" or "warm" gray, and it makes the entire interface feel vastly more cohesive.',
  ],
  faqs: [
    {
      question: 'What is a Design Token?',
      answer: 'Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes like colors, spacing, typography, etc. They replace hard-coded values in order to maintain a scalable and consistent visual system.',
    },
    {
      question: 'Why should I use Tailwind CSS for this?',
      answer: 'Tailwind CSS natively supports consuming design tokens through its `tailwind.config.js` file. By defining your semantic tokens in the theme extension, Tailwind automatically generates the utility classes needed to apply them (e.g., `text-primary`, `bg-destructive`).',
    },
  ],
  relatedTools: [
    { name: 'Tailwind Generator', href: '/tailwind-color-generator' },
    { name: 'Palette Generator', href: '/color-palette-generator' },
    { name: 'Color Theory', href: '/color-theory' },
  ],
};
