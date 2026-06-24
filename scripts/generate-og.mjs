// Generates public/og-image.png (1200×630) from an inline SVG using sharp.
// Run once at setup / whenever the branding changes:  node scripts/generate-og.mjs
// No proprietary assets — just type on a branded background.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/og-image.png');

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f1211"/>
      <stop offset="1" stop-color="#13201b"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="12" height="630" fill="#34d399"/>
  <g font-family="Geist, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif">
    <text x="90" y="280" fill="#ededec" font-size="78" font-weight="600" letter-spacing="-1.5">Pilar Martinez Montiel</text>
    <text x="90" y="360" fill="#34d399" font-size="40" font-weight="600" letter-spacing="-0.5">Product engineer building developer tools.</text>
  </g>
  <text x="90" y="560" fill="#5c6b64" font-size="24" font-weight="500" letter-spacing="2"
    font-family="Geist, ui-sans-serif, system-ui, sans-serif">GITHUB.COM/PILIMARTINEZ</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
