<script lang="ts">
	import { goto } from '$app/navigation';
	import { AddAlt } from 'carbon-icons-svelte';
	import { lastExtension } from 'stores/extensions';
	import type { CreateExtensionModel } from 'types/extensions/extension-model';
	import type { ExtensionProjectView } from 'types/extensions/extension-project-view';

	export let onCreate: (
		extension: CreateExtensionModel
	) => Promise<ExtensionProjectView> | null = () => null;

	let open = false;
	let extension: CreateExtensionModel = {
		title: '',
		career: '',
		program: '',
		center: '',
		objective: '',
		term: 2024
	};

	async function handleCreate() {
		console.log('Creando Extension: ', extension);
		let createdExtension = await onCreate(extension);
		console.log('Extension Creada: ', createdExtension);
		open = false;
        goto("/extensions/" + createdExtension?.id)
	}
</script>

<button
	class="btn btn-outline"
	on:click={() => {
		open = true;
	}}
>
	<AddAlt />
	Crear proyecto de extension
</button>

{#if open}
	<div class="hero-overlay fixed z-10 left-0 top-0 flex justify-center align-middle h-screen">
		<div class="modal-box p-4 mt-10 h-min">
			<div class="flex justify-between">
				<h3 class="text-lg font-bold">Complete para cargar un proyecto de extension.</h3>
				<button class="btn btn-sm btn-circle btn-outline" on:click={() => (open = false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-3 w-3"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div class="modal-action">
				<form class="grid gap-3 grid-cols-2">
					<label class="input input-bordered flex items-center gap-2 col-span-2 text-sm">
						Titulo:
						<input required type="text" class="grow" bind:value={extension.title} />
					</label>
					<label class="input input-bordered flex items-center gap-2 text-sm">
						Periodo:
						<input required type="number" class="grow" bind:value={extension.term} />
					</label>
					<select
						required
						class="select select-bordered w-full max-w-xs"
						bind:value={extension.program}
					>
						<option value="" disabled selected>Seleccione modalidad:</option>
						<option>Modalidad Presencial</option>
						<option>Modalidad Híbrida</option>
					</select>
					<select
						required
						class="select select-bordered w-full col-span-2"
						bind:value={extension.center}
					>
						<option value="" disabled selected>Sede:</option>
						<option>UNIDA - Asunción</option>
						<option>UNIDA - Encarnacion</option>
					</select>
					<select
						required
						class="select select-bordered w-full col-span-2"
						bind:value={extension.career}
					>
						<option value="" disabled selected>Carrera:</option>
						<option>Ing. Sistemas</option>
						<option>Ing. Informatica</option>
						<option>Derecho</option>
						<option>Medicina</option>
					</select>
					<label class="form-control col-span-2">
						<div class="label">
							<span class="label-text">Objetivos del Proyecto.</span>
							<span class="label-text-alt">{extension.objective?.length ?? 0}/256 caractes.</span>
						</div>
						<textarea
							required
							bind:value={extension.objective}
							class="textarea textarea-bordered h-24 resize-none"
							placeholder="Escriba aqui..."
						></textarea>
					</label>

					<button
						class="btn mt-2 min-w-24 btn-success btn-outline col-span-2"
						on:click|preventDefault={handleCreate}>Crear extension</button
					>
				</form>
			</div>
		</div>
	</div>
{/if}
