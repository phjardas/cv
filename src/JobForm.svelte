<script>
  import { firestore, Firebase } from './firebase';
  import Header from './Header.svelte';
  import Layout from './Layout.svelte';
  import Title from './Title.svelte';
  import Main from './Main.svelte';
  import Subtitle from './Subtitle.svelte';

  let name = '';
  let email = '';
  let text = '';
  let submitting = false;
  let error;
  export let onSubmit;

  async function submit(e) {
    e.preventDefault();
    submitting = true;
    error = null;
    try {
      const ref = await firestore.collection('jobs').add({
        name,
        email,
        text,
        createdAt: Firebase.firestore.FieldValue.serverTimestamp(),
      });
      const doc = await ref.get();
      onSubmit({ ...doc.data(), id: ref.id });
    } catch (err) {
      console.error(err);
      error = err;
    } finally {
      submitting = false;
    }
  }
</script>

<style>
  .job-form {
    padding-top: 2rem;
  }

  .job-form :global(p) {
    margin-bottom: 2rem;
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
    font-family: inherit;
    font-weight: 300;
    width: calc(100% - 2rem);
    border-radius: 0.5rem;
    transition: border-color 300ms linear, color 300ms linear, box-shadow 300ms linear;
  }

  .submit-button:focus,
  .submit-button:hover {
    outline: none;
    background-color: var(--primary-light);
    color: var(--primary-light-color);
    box-shadow: 0 0 10px var(--primary-light);
  }

  @media only screen and (max-width: 500px) {
    .form-label,
    .form-control,
    .submit-button {
      font-size: 1rem;
    }
  }
</style>

<Layout>
  <Header>
    <Main>
      <Title>Hi, I'm Philipp!</Title>
      <Subtitle>
        I'm a full-stack software engineer with more than 20 years of experience. My main technologies are JavaScript, TypeScript, Node.js and React. I'm
        passionate about software startups, accessibility, agile methodologies, diversity, software quality, serverless architecture and domain-driven design.
      </Subtitle>
    </Main>
  </Header>
  <Main>
    <div class="job-form">
      <p>If you're a recruiter and would like to work with me, I would appreciate if you could fill out the form below to get instant access to my CV.</p>
      <form on:submit={submit}>
        <div class="form-group">
          <label for="name" class="form-label">What's your name?</label>
          <input id="name" type="text" autocomplete="name" bind:value={name} required class="form-control" disabled={submitting} />
        </div>
        <div class="form-group">
          <label for="email" class="form-label">And your email address?</label>
          <input id="email" type="email" autocomplete="email" bind:value={email} required class="form-control" disabled={submitting} />
        </div>
        <div class="form-group">
          <label for="text" class="form-label">Please paste a description of the position you're trying to fill</label>
          <textarea id="text" bind:value={text} required rows="20" class="form-control form-control-normal" disabled={submitting} />
          <div class="form-help">The formatting doesn't really matter. Please include as much information as you can provide at this time.</div>
        </div>
        <button type="submit" class="submit-button" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
      </form>
    </div>
  </Main>
</Layout>
