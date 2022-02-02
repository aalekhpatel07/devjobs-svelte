<script lang="ts">
    import type { Job } from '../../types/job';

    export let job: Job;

</script>
<footer class="flex bg-white dark:bg-very-dark-blue">
    <div class="flex w-full sm:max-w-4xl text-center h-full py-6 sm:mx-auto sm:justify-around sm:items-center">
        <div class="hidden sm:flex sm:flex-col sm:items-start sm:justify-center sm:mx-auto space-y-2">
            <h4 class="text-h3 text-very-dark-blue dark:text-white font-bold">
                {job.position}
            </h4>
            <h5 class="text-md text-dark-grey">
                {job.company}
            </h5>
        </div>
        <a class="bg-violet mx-auto w-4/5 sm:w-auto bg-violet text-white h-full rounded-md py-4 sm:px-4 font-bold hover:bg-light-violet" href={job.apply}>
            Apply Now
        </a>
    </div>
</footer>