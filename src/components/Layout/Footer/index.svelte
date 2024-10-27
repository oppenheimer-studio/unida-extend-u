<script>
	import { currentTheme } from 'stores/theme';
	import Logo from '../Header/logo.svelte';
	import ThemeController from '../Header/theme-controller.svelte';
</script>

<footer class="footer text-content items-center p-4">
	<aside class="grid-flow-col items-center">
		<Logo></Logo>
		<ThemeController></ThemeController>
	</aside>
	<div class="place-self-end flex align-middle items-center gap-4">
		<button class="p-2 bg-base-300 rounded-box flex gap-2 items-center">
			<img
				src={$currentTheme == 'cupcake' ? 'opp_studio_light.svg' : 'opp_studio_dark.svg'}
				alt="logo"
				class="w-8"
			/>
			<div class="text-left text-xs">
				Hecho y disennado por <br />
				<b> Estudios Oppenheimer E.A.S. </b>
			</div>
		</button>
	</div>
</footer>
