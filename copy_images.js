import fs from 'fs';
import path from 'path';

const sourceDir = `C:\\Users\\shubh\\.gemini\\antigravity\\brain\\bbb27695-60e5-46c8-9dd3-6a3ecf0e0182`;
const targetDir = path.join(process.cwd(), 'public', 'images');

const files = fs.readdirSync(sourceDir);

files.forEach(file => {
  if (file.startsWith('celestial_sphere_pendant_')) {
    let destName = file;
    if (file.startsWith('celestial_sphere_pendant_main')) {
      destName = 'celestial_globe_main.png';
    } else if (file.startsWith('celestial_sphere_pendant_detail')) {
      destName = 'celestial_globe_detail.png';
    } else if (file.startsWith('celestial_sphere_pendant_room')) {
      destName = 'celestial_globe_room.png';
    }
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(targetDir, destName);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} -> ${destName}`);
  }
});
