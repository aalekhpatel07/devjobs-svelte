<script lang="ts">
    import { Router, Route } from 'svelte-navigator';

	import Navbar from '../components/Navbar.svelte';
    import Base from './Base.svelte';
    import Detail from './Detail.svelte';

</script>


<Router>
    <Navbar />
    <main>
        <Route path="/*jobId" component={Detail} primary={false} />
        <Route path="/" primary={false}>
            <Base />
        </Route>
    </main>
</Router>