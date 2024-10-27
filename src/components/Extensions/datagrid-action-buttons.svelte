<script>
	import { CicsSitOverrides, IbmLpa, Information } from 'carbon-icons-svelte';
	export let onEdit
	export let onSeeReport
	export let onSeeProjectPDF
</script>

<div class="flex gap-3">
	<div class="tooltip" data-tip="Editar proyecto.">
		<button on:click={onEdit} class="btn btn-sm btn-outline btn-square text-info hover:bg-info hover:border-white">
			<CicsSitOverrides />
		</button>
	</div>
	<div class="tooltip" data-tip="Ver PDF del proyecto.">
		<button on:click={onSeeProjectPDF} class="btn btn-sm btn-outline btn-square">
			<IbmLpa />
		</button>
	</div>
	<div class="tooltip" data-tip="Ver informe.">
		<button on:click={onSeeReport} class="btn btn-sm btn-outline btn-square">
			<Information />
		</button>
	</div>
</div>
