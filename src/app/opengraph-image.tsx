import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'ColorForge AI - Design Better. Create Faster. With Colors.';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #000000, #111111, #0A0A0A)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Glow Effects */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(80px)' }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          {/* Logo SVG */}
          <svg viewBox="0 0 100 100" width="160" height="160" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75 25C65 15 50 10 35 15C15 22 5 45 10 65C15 85 35 95 55 90C65 87 72 80 78 72" stroke="url(#og1)" strokeWidth="16" strokeLinecap="round" fill="none" />
            <path d="M68 32C60 25 48 22 38 28C26 35 20 50 25 62C30 75 45 80 55 75C62 71 68 65 72 58" stroke="url(#og2)" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M72 58C78 48 90 50 95 60C100 70 85 85 75 80C68 76 65 65 60 62" stroke="url(#og2)" strokeWidth="8" strokeLinecap="round" fill="none" />
            <rect x="80" y="15" width="5" height="5" rx="1" fill="#BD00FF" />
            <rect x="92" y="22" width="4" height="4" rx="1" fill="#FF0055" />
            <rect x="85" y="30" width="6" height="6" rx="1" fill="#FF7A2A" />
            <rect x="95" y="38" width="4" height="4" rx="1" fill="#FFC92A" />
            <rect x="78" y="40" width="5" height="5" rx="1" fill="#00E5FF" />
            <rect x="90" y="50" width="3" height="3" rx="1" fill="#3300FF" />
            <defs>
              <linearGradient id="og1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="50%" stopColor="#3300FF" />
                <stop offset="100%" stopColor="#BD00FF" />
              </linearGradient>
              <linearGradient id="og2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF0055" />
                <stop offset="50%" stopColor="#FF7A2A" />
                <stop offset="100%" stopColor="#FFC92A" />
              </linearGradient>
            </defs>
          </svg>

          <div style={{ display: 'flex', alignItems: 'center', fontSize: 100, fontWeight: 900, color: 'white', letterSpacing: '-0.05em' }}>
            Color
            <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(to right, #3b82f6, #a855f7, #ec4899)', backgroundClip: 'text' }}>
              Forge
            </span>
            <div style={{ marginLeft: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 24px', borderRadius: '16px', background: 'transparent', border: '2px solid rgba(255,255,255,0.2)', fontSize: 40, fontWeight: 900, letterSpacing: '0.1em' }}>
              <span style={{ color: 'transparent', backgroundImage: 'linear-gradient(to bottom right, #60a5fa, #c084fc)', backgroundClip: 'text' }}>AI</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '60px', fontSize: 32, fontWeight: 700, color: '#A1A1AA', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Design Better <span style={{ margin: '0 12px', color: '#6366F1' }}>•</span> Create Faster <span style={{ margin: '0 12px', color: '#8B5CF6' }}>•</span> With Colors
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
