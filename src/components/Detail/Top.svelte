<script lang="ts">
    import type { Job } from '../../types/job';

    export let job: Job;
</script>


<div class="flex flex-col items-center bg-white dark:bg-very-dark-blue rounded-lg justify-between h-52 sm:h-auto sm:flex-row sm:items-center shadow-2xl">
    <div 
        class="w-16 h-16 rounded-2xl flex items-center justify-center -mt-8 sm:h-24 sm:mt-0 sm:w-24 sm:rounded-none sm:rounded-l-sm"
        style="background-color: {job.logoBackground};"
    >
        <img loading="lazy" class="object-contain w-3/5" src={job.logo} alt="Logo for {job.company}">    
    </div>
    <div class="mt-2 flex flex-col items-center justify-center sm:items-start sm:justify-none sm:m-0">
        <h2 class="text-h2 font-bold text-very-dark-blue dark:text-white ">{job.company}</h2>
        <a class="text-h4 text-dark-grey " href={job.website} rel="external">{job.website}</a>
    </div>
    <a href="{job.website}" class="mt-4 mb-8 rounded-md bg-transparent-violet sm:m-0 sm:mr-8 px-4 py-3 text-violet dark:text-white font-bold hover:bg-transparent-violet-dark w-40" rel="external">
        Company Site
    </a>
</div>