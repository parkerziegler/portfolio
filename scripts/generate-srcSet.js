const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '../public/maps');

const sizes = [
  { width: 480, suffix: 'sm' },
  { width: 800, suffix: 'md' },
  { width: 1080, suffix: 'lg' },
  { width: 1280, suffix: 'xl' },
  { width: 1600, suffix: 'xxl' }
];

fs.readdirSync(root).forEach((dir) => {
  const subDirectory = path.join(root, dir);
  const isDirectory = fs.lstatSync(subDirectory).isDirectory();

  if (isDirectory) {
    fs.readdirSync(subDirectory)
      .filter(
        (file) =>
          path.extname(file) !== '.pdf' &&
          file !== '.DS_Store' &&
          file.match(/-sm|-md|-lg|-xl|-xxl/g) === null
      )
      .forEach((file) => {
        sizes.forEach(({ width, suffix }) => {
          const basename = path.basename(file, '.png');
          const sourceFilePath = path.join(subDirectory, file);
          const targetFilePath = path.join(
            subDirectory,
            `${basename}-${suffix}.png`
          );

          if (!fs.existsSync(targetFilePath)) {
            sharp(sourceFilePath).resize(width).toFile(targetFilePath);
          }
        });
      });
  }
});
