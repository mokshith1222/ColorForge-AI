import { Metadata } from 'next';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Terms and Conditions | ColorForge AI',
  description: 'Read the Terms and Conditions for using ColorForge AI, including intellectual property rights, user conduct, and limitations of liability.',
};

export default function TermsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Terms and Conditions', url: '/terms' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <JsonLd type="BreadcrumbList" data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <div className="mb-12">
         <h1 className="text-4xl font-extrabold tracking-tight mb-4">Terms and Conditions</h1>
         <p className="text-muted-foreground">Last Updated: October 2023</p>
      </div>

      <div className="space-y-8 text-lg leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using ColorForge AI ("we", "our", "us"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on ColorForge AI's website for personal, non-commercial transitory viewing only.
          </p>
          <p className="mt-4">
            Under this license you may not:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>modify or copy the underlying site source code;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial) without attributing ColorForge AI;</li>
            <li>attempt to decompile or reverse engineer any software contained on ColorForge AI's website;</li>
            <li>remove any copyright or other proprietary notations from the materials;</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property Rights for Generated Assets</h2>
          <p>
            Any color palettes, gradient CSS code, Tailwind configuration files, and design tokens generated using ColorForge AI's tools are freely available for you to use in your personal and commercial projects without attribution. We do not claim ownership over the specific hex codes or palettes you generate.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
          <p>
            In no event shall ColorForge AI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ColorForge AI's website, even if ColorForge AI or a ColorForge AI authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Revisions and Errata</h2>
          <p>
            The materials appearing on ColorForge AI's website could include technical, typographical, or photographic errors. ColorForge AI does not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>
      </div>
    </div>
  );
}
