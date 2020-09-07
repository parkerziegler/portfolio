import { imageSizes } from './constants';

export function generateSrcSet(src) {
  const srcBasepath = src.split('.')[0];
  const srcSet = imageSizes.map(
    ({ size, suffix }) => `${srcBasepath}-${suffix}.png ${size}w`
  );

  return srcSet;
}
