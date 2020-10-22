const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const root = path.resolve(__dirname, '../public');

const sizes = [
  { width: 480, suffix: 'sm' },
  { width: 800, suffix: 'md' },
  { width: 1080, suffix: 'lg' },
  { width: 1280, suffix: 'xl' },
  { width: 1600, suffix: 'xxl' }
];

fs.readdirSync(root).forEach((dir) => {
  const pageAssets = path.join(root, dir);
  const traverse =
    fs.lstatSync(pageAssets).isDirectory() &&
    dir !== 'favicon' &&
    dir !== 'logos';

  if (traverse) {
    fs.readdirSync(pageAssets).forEach((pageDir) => {
      const assets = path.join(pageAssets, pageDir);
      const traverseAssets = fs.lstatSync(assets).isDirectory();

      if (traverseAssets) {
        fs.readdirSync(assets)
          .filter(
            (file) =>
              path.extname(file) === '.png' &&
              file !== '.DS_Store' &&
              file.match(/-sm|-md|-lg|-xl|-xxl/g) === null
          )
          .forEach((file) => {
            sizes.forEach(({ width, suffix }) => {
              const basename = path.basename(file, '.png');
              const sourceFilePath = path.join(assets, file);
              const targetFilePath = path.join(
                assets,
                `${basename}-${suffix}.png`
              );
              if (!fs.existsSync(targetFilePath)) {
                sharp(sourceFilePath).resize(width).toFile(targetFilePath);
              }
            });
          });
      }
    });
  }
});
