<script lang="ts">
    import type { Job } from "../types/job";
    import { getJob } from "../store";

    export let jobId: number;
    let job: Job;

</script>

<h2>{jobId}</h2>

{#await getJob(jobId)}
    We waiting for the job.
{:then job}
    <h3>{job.position}</h3>
    <p>{job.description}</p>
{:catch}
    <p>No job found</p>
{/await}
<h3>{job && Object.keys(job)}</h3>