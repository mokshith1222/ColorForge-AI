import { Metadata } from 'next';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Disclaimer | ColorForge AI',
  description: 'Legal disclaimer for the use of ColorForge AI tools, educational content, and code generators.',
};

export default function DisclaimerPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Disclaimer', url: '/disclaimer' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <JsonLd type="BreadcrumbList" data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <div className="mb-12">
         <h1 className="text-4xl font-extrabold tracking-tight mb-4">Disclaimer</h1>
         <p className="text-muted-foreground">Last Updated: October 2023</p>
      </div>

      <div className="space-y-8 text-lg leading-relaxed text-foreground/80">
        <section>
          <p>
            The information and tools provided by ColorForge AI are for general informational and utility purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information or generated code on the Site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Accessibility Checker Disclaimer</h2>
          <p>
            Our Accessibility Checker implements the Web Content Accessibility Guidelines (WCAG) 2.1 contrast formula to calculate the mathematical contrast ratio between foreground and background colors. While we strive for 100% mathematical accuracy, this tool is intended as a helpful guide and does not constitute formal legal compliance.
          </p>
          <p className="mt-4">
            Factors such as font weight, font size, anti-aliasing, and specific display hardware can alter perceived contrast. We highly recommend conducting manual accessibility audits with assistive technologies and human testers to ensure full compliance with regional accessibility laws (e.g., ADA, EAA).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">External Links Disclaimer</h2>
          <p>
            The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
          </p>
        </section>
      </div>
    </div>
  );
}
