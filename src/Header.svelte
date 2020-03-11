<script>
  import Columns from './Columns.svelte';
</script>

<style>
  .page-header {
    background: var(--primary);
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, var(--primary) 50%, var(--primary) 100%);
    padding: 80px 0;
    position: relative;
    border-top-left-radius: var(--page-border-radius);
    border-top-right-radius: var(--page-border-radius);
  }

  @media only screen and (max-width: 500px) {
    .page-header {
      padding: 10vw 0;
    }
  }

  @media only print {
    .page-header {
      padding-bottom: 0;
      color: #000;
      background: none;
    }
  }
</style>

<header class="page-header">
  <slot />
</header>
