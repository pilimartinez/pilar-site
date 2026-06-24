// Generates public/cv.pdf from the CV content (the uploaded .docx couldn't be
// converted in this environment, so we re-typeset it cleanly with pdfkit —
// selectable text, branded to match the site). Run: node scripts/generate-cv.mjs
import PDFDocument from 'pdfkit';
import { createWriteStream } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/cv.pdf');

const ACCENT = '#047857';
const INK = '#1a1a1a';
const MUTED = '#5c5c57';

const doc = new PDFDocument({ size: 'A4', margins: { top: 54, bottom: 54, left: 56, right: 56 } });
doc.pipe(createWriteStream(out));

const W = doc.page.width - doc.page.margins.left - doc.page.margins.right;

function heading(text) {
  doc.moveDown(0.8);
  doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(11).text(text.toUpperCase(), { characterSpacing: 1.5 });
  const y = doc.y + 3;
  doc.moveTo(doc.page.margins.left, y).lineTo(doc.page.margins.left + W, y).strokeColor('#e6e5e0').lineWidth(1).stroke();
  doc.moveDown(0.6);
}

function role(title, meta, dates) {
  doc.fillColor(INK).font('Helvetica-Bold').fontSize(11).text(title, { continued: false });
  doc.fillColor(MUTED).font('Helvetica').fontSize(9.5).text(`${meta}${dates ? '   ·   ' + dates : ''}`);
  doc.moveDown(0.3);
}

function bullets(items) {
  doc.fillColor(INK).font('Helvetica').fontSize(9.5);
  for (const it of items) {
    doc.text('•  ' + it, { indent: 6, lineGap: 1.5, paragraphGap: 3 });
  }
}

// ── Header ───────────────────────────────────────────────
doc.fillColor(INK).font('Helvetica-Bold').fontSize(22).text('Pilar Martinez Montiel');
doc.fillColor(ACCENT).font('Helvetica-Bold').fontSize(11).text('Product Engineer  ·  Buenos Aires, Argentina  ·  Remote');
doc.moveDown(0.15);
doc.fillColor(MUTED).font('Helvetica').fontSize(9.5)
  .text('pilar.m4rtinez@gmail.com   ·   linkedin.com/in/pilar-martinez-mon   ·   github.com/pilimartinez');
doc.moveDown(0.5);
doc.fillColor(INK).font('Helvetica').fontSize(10).text(
  'Product engineer with 7+ years building web products end to end, from MVPs to apps used by large enterprise customers. I work close to product, design and users, helping shape product direction and turning bets into shipped features, with an eye on adoption and outcomes rather than code alone.',
  { lineGap: 1.5 }
);
doc.moveDown(0.4);
doc.text(
  'Comfortable in asynchronous, remote-first product teams, owning work across the stack. Focus on component architecture, design systems and frontend testing. Vue day to day; React and React Native from earlier roles, plus Node.js across products and side projects.',
  { lineGap: 1.5 }
);

// ── Skills ───────────────────────────────────────────────
heading('Skills');
const skills = [
  ['Languages & Frameworks', 'TypeScript, JavaScript, Vue.js, React.js, React Native, Node.js, HTML, CSS, TailwindCSS.'],
  ['Design Systems & UI', 'Figma, reusable component libraries, dark mode, accessibility, responsive design.'],
  ['Testing & Quality', 'Playwright, end-to-end testing, manual QA, CI/CD.'],
  ['Backend & Infra', 'Node.js, REST APIs, Terraform, Go (open-source work), Docker.'],
  ['Tooling', 'Git, GitHub Actions.'],
];
doc.fontSize(9.5);
for (const [k, v] of skills) {
  doc.fillColor(ACCENT).font('Helvetica-Bold').text(k + ':  ', { continued: true });
  doc.fillColor(INK).font('Helvetica').text(v);
  doc.moveDown(0.15);
}

// ── Experience ───────────────────────────────────────────
heading('Professional Experience');
role('Checkly — Product Engineer', 'Sep 2021 – Present', '2022 – Present');
bullets([
  "Contributed to Playwright Check Suites, Checkly's flagship product that turns a team's existing Playwright end-to-end tests into globally distributed production monitors. Adoption grew roughly 2.5x in its first seven months after launch.",
  'Sole engineer on the Playwright Reporter for several months: scaled it from 0 to 1,500+ test sessions per month and grew active reporting accounts 7.5x in six months by shipping asset-upload routing, decompression and large-payload fixes, unblocking large enterprise customers handling 100MB+ payloads.',
  "Built and shipped the Checkly Traces UI, the user-facing layer of Checkly's OpenTelemetry distributed-tracing product.",
  "Shipped into Checkly's highest-traffic surfaces, including the Dashboard (around 6.5 to 9k unique users per month).",
  'Frontend on-call owner and primary engineering routing point for enterprise customer escalations, including CEO and CTO-level handoffs.',
  'Embedded as an engineer in the growth and marketing team, running experiments, building the company website and implementing SEO improvements alongside an external agency.',
]);
doc.moveDown(0.4);
role('Checkly — Open Source Engineer', 'Sep 2021 – 2022');
bullets([
  "Built and maintained open-source developer tooling around Checkly's public API, working across Node.js, Terraform, Go and Vue.",
  'Contributed to publicly available projects in the Checkly repositories, helping developers configure and manage monitoring as code.',
]);
doc.moveDown(0.4);
role('Tixcode — Front-end Developer', 'Buenos Aires, Argentina', 'Sep 2020 – Sep 2021');
bullets([
  'Built mobile and web applications with React, React Native and Vue.js in an Agile (Scrum) team.',
  'Worked on projects such as Red Atlas (real-estate data and analytics) and Wallbit in its early days (a Y Combinator-backed neobank), doing frontend development and manual QA.',
]);
doc.moveDown(0.4);
role('Avature — QA Analyst', 'Sep 2019 – Sep 2020');
bullets([
  'Manual testing and creation of test cases.',
  'Incident reporting.',
  'Cross-browser and cross-device testing.',
]);

// ── Community ────────────────────────────────────────────
heading('Community');
bullets([
  'asaditojs: Core team member of a tech community that runs workshops and shares free learning resources (since 2019).',
]);

// ── Education ────────────────────────────────────────────
heading('Education');
role('Ada ITW — Front-end Development Program', '2019');
doc.fillColor(INK).font('Helvetica').fontSize(9.5).text('HTML5, CSS, Node.js, SASS, JavaScript, JSON, jQuery, React. Responsive web development with agile methodologies.', { lineGap: 1.5 });
doc.moveDown(0.3);
role('Universidad Tecnológica Nacional (UTN) — Professional Diploma in Marketing', '2018');
doc.fillColor(INK).font('Helvetica').fontSize(9.5).text('Social media planning and strategy for real cases; Google Analytics, SEO/SEM positioning, target-audience definition and SWOT analysis.', { lineGap: 1.5 });

// ── Certifications ───────────────────────────────────────
heading('Certifications');
bullets(['Enterprise Design Thinking Practitioner · IBM (Jun 2019)']);

doc.end();
console.log('Wrote', out);
