import { constructMetadata } from '@/lib/seo';
import { ColorPickerClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { colorPickerContent } from '@/content/color-picker-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Advanced Color Picker & Converter | ColorForge AI',
  description: 'A professional-grade color picker supporting HEX, RGB, HSL, CMYK, LAB, and LCH. Select, convert, and export perfect UI colors instantly.',
  path: '/color-picker',
});

export default function ColorPickerPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <ColorPickerClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...colorPickerContent} />
      </div>
    </div>
  );
}
