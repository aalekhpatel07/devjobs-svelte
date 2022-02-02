<script lang="ts">
    import type { Job } from '../../types/job';

    export let job: Job;

</script>
<article class="flex flex-col items-center bg-white dark:bg-very-dark-blue rounded-lg justify-between shadow-2xl py-8 px-6 sm:py-0 sm:pl-10 sm:pr-8">
    <div class="h-52 w-full flex flex-col items-center justify-between sm:flex-row sm:h-36 sm:mt-8">
        <div class="flex flex-col items-start justify-between h-32 sm:h-28 sm:justify-around">
            <span class="text-sm text-dark-grey">{job.postedAt} &bull; {job.contract}</span>
            <h2 class="text-h2 font-bold text-very-dark-blue dark:text-white">{job.position}</h2>
            <p class="text-sm text-violet font-semibold">{job.location}</p>
        </div>

        <a href="{job.apply}" class="w-full sm:w-auto text-center bg-violet px-4 py-3 rounded-md text-white font-bold hover:bg-light-violet" rel="external">
            <!-- <button type="button" class="px-4 py-3 rounded-sm text-white font-bold"> -->
                Apply Now
            <!-- </button> -->
        </a>
    </div>
    <div class="prose text-gray-600 dark:text-gray-300 space-y-8 pb-12">
        <p class="text-md leading-h2 mt-8">
            {job.description}
        </p>
        {#if job.requirements}
            <h3 class="text-h3 font-bold text-very-dark-blue dark:text-white ">Requirements</h3>
            <p class="text-md leading-h2">
                {job.requirements.content}
            </p>
            {#if job.requirements.items}
                <ul class="list-outside marker:text-violet ml-3 p-0 space-y-4">
                    {#each job.requirements.items as requirement}
                        <li class="text-md leading-h2 ml-0 pl-6">{requirement}</li>
                    {/each}
                </ul>
            {/if}

        {/if}

        {#if job.requirements}
            <h3 class="text-h3 font-bold text-very-dark-blue dark:text-white ">What You Will Do</h3>
            <p class="text-md leading-h2">
                {job.role.content}
            </p>
            {#if job.role.items}
                <ol class="list-outside marker:text-violet marker:font-bold ml-3 p-0 space-y-4">
                    {#each job.role.items as role}
                        <li class="text-md leading-h2 ml-2 pl-6">{role}</li>
                    {/each}
                </ol>
            {/if}
        {/if}
        
    </div>
</article>