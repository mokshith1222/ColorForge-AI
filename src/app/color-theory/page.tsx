import { constructMetadata } from '@/lib/seo';
import { ColorTheoryClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { colorTheoryContent } from '@/content/color-theory-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Color Theory Masterclass & Guide | ColorForge AI',
  description: 'Understand the science and psychology behind color. A dynamic guide to color harmonies, the color wheel, and how to use color psychology in UI design.',
  path: '/color-theory',
});

export default function ColorTheoryPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <ColorTheoryClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...colorTheoryContent} />
      </div>
    </div>
  );
}
