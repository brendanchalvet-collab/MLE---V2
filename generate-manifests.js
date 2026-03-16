const fs   = require('fs');
const path = require('path');

const EVENTS_DIR = './assets/images/events';

const folders = fs.readdirSync(EVENTS_DIR).filter(f =>
  fs.statSync(path.join(EVENTS_DIR, f)).isDirectory()
);

folders.forEach(folder => {
  const folderPath = path.join(EVENTS_DIR, folder);
  const files = fs.readdirSync(folderPath)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort();

  const manifest = { folder, photos: files };
  fs.writeFileSync(
    path.join(folderPath, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`✓ ${folder} — ${files.length} photos`);
});

console.log('\nManifests générés !');