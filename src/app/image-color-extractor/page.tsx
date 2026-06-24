import { constructMetadata } from '@/lib/seo';
import { ImageExtractorClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { imageExtractorContent } from '@/content/image-color-extractor-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Image Color Palette Extractor | ColorForge AI',
  description: 'Upload any image to instantly extract its dominant color and full palette. Generate 100% accurate, client-side UI color schemes from photos.',
  path: '/image-color-extractor',
});

export default function ImageExtractorPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <ImageExtractorClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...imageExtractorContent} />
      </div>
    </div>
  );
}
