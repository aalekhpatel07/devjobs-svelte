<script lang="ts">
    import { fade } from 'svelte/transition';

	import Job from './Job.svelte';
	import type { Job as JobType } from '../types/job';
    import { searchQuery } from '../stores/job';

    export let jobs: JobType[];

</script>
{#if jobs.length === 0}
    <div class="mx-auto w-4/5 text-center pt-16 text-dark-grey">
        <p>No jobs found for "{$searchQuery}".</p>
    </div>
{:else}
    <ul class="mx-auto grid grid-cols-auto px-4 pt-16 pb-8 gap-16 justify-items-center">
        {#each jobs as job (job.id)}
            <li transition:fade|local="{{ duration: 200 }}">
                <Job {job}/>
            </li>
        {/each}
    </ul>
{/if}


<style>
	.grid-cols-auto {
		grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
		grid-auto-flow: dense;
	}
</style>