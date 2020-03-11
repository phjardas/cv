<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html),
  :global(body) {
    min-height: 100%;
  }

  :global(body) {
    font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: #bdbdbd;
    background: linear-gradient(#ffffff 0%, #bdbdbd 500px);
    color: rgb(33, 33, 33);
    text-rendering: optimizeLegibility;
    --primary: hsl(258, 58%, 42%);
    --primary-text: rgb(255, 255, 255);
    --subtitle-text: rgb(204, 204, 204);
    --primary-light: hsl(258, 58%, 50%);
    --secondary: hsl(258, 100%, 65%);
    --secondary-text: rgb(255, 255, 255);
    --page-border-radius: 8px;
  }

  :global(h1),
  :global(h2),
  :global(h3),
  :global(h4),
  :global(h5),
  :global(h6) {
    font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;
    color: #616161;
  }

  :global(a) {
    color: var(--primary);
    text-decoration: none;
  }

  :global(h2) {
    margin-top: 4rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  :global(h3) {
    margin-top: 2rem;
    margin-bottom: 0;
    font-size: 1.3em;
    font-weight: 400;
  }

  :global(p) {
    line-height: 1.5;
    margin: 0 0 10px;
  }

  :global(strong) {
    font-weight: 500;
  }

  :global(small) {
    color: #757575;
  }

  :global(address) {
    font-style: normal;
    line-height: 1.5;
  }

  @media only screen and (max-width: 900px) {
    :global(body) {
      --page-border-radius: 0;
    }
  }

  @media only screen and (max-width: 500px) {
    :global(h2) {
      margin-top: 10vw;
      margin-bottom: 5vw;
    }

    :global(h3) {
      margin-top: 5vw;
    }

    :global(p) {
      margin-bottom: 2vw;
    }
  }

  @media only print {
    :global(body) {
      --page-border-radius: 0;
      font-size: 11pt;
    }

    :global(body),
    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4),
    :global(h5),
    :global(h6),
    :global(a),
    :global(small) {
      color: #000;
      background: none;
    }

    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4),
    :global(h5),
    :global(h6) {
      page-break-after: avoid;
    }
  }
</style>

<slot />
