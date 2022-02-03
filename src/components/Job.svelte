<script lang="ts">
    import type { Job } from '../types/job';
    import { Link } from 'svelte-navigator';
    export let job: Job;
    import { searchQuery } from '../stores/job';

</script>

<Link to="/{job.id}">
    <section 
        role="listitem" 
        class="h-auto w-64 px-6 bg-white rounded-xl flex flex-col dark:bg-very-dark-blue shadow-2xl"
    >
        <div 
            class="w-16 h-16 rounded-2xl flex items-center justify-center -mt-8 cursor-crosshair"
            style="background-color: {job.logoBackground};"
            title={`Search for jobs at ${job.company}`}
            on:click|preventDefault={() => $searchQuery = job.company}
        >
            <img loading="lazy" class="object-contain" src={job.logo} alt="Logo for {job.company}">    
        </div>
        <div class="py-2 space-y-2 text-dark-grey mt-2 dark:text-gray-400">
            <p class="text-sm">
                {job.postedAt} &nbsp; &bull; &nbsp; {job.contract}
            </p>
            <p class="text-md font-bold text-very-dark-blue dark:text-white">{job.position}</p>
            <p class="text-sm">{job.company}</p>
        </div>
        <div title={`Search for jobs in ${job.location}.`} class="my-6">
            <p class="text-sm font-semibold text-violet cursor-crosshair" on:click|preventDefault={() => $searchQuery = job.location}>
                {job.location}
            </p>
        </div>
    </section>
</Link>