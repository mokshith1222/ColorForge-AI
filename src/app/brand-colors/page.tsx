import { constructMetadata } from '@/lib/seo';
import { BrandColorsClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { brandColorsContent } from '@/content/brand-colors-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Official Brand Colors Explorer & Reference | ColorForge AI',
  description: 'Discover, analyze, and export the official color palettes of thousands of top brands like Google, Apple, and Netflix. Perfect for accurate third-party integrations.',
  path: '/brand-colors',
});

export default function BrandColorsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <BrandColorsClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...brandColorsContent} />
      </div>
    </div>
  );
}
