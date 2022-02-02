import { type Readable, writable, type Writable, derived } from "svelte/store";

import type { Job } from "./types/job";

export const meilisearchBaseURL = "/search";
const meilisearchURL = meilisearchBaseURL + "/indexes/jobs/search";

export const currentMeilisearchIndexUID: Writable<number> = writable(0);
export const searchQuery: Writable<string> = writable("");

export const searchResults: Readable<Promise<Job[]>> = derived(
  searchQuery,
  async ($query) => {
    const query = $query.toLowerCase();
    const response = await fetch(meilisearchURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        attributesToHighlight: ["*"],
        limit: 50,
        q: query,
      }),
    });
    const results = await response.json();
    return results.hits;
  }
);
