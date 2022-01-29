<script lang="ts">
    import type { Job } from '../types/job';

    export let job: Job;


</script>

<section 
    role="listitem" 
    class="h-auto w-64 px-6 bg-white rounded-xl flex flex-col dark:bg-very-dark-blue shadow-2xl"
>
    <div 
        class="w-16 h-16 rounded-2xl flex items-center justify-center -mt-8"
        style="background-color: {job.logoBackground};"
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
    <p class="text-sm font-semibold text-violet my-6">{job.location}</p>
</section>
