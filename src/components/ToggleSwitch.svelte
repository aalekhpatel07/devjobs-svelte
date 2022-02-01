<style>
    input[type='checkbox']:focus:not(:disabled) + .track,
    input[type='checkbox']:active:not(:disabled) + .track {
        box-shadow: 0 0 0 3px rgba(89, 100, 224, 0.3);
    }
</style>
  
  <script>
    export let id;
    export let checked = false;
    export let disabled = false;
  </script>
  
  <label for="{id}">
    <div 
        class="relative inline-block align-middle cursor-pointer select-none bg-transparent" 
        class:cursor-not-allowed={disabled}
    >
        <input {id} name="{id}" type="checkbox" class="sr-only" {disabled} bind:checked />
        <div class="track w-12 h-6 bg-white rounded-full shadow-inner" class:transition-all={checked}></div>
        <div 
            class="thumb transition-all duration-300 ease-in-out absolute top-0 left-0 w-6 h-6 bg-violet border-4 border-white rounded-full"
            class:bg-grey={disabled}
            class:translate-x-full={checked}
        >
        </div>
    </div>
  </label>