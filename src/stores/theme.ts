import { browser } from "$app/environment";
import type { Theme } from "daisyui";
import { writable, type Writable } from "svelte/store";

export const currentTheme: Writable<Theme> = writable("bumblebee");

let firstRender = true

currentTheme.subscribe((theme) => {
    // in the first render of the browser, the "theme" will always be the initial value ("bumblebee").
    if (!browser || firstRender) {
        firstRender = false;
        return;
    };

    localStorage.setItem("theme", theme);
});