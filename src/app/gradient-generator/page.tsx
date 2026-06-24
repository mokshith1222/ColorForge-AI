import { constructMetadata } from '@/lib/seo';
import { GradientGeneratorClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { gradientGeneratorContent } from '@/content/gradient-generator-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'CSS Gradient Generator | ColorForge AI',
  description: 'Create complex linear, radial, and conic gradients with our precision visual builder. Export instantly to CSS or Tailwind.',
  path: '/gradient-generator',
});

export default function GradientGeneratorPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <GradientGeneratorClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...gradientGeneratorContent} />
      </div>
    </div>
  );
}
