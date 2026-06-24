import { constructMetadata } from '@/lib/seo';
import { ExportClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { exportContent } from '@/content/export-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Color Export Center | ColorForge AI',
  description: 'Export your color palettes into CSS, SCSS, Tailwind config, Android XML, or iOS Swift instantly.',
  path: '/export',
});

export default function ExportPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <ExportClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...exportContent} />
      </div>
    </div>
  );
}
