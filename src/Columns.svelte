<style>
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .main {
    flex: 1.61803398875;
    order: 2;
    padding-left: 2rem;
    padding-right: 4rem;
  }

  .aside {
    flex: 1;
    order: 1;
    text-align: right;
    padding-left: 4rem;
    padding-right: 2rem;
  }

  @media only screen and (max-width: 900px) {
    .aside,
    .main {
      flex: 1 1 100%;
      text-align: left;
      padding: 0 4rem;
    }
  }

  @media only screen and (max-width: 500px) {
    .aside,
    .main {
      padding: 0 10vw;
    }
  }

  @media only print {
    .main {
      padding-right: 0;
    }

    .aside {
      padding-left: 0;
    }
  }
</style>

<div class="wrapper">
  <main class="main">
    <slot name="main" />
  </main>
  <aside class="aside">
    <slot name="aside" />
  </aside>
</div>
