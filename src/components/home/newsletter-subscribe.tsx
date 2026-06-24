'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

export function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setEmail('');
    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center space-y-3 p-6 rounded-2xl bg-green-500/10 border border-green-500/20 text-center animate-in fade-in zoom-in duration-300">
          <CheckCircle className="h-10 w-10 text-green-500" />
          <h4 className="text-xl font-bold text-green-600 dark:text-green-400">You're in!</h4>
          <p className="text-sm text-green-600/80 dark:text-green-400/80">
            Thank you for subscribing. We've sent a welcome email to your inbox.
          </p>
          <Button variant="outline" size="sm" className="mt-2" onClick={() => setStatus('idle')}>
            Subscribe another email
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
          <div className="relative flex items-center w-full">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="pr-32 h-14 rounded-full bg-background/50 border-white/20 backdrop-blur-sm focus-visible:ring-primary/50 text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
            />
            <Button 
              type="submit" 
              className="absolute right-1.5 h-11 rounded-full px-6 transition-all"
              disabled={status === 'loading' || !email}
            >
              {status === 'loading' ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Send className="h-4 w-4 mr-2" />
              )}
              {status === 'loading' ? 'Joining...' : 'Subscribe'}
            </Button>
          </div>
          
          {status === 'error' && (
            <div className="flex items-center text-sm text-destructive font-medium pl-4 animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="h-4 w-4 mr-2 shrink-0" />
              {errorMessage}
            </div>
          )}
          
          <p className="text-xs text-center text-muted-foreground pt-2">
            We care about your data in our <a href="/privacy" className="underline hover:text-foreground">privacy policy</a>. No spam.
          </p>
        </form>
      )}
    </div>
  );
}
