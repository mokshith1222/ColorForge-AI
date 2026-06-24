import { Metadata } from 'next';

const DOMAIN = 'https://colorforge.ai'; // Update to real domain later

export function constructMetadata({
  title = 'ColorForge AI | The Ultimate Color Design Engine',
  description = 'Generate perfect palettes, build complex gradients, and export directly to Tailwind CSS. All the color tools you need, united in one premium workflow.',
  image = '/og-image.jpg',
  icons = '/favicon.ico',
  noIndex = false,
  path = '',
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
  path?: string;
} = {}): Metadata {
  const url = `${DOMAIN}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: 'ColorForge AI',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@colorforgeai',
    },
    icons,
    metadataBase: new URL(DOMAIN),
    alternates: {
      canonical: url,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
