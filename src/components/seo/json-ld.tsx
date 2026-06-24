import React from 'react';

export type SchemaType = 'WebPage' | 'WebApplication' | 'Article' | 'FAQPage' | 'BreadcrumbList' | 'Organization';

interface JsonLdProps {
  type: SchemaType;
  data: any;
}

export function JsonLd({ type, data }: JsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper to generate FAQ Schema structure
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Helper to generate Breadcrumb Schema structure
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://colorforge.ai${item.url}`,
    })),
  };
}
