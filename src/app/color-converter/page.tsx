import { constructMetadata } from '@/lib/seo';
import { ColorConverterClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { colorConverterContent } from '@/content/color-converter-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Ultimate Color Converter | ColorForge AI',
  description: 'Convert colors between HEX, RGB, HSL, HSV, CMYK instantly with extreme precision. The only color converter tool you need.',
  path: '/color-converter',
});

export default function ColorConverterPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <ColorConverterClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...colorConverterContent} />
      </div>
    </div>
  );
}
