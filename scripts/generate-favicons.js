const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

/**
 * Generate favicon files from SVG
 */

async function generateFavicons() {
  const svgPath = path.join(__dirname, '../public/livboss-icon-square.svg');
  const publicDir = path.join(__dirname, '../public');
  
  console.log('🎨 Generating Favicon Files...\n');

  try {
    // Read SVG
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate favicon-16x16.png
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✅ Created: favicon-16x16.png');

    // Generate favicon-32x32.png
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✅ Created: favicon-32x32.png');

    // Generate android-chrome-192x192.png
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
    console.log('✅ Created: android-chrome-192x192.png');

    // Generate apple-touch-icon.png (180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✅ Created: apple-touch-icon.png');

    // Generate favicon.ico (32x32 as fallback)
    // Note: ICO format requires special handling, using PNG as fallback
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32.png'));
    
    // Copy as favicon.ico (browsers accept PNG with .ico extension)
    fs.copyFileSync(
      path.join(publicDir, 'favicon-32.png'),
      path.join(publicDir, 'favicon.ico')
    );
    fs.unlinkSync(path.join(publicDir, 'favicon-32.png'));
    console.log('✅ Created: favicon.ico');

    console.log('\n🎉 All favicon files generated successfully!');
    console.log('\n📋 Generated files:');
    console.log('   - public/favicon.ico');
    console.log('   - public/favicon-16x16.png');
    console.log('   - public/favicon-32x32.png');
    console.log('   - public/android-chrome-192x192.png');
    console.log('   - public/apple-touch-icon.png');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();

