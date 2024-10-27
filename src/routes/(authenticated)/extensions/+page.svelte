<script lang="ts">
	import BaseDatagrid from 'components/Shared/Datagrid/base-datagrid.svelte';
	import Papper from 'components/Shared/Papper/papper.svelte';
	import { headers, staticItems } from './static-data';
	import { AddAlt } from 'carbon-icons-svelte';
	import CreateExtensionModal from 'components/Extensions/create-extension-modal.svelte';
	import type { CreateExtensionModel, ExtensionModel } from 'types/extensions/extension-model';
	import { extensions, lastExtension, lastExtensionId } from 'stores/extensions';
	import type { ExtensionProjectView } from 'types/extensions/extension-project-view';

	let items = staticItems;
	async function handleCreateExtension(model: CreateExtensionModel) {
		$lastExtensionId += 1
		const currentTime = Date.now()

		const newExtension: ExtensionModel = {
			id: $lastExtensionId, // codigo de extension
			updatedAt: currentTime,
			updatedById: currentTime,
			createdAt: currentTime,
			createdById: currentTime,

			title: model.title,
			center: model.center, // sede
			program: model.program, // programa
			career: model.career, // carrera
			status: "nuevo",
			objective: model.objective,
			term: model.term, // periodo
			totalHours: 0,

			fileURL: "", 
		}

		$extensions.push(newExtension);

		const dateString: string = new Date(currentTime).toLocaleDateString('es-ES');
		const response: ExtensionProjectView = {
			id: $lastExtensionId, // codigo de extension
			updatedAt: dateString,
			updatedBy: "Elizhabeth N.",
			createdAt: dateString,
			createdBy: "Elizhabeth N.",

			title: model.title,
			center: model.center, // sede
			program: model.program, // programa
			career: model.career, // carrera
			status: "nuevo",
			objective: model.objective,
			term: model.term, // periodo
		}

		return response;
	}
</script>

<div class="flex justify-between">
	<h2 class="text-2xl">Proyectos de extension.</h2>
	<CreateExtensionModal onCreate={handleCreateExtension}/>
</div>

<Papper customClass="mt-5">
	<BaseDatagrid {items} {headers}></BaseDatagrid>
	<!-- <h1>SIUUUU</h1> -->
</Papper>
