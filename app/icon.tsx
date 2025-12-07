import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          position: 'relative',
        }}
      >
        {/* Inner frame */}
        <div
          style={{
            position: 'absolute',
            left: '96px',
            top: '96px',
            width: '320px',
            height: '320px',
            border: '10px solid #C6A664',
            borderRadius: '28px',
          }}
        />
        
        {/* Outer frame */}
        <div
          style={{
            position: 'absolute',
            left: '108px',
            top: '108px',
            width: '320px',
            height: '320px',
            border: '10px solid #C6A664',
            borderRadius: '28px',
          }}
        />
        
        {/* Center letter L */}
        <div
          style={{
            fontSize: '420px',
            fontWeight: 'bold',
            color: '#C6A664',
            display: 'flex',
            fontFamily: 'serif',
            letterSpacing: '0',
          }}
        >
          L
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
