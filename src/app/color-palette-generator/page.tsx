import { constructMetadata } from '@/lib/seo';
import { PaletteGeneratorClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { paletteGeneratorContent } from '@/content/palette-generator-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Color Palette Generator | ColorForge AI',
  description: 'Instantly generate mathematically harmonious color palettes. Explore Monochromatic, Analogous, Complementary, and Triadic schemes.',
  path: '/color-palette-generator',
});

export default function PaletteGeneratorPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <PaletteGeneratorClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...paletteGeneratorContent} />
      </div>
    </div>
  );
}
