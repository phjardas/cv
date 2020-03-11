<style>
  .title {
    margin: 0;
    font-size: 3em;
    text-transform: uppercase;
    color: var(--primary-text);
    transition: color 300ms linear;
  }

  @media only screen and (max-width: 500px) {
    .title {
      font-size: 9.5vw;
    }
  }

  @media only print {
    .title {
      color: #000;
      background: none;
    }
  }
</style>

<h1 class="title">
  <slot />
</h1>
