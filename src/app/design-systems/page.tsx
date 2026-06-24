import { constructMetadata } from '@/lib/seo';
import { DesignSystemsClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { designSystemsContent } from '@/content/design-systems-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Color in Design Systems | ColorForge AI',
  description: 'A definitive guide to structuring scalable, semantic, and accessible color tokens for modern design systems and Tailwind CSS architectures.',
  path: '/design-systems',
});

export default function DesignSystemsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <DesignSystemsClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...designSystemsContent} />
      </div>
    </div>
  );
}
