import React from 'react';
import Link from 'next/link';
import { JsonLd, generateFAQSchema } from '@/components/seo/json-ld';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { BookOpen, CheckCircle, Lightbulb, TriangleAlert, ArrowRight } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface ToolContentProps {
  toolName?: string;
  title?: string;
  introduction?: React.ReactNode;
  description?: React.ReactNode;
  features?: { title: string; description: string; icon: React.ReactNode }[];
  howToUse?: { step: string; desc: string }[];
  examples?: { title: string; desc: string }[];
  benefits?: string[];
  mistakes?: string[];
  proTips?: string[];
  faqs?: FAQ[];
  relatedTools?: { name: string; href: string }[];
}

export function ToolContentLayout({
  toolName,
  title,
  introduction,
  description,
  features = [],
  howToUse = [],
  examples = [],
  benefits = [],
  mistakes = [],
  proTips = [],
  faqs = [],
  relatedTools = [],
}: ToolContentProps) {
  const displayTitle = toolName || title;
  const displayIntro = introduction || description;

  return (
    <article className="container mx-auto px-4 py-24 max-w-4xl space-y-24 border-t border-border mt-24">
      
      {/* Introduction */}
      {displayIntro && (
      <section className="prose dark:prose-invert prose-lg max-w-none">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What is the {displayTitle}?</h2>
        <div className="text-muted-foreground leading-relaxed">
          {displayIntro}
        </div>
      </section>
      )}

      {/* Features */}
      {features.length > 0 && (
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <Card key={i} className="glass">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{feat.title}</h3>
                <p className="text-sm text-muted-foreground">{feat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      )}

      {/* How To Use */}
      {howToUse.length > 0 && (
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">How To Use This Tool</h2>
        </div>
        <div className="space-y-6">
          {howToUse.map((item, i) => (
            <div key={i} className="flex gap-4 p-6 glass rounded-2xl border-white/5">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Practical Examples */}
      {examples.length > 0 && (
      <section>
        <h2 className="text-3xl font-bold mb-8">Practical Examples & Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {examples.map((ex, i) => (
            <Card key={i} className="glass">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-foreground">{ex.title}</h3>
                <p className="text-sm text-muted-foreground">{ex.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      )}

      {/* Benefits vs Mistakes (Split View) */}
      {(benefits.length > 0 || mistakes.length > 0) && (
      <div className="grid md:grid-cols-2 gap-12">
        {benefits.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle className="h-6 w-6 text-green-500" />
            <h2 className="text-2xl font-bold">Key Benefits</h2>
          </div>
          <ul className="space-y-4">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>
        )}
        
        {mistakes.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-6">
            <TriangleAlert className="h-6 w-6 text-yellow-500" />
            <h2 className="text-2xl font-bold">Common Mistakes</h2>
          </div>
          <ul className="space-y-4">
            {mistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </section>
        )}
      </div>
      )}

      {/* Pro Tips */}
      {proTips.length > 0 && (
      <section className="bg-accent/5 border border-accent/20 rounded-3xl p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Lightbulb className="w-48 h-48" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold">Pro Tips from Designers</h2>
          </div>
          <ul className="space-y-4">
            {proTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
      <section>
        <JsonLd type="FAQPage" data={generateFAQSchema(faqs)} />
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <Accordion className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      )}

      {/* Internal Linking / Related Tools */}
      {relatedTools.length > 0 && (
      <section className="pt-8 border-t border-border">
        <h2 className="text-2xl font-bold mb-6">Explore Related Tools</h2>
        <div className="flex flex-wrap gap-4">
          {relatedTools.map((t, i) => (
            <Link key={i} href={t.href}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors text-sm font-medium">
                {t.name} <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>
      )}
    </article>
  );
}
