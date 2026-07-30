import fs from 'fs';
import https from 'https';
import path from 'path';

// List of high quality crystal chandelier image candidate URLs
const urls = [
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=80"
];

const dest = path.join(process.cwd(), 'public', 'images', 'jhoomer_royal_real.jpg');

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        download(res.headers.location).then(resolve).catch(reject);
      } else {
        reject(new Error(`Failed status ${res.statusCode}`));
      }
    }).on('error', reject);
  });
}

download(urls[0]).then(() => console.log('Downloaded image successfully')).catch(err => console.error(err));
