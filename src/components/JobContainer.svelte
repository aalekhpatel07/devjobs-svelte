<script lang="ts">
    import { fade } from 'svelte/transition';

	import Job from './Job.svelte';
	import type { Job as JobType } from '../types/job';

    export let jobs: JobType[];

</script>

<ul class="mx-auto grid grid-cols-auto px-4 pt-16 pb-8 gap-16 justify-items-center">
    {#each jobs as job (job.id)}
        <li transition:fade|local="{{ duration: 200 }}">
            <Job {job}/>
        </li>
    {/each}
</ul>

<style>
	.grid-cols-auto {
		grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
		grid-auto-flow: dense;
	}
</style>