import { constructMetadata } from '@/lib/seo';
import { AccessibilityCheckerClient } from './client-page';
import { ToolContentLayout } from '@/components/seo/tool-content-layout';
import { accessibilityCheckerContent } from '@/content/accessibility-checker-seo';
import { AuroraBackground } from '@/components/home/aurora-background';

export const metadata = constructMetadata({
  title: 'WCAG Accessibility Color Contrast Checker | ColorForge AI',
  description: 'Instantly calculate color contrast ratios. Ensure your design system meets WCAG AA and AAA accessibility standards.',
  path: '/accessibility-checker',
});

export default function AccessibilityCheckerPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AuroraBackground />
      <AccessibilityCheckerClient />
      <div className="relative z-10 w-full bg-background/95 backdrop-blur-sm pb-24">
        <ToolContentLayout {...accessibilityCheckerContent} />
      </div>
    </div>
  );
}
