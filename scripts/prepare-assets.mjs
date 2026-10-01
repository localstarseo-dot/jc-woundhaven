import { createRequire } from 'node:module';
import { mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
let sharp;
try { sharp = require('sharp'); }
catch {
  const modules = process.env.WOUNDHAVEN_NODE_MODULES || '/Users/radznasaudia/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules';
  sharp = require(path.join(modules, 'sharp'));
}
const images = [
  { name: 'home-care-hero', source: 'assets/WoundHaven_Batch2_Mobile_Wound_Care/03_home_consultation.png', widths: [640, 960, 1200] },
  { name: 'bedside-care', source: 'assets/WoundHaven_Batch2_Mobile_Wound_Care/07_patient_caregiver_provider.png', widths: [640, 960] },
  { name: 'wound-documentation', source: 'assets/WoundHaven_Batch4_Technology/05_digital_clinical_documentation.png', widths: [640, 960] },
  { name: 'wound-care-hero', source: 'assets/WoundHaven_Batch2_Mobile_Wound_Care/04_treatment_plan_review.png', widths: [640, 960, 1200] },
  { name: 'wound-assessment', source: 'assets/WoundHaven_Batch3_Service_Treatment/01_advanced_wound_assessment.png', widths: [640, 960] },
  { name: 'wounds-we-treat-hero', source: 'assets/WoundHaven_Batch2_Mobile_Wound_Care/06_non_graphic_wound_assessment.png', widths: [640, 960, 1200] },
  { name: 'about-hero', source: 'assets/WoundHaven_Batch1_Team_Providers/warm_home_healthcare_visit.png', widths: [640, 960, 1200] },
  { name: 'about-care-model', source: 'assets/WoundHaven_Batch2_Mobile_Wound_Care/01_provider_arriving_at_home.png', widths: [640, 960] },
  { name: 'technology-hero', source: 'assets/WoundHaven_Batch4_Technology/04_tablet_during_assessment.png', widths: [640, 960, 1200] },
  { name: 'patient-centered-care', source: 'assets/WoundHaven_Batch5_Patient_Outcomes/03_family_caregiver_interaction.png', widths: [640, 960] },
  { name: 'team-preparation', source: 'assets/WoundHaven_Batch1_Team_Providers/woundhaven_team_preparing_together.png', widths: [640, 960, 1200] },
  { name: 'brand-pattern-light', source: 'assets/WoundHaven_Batch7_Supporting_Graphics_Final/01_light_woundhaven_brand_pattern.png', widths: [960, 1440] },
  { name: 'brand-pattern-navy', source: 'assets/WoundHaven_Batch7_Supporting_Graphics_Final/02_dark_navy_woundhaven_brand_pattern.png', widths: [960, 1440] },
  { name: 'clinical-technology-graphic', source: 'assets/WoundHaven_Batch7_Supporting_Graphics_Final/03_clinical_technology_graphic.png', widths: [640, 960, 1200] },
  { name: 'patient-referral-pathway', source: 'assets/WoundHaven_Batch7_Supporting_Graphics_Final/04_patient_family_referral_pathway.png', widths: [640, 960, 1200] },
  { name: 'provider-referral-pathway', source: 'assets/WoundHaven_Batch7_Supporting_Graphics_Final/05_healthcare_provider_referral_pathway.png', widths: [640, 960, 1200] },
];
await mkdir(path.join(root, 'assets/web'), { recursive: true });
const manifest = [];
for (const image of images) {
  for (const width of image.widths) {
    const output = `assets/web/${image.name}-${width}.webp`;
    const result = await sharp(path.join(root, image.source)).resize({ width, withoutEnlargement: true }).webp({ quality: 82 }).toFile(path.join(root, output));
    manifest.push({ source: image.source, output, width: result.width, height: result.height, bytes: result.size });
  }
  console.log(`${image.name}: original ${(await stat(path.join(root, image.source))).size} bytes, ${image.widths.length} responsive derivatives`);
}
await writeFile(path.join(root, 'assets/web/manifest.json'), `${JSON.stringify({ note: 'Resize/compression only. Original source photos remain unchanged. People and device provenance are not verified by this manifest.', images: manifest }, null, 2)}\n`);
