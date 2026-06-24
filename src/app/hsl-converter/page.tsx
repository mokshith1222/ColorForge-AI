import { constructMetadata } from '@/lib/seo';
import { HslConverterClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { hslConverterContent } from '@/content/hsl-converter-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'HSL Color Converter | ColorForge AI',
  description: 'Translate any color into human-readable Hue, Saturation, and Lightness. The preferred format for UI/UX designers and programmatic theming.',
  path: '/hsl-converter',
});

export default function HslConverterPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <HslConverterClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...hslConverterContent} />
      </div>
    </div>
  );
}
