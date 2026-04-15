const fs = require('fs');
const path = require('path');

const srcPath = 'd:/code/jjlmoya-utils-drones/src';

// 1. Fix heading to title in gps-coordinates-converter
const gpsI18nDir = path.join(srcPath, 'tool/gps-coordinates-converter/i18n');
const gpsFiles = fs.readdirSync(gpsI18nDir);
for (const file of gpsFiles) {
  if (file.endsWith('.ts')) {
    const filePath = path.join(gpsI18nDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/type:\s*'heading'/g, "type: 'title'");
    fs.writeFileSync(filePath, content);
  }
}

// 2. Fix slugs for sharingLocales (ja, ko, zh)
const tools = [
  { dir: 'tool/drone-flight-time/i18n', slug: 'drone-flight-time-calculator' },
  { dir: 'tool/antenna-length-calculator/i18n', slug: 'antenna-length-calculator' },
  { dir: 'tool/gps-coordinates-converter/i18n', slug: 'gps-coordinates-converter' }
];
const sharingLocales = ['ja.ts', 'ko.ts', 'zh.ts'];
for (const tool of tools) {
  const i18nDir = path.join(srcPath, tool.dir);
  for (const locale of sharingLocales) {
    const filePath = path.join(i18nDir, locale);
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/const slug = '.*?';/, "const slug = '" + tool.slug + "';");
      fs.writeFileSync(filePath, content);
    }
  }
}

// 3. Fix Portuguese slug for gps-coordinates-converter
const ptFilePath = path.join(srcPath, 'tool/gps-coordinates-converter/i18n/pt.ts');
if (fs.existsSync(ptFilePath)) {
  let content = fs.readFileSync(ptFilePath, 'utf8');
  content = content.replace(/const slug = 'conversor-coordenadas-gps';/, "const slug = 'conversor-de-coordenadas-gps';");
  fs.writeFileSync(ptFilePath, content);
}

// 4. Fix category de title
const catDePath = path.join(srcPath, 'category/i18n/de.ts');
if (fs.existsSync(catDePath)) {
  let content = fs.readFileSync(catDePath, 'utf8');
  content = content.replace(/title: 'Drohnen- und Funkamateur-Tools & Rechner',/, "title: 'Drohnen und Funkamateur Tools & Rechner',");
  fs.writeFileSync(catDePath, content);
}

console.log('Automated fixes completed.');
