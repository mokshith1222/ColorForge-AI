import { colord, extend } from 'colord';
import namesPlugin from 'colord/plugins/names';
import mixPlugin from 'colord/plugins/mix';
import a11yPlugin from 'colord/plugins/a11y';
import lchPlugin from 'colord/plugins/lch';
import cmykPlugin from 'colord/plugins/cmyk';
import hwbPlugin from 'colord/plugins/hwb';
import labPlugin from 'colord/plugins/lab';

extend([namesPlugin, mixPlugin, a11yPlugin, lchPlugin, cmykPlugin, hwbPlugin, labPlugin]);

export const isValidColor = (color: string): boolean => {
  return colord(color).isValid();
};

export const getContrastRatio = (color1: string, color2: string): number => {
  return colord(color1).contrast(color2);
};

export const isAccessible = (color1: string, color2: string, level: 'AA' | 'AAA' = 'AA', size: 'normal' | 'large' = 'normal'): boolean => {
  return colord(color1).isReadable(color2, { level, size });
};

export const generateTailwindScale = (baseColor: string): Record<number, string> => {
  const base = colord(baseColor);
  const isLight = base.isLight();
  
  // Generating a 50-950 scale using mix
  const scale: Record<number, string> = {
    50: base.mix('#ffffff', 0.9).toHex(),
    100: base.mix('#ffffff', 0.8).toHex(),
    200: base.mix('#ffffff', 0.6).toHex(),
    300: base.mix('#ffffff', 0.4).toHex(),
    400: base.mix('#ffffff', 0.2).toHex(),
    500: base.toHex(), // Base color
    600: base.mix('#000000', 0.2).toHex(),
    700: base.mix('#000000', 0.4).toHex(),
    800: base.mix('#000000', 0.6).toHex(),
    900: base.mix('#000000', 0.8).toHex(),
    950: base.mix('#000000', 0.9).toHex(),
  };

  return scale;
};

export const getColorFormats = (color: string) => {
  const c = colord(color);
  return {
    hex: c.toHex(),
    rgb: c.toRgbString(),
    hsl: c.toHslString(),
    hsv: c.toHsv() ? `hsv(${Math.round(c.toHsv().h)}, ${Math.round(c.toHsv().s)}%, ${Math.round(c.toHsv().v)}%)` : '',
    cmyk: c.toCmykString(),
    lch: c.toLchString(),
    lab: c.toLab() ? `lab(${Math.round(c.toLab().l)} ${Math.round(c.toLab().a)} ${Math.round(c.toLab().b)})` : '',
  };
};

export const generatePalettes = (baseColor: string) => {
  const base = colord(baseColor);
  
  return {
    monochromatic: [
      base.lighten(0.3).toHex(),
      base.lighten(0.15).toHex(),
      base.toHex(),
      base.darken(0.15).toHex(),
      base.darken(0.3).toHex(),
    ],
    analogous: [
      base.rotate(-30).toHex(),
      base.rotate(-15).toHex(),
      base.toHex(),
      base.rotate(15).toHex(),
      base.rotate(30).toHex(),
    ],
    complementary: [
      base.lighten(0.2).toHex(),
      base.toHex(),
      base.rotate(180).toHex(),
      base.rotate(180).darken(0.2).toHex(),
    ],
    triadic: [
      base.toHex(),
      base.rotate(120).toHex(),
      base.rotate(240).toHex(),
    ],
    tetradic: [
      base.toHex(),
      base.rotate(90).toHex(),
      base.rotate(180).toHex(),
      base.rotate(270).toHex(),
    ]
  };
};

