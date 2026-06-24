import { Metadata } from 'next';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Privacy Policy | ColorForge AI',
  description: 'Learn how ColorForge AI protects your data, respects your privacy, and handles local browser storage for color collections.',
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <JsonLd type="BreadcrumbList" data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <div className="mb-12">
         <h1 className="text-4xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
         <p className="text-muted-foreground">Last Updated: October 2023</p>
      </div>

      <div className="space-y-8 text-lg leading-relaxed text-foreground/80">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
          <p>
            Welcome to ColorForge AI. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
          </p>
          <p className="mt-4">
            ColorForge AI was built with a "Privacy-First" architecture. Almost all of our tools process data entirely on your local machine.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Local Storage Data</h3>
          <p>
            When you use the "Save" feature for colors or palettes, this data is saved directly in your browser's Local Storage using Zustand persist middleware. We do <strong>not</strong> send this data to any external server or database. It remains strictly on your device.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Image Processing</h3>
          <p>
            Our Image Color Extractor tool uses the HTML5 Canvas API to process images directly in your browser. We do <strong>not</strong> upload your images to our servers.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">Newsletter Subscriptions</h3>
          <p>
            If you choose to subscribe to our newsletter, we collect your email address. This is processed securely via Brevo and is used exclusively to send you updates about ColorForge AI. We will never sell your email to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Third-Party Analytics and Advertising</h2>
          <p>
            We use third-party services such as Google Analytics and Google AdSense to monitor traffic and display advertisements. These third-party vendors use cookies to serve ads based on your prior visits to our website or other websites.
          </p>
          <p className="mt-4">
            Google's use of advertising cookies enables it and its partners to serve ads based on your browsing history. You may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Your Data Rights</h2>
          <p>
            Depending on your location, you may have rights regarding your personal data under the GDPR, CCPA, or other applicable laws. Since the majority of your usage data is stored locally on your device, you can delete it at any time by clearing your browser cache and local storage.
          </p>
          <p className="mt-4">
            To unsubscribe from our newsletter and have your email removed from our mailing list, click the "unsubscribe" link at the bottom of any email we send you.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us via our <a href="/contact" className="text-primary hover:underline">Contact Page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
