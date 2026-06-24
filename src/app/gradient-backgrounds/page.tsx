import { constructMetadata } from '@/lib/seo';
import { GradientBackgroundsClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { gradientBackgroundsContent } from '@/content/gradient-backgrounds-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: '1000+ Beautiful CSS Gradients | ColorForge AI',
  description: 'A curated collection of over 1000 beautiful, ready-to-use CSS gradients. Click to copy the CSS or Tailwind classes instantly.',
  path: '/gradient-backgrounds',
});

export default function GradientBackgroundsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <GradientBackgroundsClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...gradientBackgroundsContent} />
      </div>
    </div>
  );
}
