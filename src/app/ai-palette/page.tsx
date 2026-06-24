import { constructMetadata } from '@/lib/seo';
import { AIPaletteClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { aiPaletteContent } from '@/content/ai-palette-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'AI Palette Generator | ColorForge AI',
  description: 'Generate beautiful color palettes instantly using AI prompts. Describe the mood, brand, or setting and let AI do the rest.',
  path: '/ai-palette',
});

export default function AIPalettePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <AIPaletteClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...aiPaletteContent} />
      </div>
    </div>
  );
}
