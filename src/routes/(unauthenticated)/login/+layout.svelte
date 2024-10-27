<script lang="ts">
	import { onMount } from 'svelte';
	import '../../../app.css';
	import { currentTheme } from 'stores/theme';
	import Footer from "components/Layout/Footer/index.svelte"
	import type { Theme } from 'daisyui';

	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		currentTheme.set((savedTheme ?? 'nord') as Theme);
	});
</script>

<main data-theme={$currentTheme} class="min-h-screen">
	<div>
		<slot></slot>
	</div>
	<Footer></Footer>
</main>
