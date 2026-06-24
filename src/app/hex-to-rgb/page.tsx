import { constructMetadata } from '@/lib/seo';
import { HexToRgbClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { hexToRgbContent } from '@/content/hex-to-rgb-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'HEX to RGB Converter | ColorForge AI',
  description: 'Instantly convert HEX color codes to RGB and RGBA. Get the exact CSS values you need with our precise converter tool.',
  path: '/hex-to-rgb',
});

export default function HexToRgbPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <HexToRgbClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...hexToRgbContent} />
      </div>
    </div>
  );
}
