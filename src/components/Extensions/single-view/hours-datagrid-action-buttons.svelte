<script>
	import { CloseOutline, Edit } from 'carbon-icons-svelte';
	export let onEdit
	export let onDelete
</script>

<div class="flex gap-3">
	<div class="tooltip" data-tip="Editar">
		<button on:click={onEdit} class="btn btn-sm btn-outline btn-square text-info hover:bg-info hover:border-white">
			<Edit />
		</button>
	</div>
	<div class="tooltip" data-tip="Eliminar">
		<button on:click={onDelete} class="btn btn-sm btn-outline btn-square">
			<CloseOutline />
		</button>
	</div>
</div>
