<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';
	import { hotKeyMap, pressedKeys } from '../stores/eventBus';

    export let keys: string[];

    const dispatch = createEventDispatcher();

	function handleKeyUp(e: KeyboardEvent) {
		$hotKeyMap = $hotKeyMap.set(e.key, false);
	}

	function handleKeyDown(e: KeyboardEvent) {
		$hotKeyMap = $hotKeyMap.set(e.key, true);
	}

    onMount(() => {
        pressedKeys.subscribe((currentlyPressedKeys) => {
            for (let key of keys) {
                if (!currentlyPressedKeys.has(key)) {
                    return;
                }
            }
            dispatch('key-pressed', { keys });
        });
    });
</script>

<svelte:window on:keydown={handleKeyDown} on:keyup={handleKeyUp} />