import fs from 'fs';
import https from 'https';
import path from 'path';

const candidates = [
  { name: 'celestial_globe_main.jpg', url: 'https://images.unsplash.com/photo-1543198181-e619b6951135?auto=format&fit=crop&w=1000&q=80' },
  { name: 'celestial_globe_detail.jpg', url: 'https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?auto=format&fit=crop&w=1000&q=80' },
  { name: 'celestial_globe_room.jpg', url: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=1000&q=80' },
  { name: 'celestial_globe_brass.jpg', url: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1000&q=80' }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location, dest).then(resolve).catch(reject);
      } else {
        reject(new Error(`Status ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const item of candidates) {
    const dest = path.join(process.cwd(), 'public', 'images', item.name);
    try {
      await download(item.url, dest);
      console.log(`Successfully downloaded ${item.name}`);
    } catch (err) {
      console.error(`Error downloading ${item.name}:`, err.message);
    }
  }
}

main();
