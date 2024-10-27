<script lang="ts">
	import { page } from '$app/stores';
	import { CloseOutline, AddAlt, Delete, Download, IbmLpa, Upload } from 'carbon-icons-svelte';
	import ExtensionStatus from 'components/Extensions/extension-status.svelte';
	import PropName from 'components/Extensions/single-view/prop-name.svelte';
	import PropValue from 'components/Extensions/single-view/prop-value.svelte';
	import BaseDatagrid from 'components/Shared/Datagrid/base-datagrid.svelte';
	import Papper from 'components/Shared/Papper/papper.svelte';
	import { extensions, mapToExtensionProjectView } from 'stores/extensions';
	import type { ExtensionProjectView } from 'types/extensions/extension-project-view';
	import { hoursHeaders, professorsHeaders, studentsHeaders } from './static-data';

	let extension: ExtensionProjectView | undefined = mapToExtensionProjectView($extensions).find(
		(x) => x.id === +$page.params.id
	);
</script>

<div class="h-[calc(100vh-120px)] pr-5 overflow-hidden overflow-y-scroll">
	<div class="flex justify-between">
		<div>
			<span class="font-light text-gray-400 font-mono text-sm"
				>Cod. Extension: #{extension?.id}</span
			>
			<h2 class="text-2xl font-bold text-gray-500">Projecto: {extension?.title}</h2>
		</div>
		<button class="btn btn-error btn-outline btn-sm mt-4">
			<CloseOutline />
			Eliminar Proyecto.
		</button>
	</div>

	<div class="gap-3 grid grid-cols-3 my-5">
		<Papper customClass="p-3 gap-3 grid grid-cols-2">
			<!-- svelte-ignore missing-declaration -->
			<div class="col--2">
				<PropName>Titulo:</PropName>
				<PropValue>{extension?.title}</PropValue>
			</div>
			<div>
				<PropName>Estado:</PropName>
				<ExtensionStatus status={extension?.status} />
			</div>
			<div>
				<PropName>Sede:</PropName>
				<PropValue>{extension?.center}</PropValue>
			</div>
			<div>
				<PropName>Carrera:</PropName>
				<PropValue>{extension?.career}</PropValue>
			</div>
			<div>
				<PropName>Periodo:</PropName>
				<PropValue>{extension?.term}</PropValue>
			</div>
			<div>
				<PropName>Modalidad:</PropName>
				<PropValue>{extension?.program}</PropValue>
			</div>
			<div class="col-span-2">
				<PropName>Objectivo:</PropName>
				<PropValue>{extension?.objective ?? 'Sin objetivo por el momento.'}</PropValue>
			</div>
		</Papper>
		<Papper customClass="p-3 gap-3 grid grid-cols-2 grid-rows-4">
			<div>
				<PropName>Creado el:</PropName>
				<PropValue>{extension?.createdAt}</PropValue>
			</div>
			<div>
				<PropName>Actualizado el:</PropName>
				<PropValue>{extension?.createdAt}</PropValue>
			</div>
			<div>
				<PropName>Creado por:</PropName>
				<PropValue>{extension?.createdBy}</PropValue>
			</div>
			<div>
				<PropName>Actualizado por:</PropName>
				<PropValue>{extension?.updatedBy}</PropValue>
			</div>
			<div>
				<PropName>Acciones del PDF del Proyecto:</PropName>
				<div class="flex gap-3">
					<div class="tooltip" data-tip="Cargar nuevo PDF.">
						<button
							class="btn btn-sm btn-outline btn-square btn-success hover:bg-info hover:border-white"
						>
							<Upload />
						</button>
					</div>
					<div class="tooltip" data-tip="Ver PDF del proyecto.">
						<button class="btn btn-sm btn-info btn-outline btn-square">
							<IbmLpa />
						</button>
					</div>
					<div class="tooltip" data-tip="Descargar PDF del proyecto.">
						<button class="btn btn-sm btn-outline btn-square">
							<Download />
						</button>
					</div>
					<div class="tooltip" data-tip="Eliminar.">
						<button class="btn btn-sm btn-error btn-outline btn-square">
							<Delete />
						</button>
					</div>
				</div>
			</div>
		</Papper>
		<Papper customClass="p-3 gap-3 grid grid-cols-2 grid-rows-4">
			<div>
				<PropName>Titulo del Informe:</PropName>
				<PropValue>Informe de la solucion establecida.</PropValue>
			</div>
			<div>
				<PropName>Objetivo del Informe:</PropName>
				<PropValue>Sin objetivos por el momento...</PropValue>
			</div>
			<div>
				<PropName>Informe creado el:</PropName>
				<PropValue>{extension?.createdAt}</PropValue>
			</div>
			<div>
				<PropName>Informe actualizado el:</PropName>
				<PropValue>{extension?.createdAt}</PropValue>
			</div>
			<div>
				<PropName>Informe creado por:</PropName>
				<PropValue>{extension?.createdBy}</PropValue>
			</div>
			<div>
				<PropName>Informe actualizado por:</PropName>
				<PropValue>{extension?.updatedBy}</PropValue>
			</div>

			<div>
				<PropName>Acciones del PDF del Informe:</PropName>
				<div class="flex gap-3">
					<div class="tooltip" data-tip="Cargar nuevo PDF.">
						<button
							class="btn btn-sm btn-outline btn-square btn-success hover:bg-info hover:border-white"
						>
							<Upload />
						</button>
					</div>
					<div class="tooltip" data-tip="Ver PDF del proyecto.">
						<button class="btn btn-sm btn-info btn-outline btn-square">
							<IbmLpa />
						</button>
					</div>
					<div class="tooltip" data-tip="Descargar PDF del proyecto.">
						<button class="btn btn-sm btn-outline btn-square">
							<Download />
						</button>
					</div>
					<div class="tooltip" data-tip="Eliminar.">
						<button class="btn btn-sm btn-error btn-outline btn-square">
							<Delete />
						</button>
					</div>
				</div>
			</div>
		</Papper>
	</div>

	<div class="grid grid-cols-2 gap-5">
		<div>
			<div class="flex justify-between mt-10">
				<h2 class="text-2xl font-bold text-gray-500">Horas de extension</h2>
				<button class="btn btn-success btn-outline btn-sm">
					<AddAlt />
					Agregar horas
				</button>
			</div>
			<Papper customClass="mt-5">
				<BaseDatagrid items={[]} headers={hoursHeaders}></BaseDatagrid>
			</Papper>
		</div>

		<div>
			<div class="flex justify-between mt-10">
				<h2 class="text-2xl font-bold text-gray-500">Profesores</h2>
				<button class="btn btn-success btn-outline btn-sm">
					<AddAlt />
					Agregar Profesor
				</button>
			</div>
			<Papper customClass="mt-5">
				<BaseDatagrid items={[]} headers={professorsHeaders}></BaseDatagrid>
			</Papper>
		</div>
	</div>

	<div class="flex justify-between mt-10">
		<h2 class="text-2xl font-bold text-gray-500">Estudiantes</h2>
		<button class="btn btn-success btn-outline btn-sm">
			<AddAlt />
			Agregar estudiante/s
		</button>
	</div>
	<Papper customClass="mt-5">
		<BaseDatagrid items={[]} headers={studentsHeaders}></BaseDatagrid>
	</Papper>
</div>
