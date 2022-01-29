<header class="mx-auto w-64 h-12 rounded-lg shadow-2xl sm:w-3/5">
    <form action=false role="search" novalidate class="relative flex items-center w-full h-full">
        <div class="w-10 absolute bg-transparent left-0 h-full flex items-center justify-center rounded-l-lg text-gray-400 dark:text-light-grey dark:text-gray-300 sm:w-16">
            <label class="w-4 rounded-l-lg" for="searchInput">
                <span class="sr-only">Search</span>
                <svg viewBox="0 0 24 24">
                    <path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="currentColor" fill-rule="nonzero"/>
                </svg>
            </label>
        </div>
        <input 
            type="text" 
            name="searchInput" 
            class="w-full h-full rounded-r-lg rounded-l-lg pl-10 pr-12 sm:pl-14 sm:pr-20 placeholder:italic placeholder:text-gray-400 focus:outline-none focus:outline-1 focus:ring-midnight dark:focus:outline-white dark:bg-very-dark-blue dark:text-gray-300 text-sm transition-transform duration-800"
            placeholder="Search jobs..."
            bind:value={$searchQuery}
        />
        <button 
            type="button" 
            title="Apply filter" 
            class="w-10 absolute bg-violet text-white right-0 h-full flex items-center justify-center rounded-r-lg sm:w-16"
        >
            <svg viewBox="0 0 20 20" class="w-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z" fill="currentColor" fill-rule="nonzero"/>
            </svg>
        </button>
    </form>
</header>
    <p class="mx-auto w-64 text-xs text-gray-500 italic sm:w-3/5 mt-2">Example: Frontend Developer, Blogr, United Kingdom, ...</p>
<script lang="ts">
    import { searchQuery } from '../store';
</script>