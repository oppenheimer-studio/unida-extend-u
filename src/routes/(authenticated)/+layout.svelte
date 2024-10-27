<script lang="ts">
	import { onMount } from 'svelte';
	import '../../app.css';
	import Header from 'components/Layout/Header/index.svelte';
	import Sidebar from 'components/Layout/Sidebar/index.svelte';
	import { currentTheme } from 'stores/theme';
	import type { Theme } from 'daisyui';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		currentTheme.set((savedTheme ?? 'nord') as Theme);
	});
</script>

<main data-theme={$currentTheme} class="min-h-screen">
	<Header></Header>
	<div class="flex">

	<Sidebar></Sidebar>
	<section class="p-5 w-full">
		<slot></slot>
	</section>
	</div>
</main>
