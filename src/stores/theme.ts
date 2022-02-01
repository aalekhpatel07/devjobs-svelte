import { writable, type Writable } from "svelte/store";

/**
 * Check if a theme is preferred by the user.
 *  Unless a light theme is preferred explicitly, the default is dark.
 * @returns "dark" or "light"
 */
const setup = (): string => {
  if (
    localStorage.getItem("theme") === "light" ||
    (window.matchMedia("(prefers-color-scheme: light)").matches &&
      localStorage.getItem("theme") !== "dark")
  ) {
    applyDark(false);
    updateLocalStorageDarkMode(false);
    return "light";
  }

  applyDark(true);
  updateLocalStorageDarkMode(true);
  return "dark";
};

/**
 * Toggle the theme of the app.
 * @param darkMode if true, apply dark theme, otherwise apply light theme.
 */
function applyDark(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

/**
 * Update the local storage to remember the user's preference.
 * @param darkMode if true, update LocalStorage with dark theme preference, otherwise with light theme preference.
 */
function updateLocalStorageDarkMode(darkMode: boolean) {
  window.localStorage.setItem("theme", darkMode ? "dark" : "light");
}

export const theme: Writable<boolean> = writable(setup() === "dark");

/**
 * A theme change triggered from anywhere within the app
 * should update the user's preference in local storage as well
 * as apply the theme on the document.
 */
theme.subscribe((newValue) => {
  applyDark(newValue);
  updateLocalStorageDarkMode(newValue);
});

/**
 * A theme change triggered from a user's prefered-color-scheme setting
 * should update the user's preference in local storage as well
 * as apply the theme on the document.
 */
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    theme.set(window.matchMedia("(prefers-color-scheme: dark)").matches);
  });
