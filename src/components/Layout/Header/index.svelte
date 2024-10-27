<script>
	import Logo from './logo.svelte';
	import ThemeController from './theme-controller.svelte';
	import User from './user.svelte';
</script>

<header class="p-2 navbar">
	<div class="navbar-start">
		<Logo></Logo>
	</div>
	<div class="navbar-end gap-3">
        <ThemeController></ThemeController>
		<User></User>
	</div>
</header>
