<script lang="ts">
	import JobContainer from '../components/JobContainer.svelte';
	import Searchbar from '../components/Searchbar.svelte';
	import type { Job } from '../types/job';

	import { searchResults } from '../store';

	let jobHits: Job[] = [];

	searchResults.subscribe(results => {
		results
		.then(res => jobHits = res)
		.catch(err => console.error(err));
		;
	});


</script>
<main class="mt-4">
	<Searchbar />
	<JobContainer jobs={jobHits}/>
</main>