import { constructMetadata } from '@/lib/seo';
import { ThemeGeneratorClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { themeGeneratorContent } from '@/content/theme-generator-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Theme Generator & UI Builder | ColorForge AI',
  description: 'Generate complete design systems and UI themes from a single base color. Export as CSS variables or JSON.',
  path: '/theme-generator',
});

export default function ThemeGeneratorPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <ThemeGeneratorClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...themeGeneratorContent} />
      </div>
    </div>
  );
}
