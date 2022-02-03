<script lang="ts">
    import { getJob } from "../stores/job";
    import Top from "../components/Detail/Top.svelte";
    import Body from "../components/Detail/Body.svelte";
    import Footer from "../components/Detail/Footer.svelte";

    export let jobId: number;

</script>

<!-- <h2>{jobId}</h2> -->

<div class="mx-8 w-auto xs:max-w-4xl xs:mx-auto">
    {#await getJob(jobId)}
        <div class="min-h-screen -mt-6">
            &nbsp;
        </div>
    {:then job}
        <div class="-mt-6">
            <Top job={job} />
        </div>
        <div class="mt-8">
            <Body job={job} />
        </div>

        <div class="mt-16">
            <Footer job={job} />
        </div>
    {:catch}
        <div class="min-h-screen -mt-6">
            Could not find any job details for a job with id {jobId}.
        </div>
    {/await}
</div>