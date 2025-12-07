const fs = require('fs');
const path = require('path');
const markdownpdf = require('markdown-pdf');

const inputFile = path.join(__dirname, '../docs/livboss-broccoli-liver-whitepaper.md');
const outputFile = path.join(__dirname, '../public/docs/livboss-broccoli-liver-whitepaper.pdf');

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// PDF options with custom styling
const options = {
  paperFormat: 'A4',
  paperBorder: '2cm',
  cssPath: path.join(__dirname, 'whitepaper-pdf-styles.css'),
};

console.log('Generating PDF from markdown...');
console.log('Input:', inputFile);
console.log('Output:', outputFile);

markdownpdf(options)
  .from(inputFile)
  .to(outputFile, function (err) {
    if (err) {
      console.error('Error generating PDF:', err);
      process.exit(1);
    }
    console.log('✅ PDF generated successfully!');
    console.log('📄 File location:', outputFile);
  });
