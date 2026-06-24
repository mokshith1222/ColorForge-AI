import { constructMetadata } from '@/lib/seo';
import { CssVarsClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { cssVarsContent } from '@/content/css-vars-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'CSS Variable Generator | ColorForge AI',
  description: 'Visually define your project colors and instantly generate CSS Custom Properties (:root variables) to copy into your stylesheet.',
  path: '/css-vars',
});

export default function CssVarsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <CssVarsClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...cssVarsContent} />
      </div>
    </div>
  );
}
