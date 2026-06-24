import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0A0A0A', // Dark background for apple icon
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: 40,
        }}
      >
        <svg viewBox="0 0 100 100" width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M75 25C65 15 50 10 35 15C15 22 5 45 10 65C15 85 35 95 55 90C65 87 72 80 78 72"
            stroke="url(#grad1)"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M68 32C60 25 48 22 38 28C26 35 20 50 25 62C30 75 45 80 55 75C62 71 68 65 72 58"
            stroke="url(#grad2)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M72 58C78 48 90 50 95 60C100 70 85 85 75 80C68 76 65 65 60 62"
            stroke="url(#grad2)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <rect x="80" y="15" width="5" height="5" rx="1" fill="#BD00FF" />
          <rect x="92" y="22" width="4" height="4" rx="1" fill="#FF0055" />
          <rect x="85" y="30" width="6" height="6" rx="1" fill="#FF7A2A" />
          <rect x="95" y="38" width="4" height="4" rx="1" fill="#FFC92A" />
          <rect x="78" y="40" width="5" height="5" rx="1" fill="#00E5FF" />
          <rect x="90" y="50" width="3" height="3" rx="1" fill="#3300FF" />

          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="50%" stopColor="#3300FF" />
              <stop offset="100%" stopColor="#BD00FF" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF0055" />
              <stop offset="50%" stopColor="#FF7A2A" />
              <stop offset="100%" stopColor="#FFC92A" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
