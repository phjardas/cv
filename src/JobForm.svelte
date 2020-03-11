<script>
  import { firestore, Firebase } from './firebase'
  import Header from './Header.svelte'
  import Layout from './Layout.svelte'

  let name = 'Philipp Jardas'
  let email = 'philipp@jardas.de'
  let job = 'This is a test.'
  let submitting = false
  let error
  export let onSubmit

  async function submit(e) {
    e.preventDefault()
    submitting = true
    error = null
    try {
      const ref = await firestore.collection('jobs').add({
        name,
        email,
        job,
        createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
      })
      const doc = await ref.get()
      onSubmit({ ...doc.data(), id: ref.id })
    } catch (err) {
      console.error(err)
      error = err
    } finally {
      submitting = false
    }
  }
</script>

<style>
  .main {
    padding: 0 2rem 2rem;
  }

  :global(p) {
    margin-bottom: 2rem;
  }

  .lead {
    font-size: 1.25rem;
  }

  .form-group {
    margin-bottom: 2rem;
  }

  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    padding: 0 1rem;
    color: #616161;
    font-weight: 300;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 1rem;
    font-size: 1.5rem;
    font-family: inherit;
    border: 1px solid #999999;
    border-radius: 0.5rem;
    transition: border-color 300ms linear, box-shadow 300ms linear;
  }

  .form-control:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 10px var(--primary-light);
  }

  .form-control-normal {
    font-size: 1rem;
  }

  .form-help {
    color: #616161;
    margin-top: 0.5rem;
    padding: 0 1rem;
  }

  .submit-button {
    display: block;
    margin: 0 1rem;
    background-color: var(--primary);
    color: var(--primary-text);
    border: none;
    padding: 1rem;
    font-size: 1.5rem;
    width: calc(100% - 2rem);
    border-radius: 0.5rem;
    transition: border-color 300ms linear, color 300ms linear,
      box-shadow 300ms linear;
  }

  .submit-button:focus,
  .submit-button:hover {
    outline: none;
    background-color: var(--primary-light);
    color: var(--primary-light-color);
    box-shadow: 0 0 10px var(--primary-light);
  }

  @media only screen and (max-width: 500px) {
    .main {
      padding: 0 10vw 10vw;
    }

    .form-label,
    .form-control,
    .submit-button {
      font-size: 1rem;
    }
  }
</style>

<Layout>
  <Header />
  <main class="main">
    <h2>
      Hi, I'm Philipp!
      <span role="img" aria-label="Waving hand">👋</span>
    </h2>
    <p class="lead">
      I've been developing software for the last 20 years. My main technologies
      are JavaScript, TypeScript, Node.js and React. I'm passionate about
      software startups, agile methodologies, software quality, serverless
      architecture, domain-driven design and accessibility.
    </p>
    <p>
      If you're a recruiter and would like to work with me, I would appreciate
      if you could fill out the form below to get instant access to my
      comprehensive CV.
    </p>
    <form on:submit={submit}>
      <div class="form-group">
        <label for="name" class="form-label">What's your name?</label>
        <input
          id="name"
          type="text"
          autocomplete="name"
          bind:value={name}
          required
          class="form-control"
          disabled={submitting} />
      </div>
      <div class="form-group">
        <label for="email" class="form-label">And your email address?</label>
        <input
          id="email"
          type="email"
          autocomplete="email"
          bind:value={email}
          required
          class="form-control"
          disabled={submitting} />
      </div>
      <div class="form-group">
        <label for="job" class="form-label">
          Please paste a description of the position you're trying to fill
        </label>
        <textarea
          id="job"
          bind:value={job}
          required
          rows="20"
          class="form-control form-control-normal"
          disabled={submitting} />
        <div class="form-help">
          The formatting doesn't really matter. Please include as much
          information as you can provide at this time.
        </div>
      </div>
      <button type="submit" class="submit-button" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  </main>
</Layout>
