<script lang="ts">
	import JobContainer from '../components/JobContainer.svelte';
	import { jobs } from '../store';


</script>
<main>
	<JobContainer jobs={$jobs}/>
</main>