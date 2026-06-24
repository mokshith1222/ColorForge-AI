import { Metadata } from 'next';
import { JsonLd, generateBreadcrumbSchema } from '@/components/seo/json-ld';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Contact Us | ColorForge AI',
  description: 'Get in touch with the ColorForge AI team for support, feature requests, or business inquiries.',
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <JsonLd type="BreadcrumbList" data={generateBreadcrumbSchema(breadcrumbs)} />
      
      <div className="text-center mb-16 max-w-2xl mx-auto">
         <h1 className="text-5xl font-extrabold tracking-tight mb-6">Contact Us</h1>
         <p className="text-xl text-muted-foreground leading-relaxed">
            Have a question, feedback, or need support? We'd love to hear from you. Fill out the form below or reach out directly.
         </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1 space-y-8">
           <div className="p-6 bg-card border border-border/50 rounded-2xl shadow-sm">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground text-sm mb-4">For general inquiries, partnerships, and support.</p>
              <a href="mailto:mokshithnaik932@gmail.com" className="text-primary font-medium hover:underline">mokshithnaik932@gmail.com</a>
           </div>

           <div className="p-6 bg-card border border-border/50 rounded-2xl shadow-sm">
              <MessageSquare className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-bold mb-2">Feature Requests</h3>
              <p className="text-muted-foreground text-sm mb-4">Want a new color tool? Let us know on Twitter or via email.</p>
              <a href="https://twitter.com/colorforgeai" target="_blank" rel="noreferrer" className="text-accent font-medium hover:underline">@ColorForgeAI</a>
           </div>
        </div>

        <div className="md:col-span-2">
           <form className="bg-card p-8 rounded-2xl border border-border/50 shadow-sm space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                    <input type="text" id="name" className="w-full flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="John Doe" />
                 </div>
                 <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <input type="email" id="email" className="w-full flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="mokshithnaik932@gmail.com" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                 <input type="text" id="subject" className="w-full flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="How can we help you?" />
              </div>
              <div className="space-y-2">
                 <label htmlFor="message" className="text-sm font-medium">Message</label>
                 <textarea id="message" rows={6} className="w-full flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter your message here..."></textarea>
              </div>
              <Button type="button" className="w-full h-12 text-base">Send Message</Button>
           </form>
        </div>
      </div>
    </div>
  );
}
