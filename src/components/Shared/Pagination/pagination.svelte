<script lang="ts">
	import Papper from '../Papper/papper.svelte';

	export const page: number = 0;
	export const lastPage: number = 0;

	export let onNext = () => {};
	export let onPrev = () => {};
</script>

<Papper customClass="join p-0 m-0">
	<button class="join-item btn btn-sm" on:click|preventDefault={onPrev}>«</button>
	<button class="join-item mx-3 font-semibold text-sm">pagina {page} de {lastPage}</button>
	<button class="join-item btn btn-sm" on:click|preventDefault={onNext}>»</button>
</Papper>
