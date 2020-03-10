<script>
  import Styles from './Styles.svelte'
  import { onDestroy } from 'svelte'
  import { getContrastText, hsl, rgb } from './colors'

  const saturation = {
    primary: 58,
    secondary: 100,
  }

  const brightness = {
    primary: 42,
    primaryLight: 50,
    secondary: 65,
  }

  const text = {
    dark: [33, 33, 33],
    light: [255, 255, 255],
    subtitle: [204, 204, 204],
  }

  function createStyle(hue) {
    const primary = [hue, saturation.primary, brightness.primary]
    const primaryLight = [hue, saturation.primary, brightness.primaryLight]
    const primaryText = getContrastText(primary, text.light, text.dark)
    const subtitleText = getContrastText(primary, text.subtitle, text.dark)
    const secondary = [hue, saturation.secondary, brightness.secondary]
    const secondaryText = getContrastText(secondary, text.light, text.dark)

    return [
      `--primary: ${hsl(primary)}`,
      `--primary-text: ${rgb(primaryText)}`,
      `--primary-light: ${hsl(primaryLight)}`,
      `--subtitle-text: ${rgb(subtitleText)}`,
      `--secondary: ${hsl(secondary)}`,
      `--secondary-text: ${rgb(secondaryText)}`,
    ].join('; ')
  }

  const localStorageKey = 'cv:hue'
  let hue = parseInt(localStorage.getItem(localStorageKey), 10)
  if (isNaN(hue)) hue = 258

  $: style = createStyle(hue)
  const timer = setInterval(() => {
    hue = (hue + 1) % 360
    localStorage.setItem(localStorageKey, hue)
  }, 1000)
  onDestroy(() => clearInterval(timer))
</script>

<style>
  .page {
    margin: 50px auto;
    width: 1200px;
    background: white;
    box-shadow: 10px 10px 50px rgba(0, 0, 0, 0.3);
    border-radius: var(--page-border-radius);
  }

  @media only screen and (max-width: 1300px) {
    .page {
      margin: 50px;
      width: auto;
    }
  }

  @media only screen and (max-width: 900px) {
    .page {
      margin: 0;
    }
  }

  @media only print {
    .page {
      box-shadow: none;
      margin: 0;
      width: auto;
      max-width: auto;
    }
  }
</style>

<div class="page" {style}>
  <Styles>
    <slot />
  </Styles>
</div>
