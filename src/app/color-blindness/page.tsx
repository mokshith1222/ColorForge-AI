import { constructMetadata } from '@/lib/seo';
import { ColorBlindnessClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { colorBlindnessContent } from '@/content/color-blindness-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Color Blindness Simulator | ColorForge AI',
  description: 'Simulate how your color palettes appear to users with different forms of color vision deficiency (Protanopia, Deuteranopia, Tritanopia).',
  path: '/color-blindness',
});

export default function ColorBlindnessPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <ColorBlindnessClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...colorBlindnessContent} />
      </div>
    </div>
  );
}
