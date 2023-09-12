import light from './paletteLight';
import dark from './paletteDark';

const palette = (color, mode) => {
  if (mode === 'light') {
    return light[color];
  }
  return dark[color];
};

export default palette;
