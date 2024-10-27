<script>
	import Header from 'components/Layout/Header/index.svelte';
	import '../../../app.css';
</script>

<Header></Header>
<div class="hero min-h-[90vh]">
	<div
		class="hero max-w-[90%] h-full rounded-btn"
		style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
	>
		<div class="hero-overlay bg-opacity-60 rounded-btn"></div>
		<div class="hero-content text-neutral-content text-center">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Hello there</h1>
				<p class="mb-5">
					Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
					exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
				</p>
				<a class="btn btn-primary" href="/login">Login</a>
			</div>
		</div>
	</div>
</div>
