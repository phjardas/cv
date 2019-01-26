const saturation = {
  primary: '58%',
  secondary: '100%',
}

const brightness = {
  primary: '42%',
  primaryLight: '50%',
  secondary: '65%',
}

function createStyles(hue) {
  return {
    '--primary': `hsl(${hue}, ${saturation.primary}, ${brightness.primary})`,
    '--primary-light': `hsl(${hue}, ${saturation.primary}, ${
      brightness.primaryLight
    })`,
    '--secondary': `hsl(${hue}, ${saturation.secondary}, ${
      brightness.secondary
    })`,
  }
}

function animateHue() {
  window.cvAnimationRunning = true
  const body = document.getElementsByTagName('body')[0]
  let hue = 258

  const increaseHue = () => {
    hue = (hue + 1) % 360
    const styles = createStyles(hue)
    Object.keys(styles).forEach(key => body.style.setProperty(key, styles[key]))
  }

  setInterval(increaseHue, 500)
}

if (!window.cvAnimationRunning) animateHue()
