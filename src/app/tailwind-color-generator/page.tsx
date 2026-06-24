import { constructMetadata } from '@/lib/seo';
import { TailwindGeneratorClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { tailwindGeneratorContent } from '@/content/tailwind-generator-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Tailwind CSS Color Scale Generator | ColorForge AI',
  description: 'Generate perfect 50-950 Tailwind CSS color scales from a single hex code. Includes live UI component previews and instant code export.',
  path: '/tailwind-color-generator',
});

export default function TailwindGeneratorPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <TailwindGeneratorClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...tailwindGeneratorContent} />
      </div>
    </div>
  );
}
