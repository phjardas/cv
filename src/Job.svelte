<script>
  import JobForm from './JobForm.svelte'
  import JobResult from './JobResult.svelte'
  import qs from 'query-string'
  import { firestore } from './firebase'

  let jobData

  const query = qs.parse(location.search)
  if (query.job) {
    jobData = firestore
      .collection('jobs')
      .doc(query.job)
      .get()
      .then(doc => ({ ...doc.data(), id: doc.id }))
  }

  function onSubmit(data) {
    history.pushState(null, document.title, `?job=${data.id}`)
    jobData = Promise.resolve(data)
  }
</script>

{#if jobData}
  {#await jobData}
    loading...
  {:then job}
    <JobResult {job} />
  {:catch error}
    Ooops: {error.message}
  {/await}
{:else}
  <JobForm {onSubmit} />
{/if}
