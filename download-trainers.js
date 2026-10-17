const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'images', 'trainer');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// High quality official artwork of Pokemon Trainer Red (FireRed/LeafGreen / Masters artwork)
const trainerUrls = {
  'red.png': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/red.png',
  'red_lgpe.png': 'https://play.pokemonshowdown.com/sprites/trainers/red-gen7.png',
  'ash.png': 'https://play.pokemonshowdown.com/sprites/trainers/ash-alola.png',
  'red_official.png': 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/trainers/1.png'
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Saved: ${path.basename(dest)}`);
          resolve();
        });
      } else {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        resolve(); // Don't fail the whole script
      }
    }).on('error', (err) => {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve();
    });
  });
}

async function main() {
  console.log('Downloading high quality trainer artwork...');
  for (const [name, url] of Object.entries(trainerUrls)) {
    const dest = path.join(dir, name);
    await download(url, dest);
  }
}

main();
