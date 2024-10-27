import type { SvelteComponent } from "svelte"
import type { GridItem } from "./grid-item"

export type GridHeader<T> = {
    name: string,
    field: string,
    component?: any,
    getComponentProps?: (item: T) => {}
    sort?: undefined | "asc" | "desc"
    width?: number,
    maxWidth?: number,
    minWidth?: number,
}