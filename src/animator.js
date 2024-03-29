import { getContrastText } from "./colors";

const saturation = {
  primary: 58,
  secondary: 100,
};

const brightness = {
  primary: 42,
  primaryLight: 50,
  secondary: 65,
};

const text = {
  dark: [0, 0, 0, 0.9],
  light: [255, 255, 255],
  subtitle: [255, 255, 255, 0.7],
};

function createStyles(hue) {
  const primary = [hue, saturation.primary, brightness.primary];
  const primaryLight = [hue, saturation.primary, brightness.primaryLight];
  const primaryText = getContrastText(primary, text.light, text.dark);
  const subtitleText = getContrastText(primary, text.subtitle, text.dark);
  const secondary = [hue, saturation.secondary, brightness.secondary];
  const secondaryText = getContrastText(secondary, text.light, text.dark);

  return {
    "--primary": `${hsl(primary)}`,
    "--primary-text": `${rgb(primaryText)}`,
    "--primary-light": `${hsl(primaryLight)}`,
    "--subtitle-text": `${rgb(subtitleText)}`,
    "--secondary": `${hsl(secondary)}`,
    "--secondary-text": `${rgb(secondaryText)}`,
  };
}

function hsl(color) {
  return `hsl(${color[0]}, ${color[1]}%, ${color[2]}%)`;
}

function rgb(color) {
  return `rgb${color.length === 4 ? "a" : ""}(${color.join(", ")})`;
}

function animateHue() {
  const root = document.documentElement;
  let hue = Math.floor(Math.random() * 360);

  const increaseHue = () => {
    hue = (hue + 1) % 360;
    const styles = createStyles(hue);
    Object.keys(styles).forEach((key) =>
      root.style.setProperty(key, styles[key]),
    );
  };

  setInterval(increaseHue, 500);
  increaseHue();
}

let cvAnimationRunning = false;
window.addEventListener("DOMContentLoaded", () => {
  if (cvAnimationRunning) return;
  cvAnimationRunning = true;
  animateHue();
});
