import { constructMetadata } from '@/lib/seo';
import { TokensClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { tokensContent } from '@/content/tokens-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'Design Token Generator | ColorForge AI',
  description: 'Create and export semantic design tokens (W3C format, Style Dictionary, JSON) to bridge the gap between design and development.',
  path: '/tokens',
});

export default function TokensPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <TokensClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...tokensContent} />
      </div>
    </div>
  );
}
