import { constructMetadata } from '@/lib/seo';
import { RgbToHexClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { rgbToHexContent } from '@/content/rgb-to-hex-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'RGB to HEX Converter | ColorForge AI',
  description: 'Instantly convert RGB color values to HEX format. Perfect for translating design files into CSS-ready code.',
  path: '/rgb-to-hex',
});

export default function RgbToHexPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <RgbToHexClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...rgbToHexContent} />
      </div>
    </div>
  );
}
