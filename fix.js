const fs = require('fs');
const paths = [
  'src/app/color-palette-generator/client-page.tsx',
  'src/app/color-picker/client-page.tsx',
  'src/app/gradient-generator/client-page.tsx',
  'src/app/image-color-extractor/client-page.tsx',
  'src/app/tailwind-color-generator/client-page.tsx',
  'src/app/sitemap.ts'
];
for (const p of paths) {
  let content = fs.readFileSync(p, 'utf-8');
  content = content.replace(/\\`/g, '`');
  fs.writeFileSync(p, content);
}
console.log('Fixed');
