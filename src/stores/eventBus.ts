import {
  readable,
  type Readable,
  writable,
  type Writable,
  derived,
} from "svelte/store";

export const hotKeyMap: Writable<Map<string, boolean>> = writable(new Map());
export const pressedKeys: Readable<Set<string>> = derived(
  hotKeyMap,
  ($hotKeyMap) => {
    const pressedKeys: Set<string> = new Set();
    for (const [key, value] of $hotKeyMap.entries()) {
      if (value) {
        pressedKeys.add(key);
      }
    }
    return pressedKeys;
  }
);
