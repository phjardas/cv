<script>
  import Header from './Header.svelte'
  import Layout from './Layout.svelte'
  import { analyzeJob } from './analyze'

  export let job

  $: analysis = analyzeJob(job.job)
</script>

<style>
  .main {
    padding: 0 2rem 2rem;
  }

  .analysis-text {
    white-space: pre-wrap;
    border: 1px solid var(--primary);
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px var(--primary);
  }

  .match {
    font-weight: 500;
    border-bottom: 1px solid transparent;
  }

  .match-positive {
    background: #cfc;
    border-color: #090;
  }

  .match-negative {
    background: #fcc;
    border-color: #900;
  }

  @media only screen and (max-width: 500px) {
    .main {
      padding: 0 10vw 10vw;
    }
  }
</style>

<Layout>
  <Header />
  <main class="main">
    <h2>
      Hi, {job.name}!
      <span role="img" aria-label="Waving hand">👋</span>
    </h2>
    <p>
      Thank you for filling out my form. Here's what my algorithm thinks about
      it:
    </p>
    <div class="analysis-text">
      {#each job.analysis.text as token}
        {#if typeof token === 'string'}
          {token}
        {:else}
          <span
            class="match"
            class:match-positive={token.score > 0}
            class:match-negative={token.score < 0}
            title={token.reason}>
            {token.text}
          </span>
        {/if}
      {/each}
    </div>
  </main>
</Layout>
