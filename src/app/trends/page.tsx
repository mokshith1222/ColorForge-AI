import { Metadata } from 'next';
import { TrendsClientPage } from './client-page';
import { JsonLd, generateFAQSchema } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Color Trends 2024 & Curated Palettes | ColorForge AI',
  description: 'Explore the latest color trends, Colors of the Year, and our massive collection of hand-curated color palettes. Perfect for UI design, branding, and web development.',
  openGraph: {
    title: 'Color Trends & Curated Palettes | ColorForge AI',
    description: 'Explore the latest color trends, Colors of the Year, and our massive collection of hand-curated color palettes.',
    type: 'website',
    url: 'https://colorforge.ai/trends',
  },
  alternates: {
    canonical: 'https://colorforge.ai/trends',
  }
};

const faqs = [
  {
    question: 'What is the Pantone Color of the Year 2024?',
    answer: 'The Pantone Color of the Year 2024 is Peach Fuzz (Hex: #FFBE98). It is a velvety, gentle peach tone that enriches mind, body, and soul.'
  },
  {
    question: 'How do I use these trending color palettes?',
    answer: 'You can browse our curated collections and click "Save Palette" to store them in your personal Collections dashboard. You can then use them across any ColorForge AI tool.'
  },
  {
    question: 'Are these color palettes free to use commercially?',
    answer: 'Yes! All color palettes provided on ColorForge AI are completely free to use in both personal and commercial projects. No attribution required.'
  }
];

export default function TrendsPage() {
  return (
    <>
      <JsonLd 
        type="BreadcrumbList"
        data={{
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://colorforge.ai',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Trends',
              item: 'https://colorforge.ai/trends',
            }
          ]
        }}
      />
      <JsonLd type="FAQPage" data={generateFAQSchema(faqs)} />
      
      <TrendsClientPage />
    </>
  );
}
