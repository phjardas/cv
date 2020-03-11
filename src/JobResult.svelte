<script>
  import Header from './Header.svelte';
  import Layout from './Layout.svelte';
  import CV from './CV.svelte';
  import Title from './Title.svelte';
  import Main from './Main.svelte';
  import Subtitle from './Subtitle.svelte';
  import { analyzeJob } from './analyze';

  export let job;
  let cv = false;
  const showCV = () => (cv = true);

  $: analysis = analyzeJob(job.text);
</script>

<style>
  .analysis-text {
    white-space: pre-wrap;
    margin: 2rem 0;
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

  .button {
    display: inline-block;
    margin-top: 1rem;
    background-color: var(--primary-text);
    color: var(--primary);
    border: 1px solid var(--primary-text);
    font-size: inherit;
    font-family: inherit;
    font-weight: 300;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: background-color 300ms linear, color 300ms linear;
  }

  .button:focus,
  .button:hover {
    outline: none;
    background-color: var(--primary);
    color: var(--primary-text);
  }
</style>

{#if cv}
  <CV />
{:else}
  <Layout>
    <Header>
      <Main>
        <Title>
          Hi, {job.name}!
          <span role="img" aria-label="Waving hand">👋</span>
        </Title>
        <Subtitle>
          Thank you for filling out my form!
          <br />
          My highly sophisticated artificial intelligence has come to the following analysis.
          <br />
          <button class="button" href="/cv" on:click={showCV}>Show my CV</button>
        </Subtitle>
      </Main>
    </Header>
    <Main>
      <div class="analysis-text">
        {#each analysis.text as token}
          {#if typeof token === 'string'}
            {token}
          {:else}
            <span class="match" class:match-positive={token.score > 0} class:match-negative={token.score < 0} title={token.reason}>{token.text}</span>
          {/if}
        {/each}
      </div>
    </Main>
  </Layout>
{/if}
