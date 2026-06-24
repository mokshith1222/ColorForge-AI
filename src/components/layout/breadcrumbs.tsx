'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/json-ld';

export function Breadcrumbs() {
  const pathname = usePathname();
  
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  
  const breadcrumbs = segments.map((segment, index) => {
    const url = `/${segments.slice(0, index + 1).join('/')}`;
    // Format the segment to be readable (e.g. 'color-picker' -> 'Color Picker')
    const name = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
      
    return { name, url };
  });

  const schemaItems = [{ name: 'Home', url: '/' }, ...breadcrumbs];

  return (
    <>
      <JsonLd type="BreadcrumbList" data={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 py-4 mt-16 md:mt-20 flex items-center text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-foreground flex items-center transition-colors">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return (
              <li key={breadcrumb.url} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
                {isLast ? (
                  <span className="font-medium text-foreground" aria-current="page">
                    {breadcrumb.name}
                  </span>
                ) : (
                  <Link href={breadcrumb.url} className="hover:text-foreground transition-colors">
                    {breadcrumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
