import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/150?u=sarah",
    content: "ColorForge has completely changed the way I work. The tools are fast, beautiful and incredibly helpful."
  },
  {
    name: "Devansh Verma",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?u=devansh",
    content: "As a developer, the Tailwind generator and accessibility checker are absolute game changers."
  },
  {
    name: "Alex Morgan",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?u=alex",
    content: "The AI palette generator gives me ideas I would have never thought of. Highly recommended!"
  }
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-24 bg-background relative z-10 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold">What Creators Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="glass hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 flex flex-col h-full justify-between gap-6">
                <p className="text-muted-foreground leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
