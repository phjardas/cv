<style>
  .subtitle {
    font-weight: 300;
    color: var(--subtitle-text);
    transition: color 300ms linear;
    margin-top: 10px;
    font-size: 1.5em;
    line-height: 1.5;
  }

  @media only screen and (max-width: 500px) {
    .subtitle {
      font-size: 4.7vw;
    }
  }

  @media only print {
    .subtitle {
      color: #000;
      background: none;
    }
  }
</style>

<div class="subtitle">
  <slot />
</div>
