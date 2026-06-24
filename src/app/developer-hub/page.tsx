import { constructMetadata } from '@/lib/seo';
import { DeveloperHubClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { developerHubContent } from '@/content/developer-hub-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Developer Hub & APIs | ColorForge AI',
  description: 'Integrate our color utilities, APIs, and CLI tools directly into your workflow. Build beautiful applications faster.',
  path: '/developer-hub',
});

export default function DeveloperHubPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <DeveloperHubClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...developerHubContent} />
      </div>
    </div>
  );
}
