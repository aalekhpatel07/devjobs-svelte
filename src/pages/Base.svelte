<script lang="ts">
	import JobContainer from '../components/JobContainer.svelte';
	import Searchbar from '../components/Searchbar.svelte';
	import type { Job } from '../types/job';
	import { searchResults } from '../stores/job';


	let jobHits: Job[] = [];

	searchResults.subscribe(results => {
		results
		.then(res => jobHits = res)
		.catch(err => console.error(err));
	});

</script>

<div class="-mt-6">
	<Searchbar keyPressFocus={["Control", "m"]}/>
</div>
<JobContainer jobs={jobHits}/>