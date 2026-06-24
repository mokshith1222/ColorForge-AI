import { Metadata } from 'next';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Cookie Policy | ColorForge AI',
  description: 'Explanation of how ColorForge AI uses cookies, Local Storage, and third-party tracking for functionality and analytics.',
};

export default function CookiesPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Cookie Policy', url: '/cookies' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <JsonLd type="BreadcrumbList" data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <div className="mb-12">
         <h1 className="text-4xl font-extrabold tracking-tight mb-4">Cookie Policy</h1>
         <p className="text-muted-foreground">Last Updated: October 2023</p>
      </div>

      <div className="space-y-8 text-lg leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you browse a website. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information.
          </p>
          <p className="mt-4">
            At ColorForge AI, we rely heavily on <strong>Local Storage</strong> rather than traditional HTTP cookies for core functionality, ensuring a faster and more private experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Local Storage</h2>
          <p>
            We use your browser's Local Storage (specifically via Zustand's persist middleware under the key `colorforge-storage`) to save your preferred colors, generated palettes, gradients, and UI preferences (like dark/light mode).
          </p>
          <p className="mt-4">
            This data never leaves your device. It is not transmitted to our servers and is strictly used to persist your workflow between sessions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Cookies</h2>
          <p>
            We use third-party services that may set cookies on your device:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-4">
            <li>
              <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors engage with our site. These cookies track metrics such as time spent on the site and pages visited.
            </li>
            <li>
              <strong>Google AdSense:</strong> We use Google AdSense to serve advertisements. Google uses cookies to serve ads based on your prior visits to ColorForge AI or other websites. You can opt out of personalized advertising by visiting Google's Ads Settings.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Managing Cookies</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though some access to functionality and areas of our website may be restricted.
          </p>
          <p className="mt-4">
            To clear your saved colors and palettes, you can use the "Clear History" button within the app, or manually clear the `colorforge-storage` key from your browser's Local Storage via Developer Tools.
          </p>
        </section>
      </div>
    </div>
  );
}
