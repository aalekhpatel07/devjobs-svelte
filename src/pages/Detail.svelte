<script lang="ts">
    import type { Job } from "../types/job";
    import { getJob } from "../stores/job";
    import Top from "../components/Detail/Top.svelte";
    import Body from "../components/Detail/Body.svelte";
    import Footer from "../components/Detail/Footer.svelte";

    export let jobId: number;
    let job: Job;

</script>

<!-- <h2>{jobId}</h2> -->

{#await getJob(jobId)}
    We waiting for the job.
{:then job}
    <div class="mx-8 w-auto sm:max-w-4xl sm:mx-auto">
        <div class="-mt-6">
            <Top job={job} />
        </div>
        <div class="mt-8">
            <Body job={job} />
        </div>
    </div>

    <div class="mt-16">
        <Footer job={job} />
    </div>
{:catch}
    <!-- <p>No job found</p> -->
{/await}
<!-- <h3>{job && Object.keys(job)}</h3> -->