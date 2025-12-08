const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  console.log('🎨 Generating Open Graph Image...\n');

  const width = 1200;
  const height = 630;
  
  // Create SVG with brand design
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Background gradient -->
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#F9F7F4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#F0EDE5;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bg)"/>
      
      <!-- Decorative corner elements -->
      <line x1="80" y1="80" x2="180" y2="80" stroke="#C6A664" stroke-width="3"/>
      <line x1="80" y1="80" x2="80" y2="180" stroke="#C6A664" stroke-width="3"/>
      <line x1="${width-80}" y1="80" x2="${width-180}" y2="80" stroke="#C6A664" stroke-width="3"/>
      <line x1="${width-80}" y1="80" x2="${width-80}" y2="180" stroke="#C6A664" stroke-width="3"/>
      <line x1="80" y1="${height-80}" x2="180" y2="${height-80}" stroke="#C6A664" stroke-width="3"/>
      <line x1="80" y1="${height-80}" x2="80" y2="${height-180}" stroke="#C6A664" stroke-width="3"/>
      <line x1="${width-80}" y1="${height-80}" x2="${width-180}" y2="${height-80}" stroke="#C6A664" stroke-width="3"/>
      <line x1="${width-80}" y1="${height-80}" x2="${width-80}" y2="${height-180}" stroke="#C6A664" stroke-width="3"/>
      
      <!-- Double frame (Rolls-Royce style) -->
      <rect x="240" y="220" width="720" height="190" fill="none" stroke="#C6A664" stroke-width="4"/>
      <rect x="250" y="230" width="720" height="190" fill="none" stroke="#C6A664" stroke-width="4"/>
      
      <!-- Main text -->
      <text 
        x="${width/2}" 
        y="300" 
        text-anchor="middle" 
        font-family="Georgia, serif" 
        font-size="110" 
        fill="#4A3728" 
        font-weight="bold"
        letter-spacing="8"
      >
        LIVBOSS
      </text>
      
      <!-- Subtitle -->
      <text 
        x="${width/2}" 
        y="360" 
        text-anchor="middle" 
        font-family="Georgia, serif" 
        font-size="32" 
        fill="#8B7355"
        letter-spacing="6"
      >
        LIVER WELLNESS
      </text>
      
      <!-- Tagline -->
      <text 
        x="${width/2}" 
        y="520" 
        text-anchor="middle" 
        font-family="Georgia, serif" 
        font-size="24" 
        fill="#6B5D52"
        letter-spacing="2"
      >
        Premium Broccoli Sprout Formula for Liver Support
      </text>
    </svg>
  `;

  const outputPath = path.join(__dirname, '..', 'public', 'og-image.jpg');

  try {
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    console.log('✅ OG Image generated successfully!');
    console.log('📄 File location:', outputPath);
    console.log('📐 Size: 1200x630px');
    console.log('🎨 Format: JPEG (optimized for social media)\n');
  } catch (error) {
    console.error('❌ Error generating OG image:', error);
    process.exit(1);
  }
}

generateOGImage();
