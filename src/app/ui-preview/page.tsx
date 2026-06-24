import { constructMetadata } from '@/lib/seo';
import { UIPreviewClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { uiPreviewContent } from '@/content/ui-preview-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'UI Palette Preview | ColorForge AI',
  description: 'See your color palettes applied to real UI components like buttons, cards, alerts, and typography before committing to them.',
  path: '/ui-preview',
});

export default function UIPreviewPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <UIPreviewClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...uiPreviewContent} />
      </div>
    </div>
  );
}
