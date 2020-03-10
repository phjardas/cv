const contrastThreshold = 3;

export function getContrastText(background, preferred, alternative) {
  return getContrastRatio(preferred, background) >= contrastThreshold ? preferred : alternative;
}

function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background, true);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

function hslToRgb(color) {
  const h = color[0];
  const s = color[1] / 100;
  const l = color[2] / 100;
  const a = s * Math.min(l, 1 - l);

  const f = (n) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

function getLuminance(color, hsl) {
  const rgb = (hsl ? hslToRgb(color) : color).map((val) => {
    val /= 255;
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

export function hsl(color) {
  return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
}

export function rgb(color) {
  return `rgb(${color.join(', ')})`;
}
