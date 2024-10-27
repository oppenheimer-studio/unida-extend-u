
import { goto } from '$app/navigation';
import DatagridActionButtons from 'components/Extensions/datagrid-action-buttons.svelte';
import ExtensionStatus from 'components/Extensions/extension-status.svelte';
import type { ExtensionModel } from 'types/extensions/extension-model';
import type { ExtensionProjectView } from 'types/extensions/extension-project-view';
import type { GridHeader } from 'types/grid-header';

export let headers: GridHeader<ExtensionProjectView>[] = [
	{
		field: 'title',
		name: 'Titulo del Projecto'
	},
	{
		field: 'status',
		name: 'Estado',
		component: ExtensionStatus,
		getComponentProps: (item) => {
			return { status: item.status };
		}
	},
	{
		field: 'term',
		name: 'Periodo'
	},
	{
		field: 'career',
		name: 'Carrera'
	},
	{
		field: 'center',
		name: 'Sede'
	},
	{
		field: 'program',
		name: 'Programa'
	},
	{
		field: '',
		name: 'Acciones del Proyecto',
		component: DatagridActionButtons,
		getComponentProps: (_item) => {
			return {
				onEdit: () => {
					goto('/extensions/' + _item.id);
				},
				onSeeReport: () => {
					// goto('/extensions/' + _item.id);
				},
				onSeeProjectPDF: () => {
					// goto('/extensions/' + _item.id);
				}
			};
		}
	}
];

export let staticItems: ExtensionProjectView[] = [
    {
        title: 'Reparación de equipos gratuitos',
        center: 'UNIDA - Asunción',
        program: 'Modalidad Presencial',
        career: 'Ing. Informática',
        status: 'nuevo', // Asegúrate de que este valor sea del tipo ExtensionStatusType
        term: 2024,
        id: 23,
        updatedAt: new Date().toISOString(), // Puedes establecer el valor apropiado
        updatedBy: 'Usuario Actual', // Reemplaza con el valor apropiado
        createdAt: new Date().toISOString(), // Establece la fecha de creación
        createdBy: 'Creador Original', // Reemplaza con el valor apropiado
    },
    {
        title: 'Taller de programación para jóvenes',
        center: 'Facultad de Ciencias Exactas',
        program: 'Modalidad Online',
        career: 'Ing. en Sistemas',
        status: 'pendiente', // Asegúrate de que este valor sea del tipo ExtensionStatusType
        term: 2024,
        id: 24,
        updatedAt: new Date().toISOString(), // Puedes establecer el valor apropiado
        updatedBy: 'Usuario Actual', // Reemplaza con el valor apropiado
        createdAt: new Date().toISOString(), // Establece la fecha de creación
        createdBy: 'Creador Original', // Reemplaza con el valor apropiado
    },
    {
        title: 'Conciencia ecológica: Limpieza de parques',
        center: 'Universidad Nacional',
        program: 'Modalidad Presencial',
        career: 'Ing. Ambiental',
        status: 'nuevo', // Asegúrate de que este valor sea del tipo ExtensionStatusType
        term: 2024,
        id: 25,
        updatedAt: new Date().toISOString(), // Puedes establecer el valor apropiado
        updatedBy: 'Usuario Actual', // Reemplaza con el valor apropiado
        createdAt: new Date().toISOString(), // Establece la fecha de creación
        createdBy: 'Creador Original', // Reemplaza con el valor apropiado
    },
    {
        title: 'Taller de programación para jóvenes',
        center: 'Facultad de Ciencias Exactas',
        program: 'Modalidad Online',
        career: 'Ing. en Sistemas',
        status: 'pendiente', // Asegúrate de que este valor sea del tipo ExtensionStatusType
        term: 2024,
        id: 20,
        updatedAt: new Date().toISOString(), // Puedes establecer el valor apropiado
        updatedBy: 'Usuario Actual', // Reemplaza con el valor apropiado
        createdAt: new Date().toISOString(), // Establece la fecha de creación
        createdBy: 'Creador Original', // Reemplaza con el valor apropiado
    },
    {
        title: 'Taller de programación para jóvenes',
        center: 'Facultad de Ciencias Exactas',
        program: 'Modalidad Online',
        career: 'Ing. en Sistemas',
        status: 'rechazado', // Asegúrate de que este valor sea del tipo ExtensionStatusType
        term: 2024,
        id: 28,
        updatedAt: new Date().toISOString(), // Puedes establecer el valor apropiado
        updatedBy: 'Usuario Actual', // Reemplaza con el valor apropiado
        createdAt: new Date().toISOString(), // Establece la fecha de creación
        createdBy: 'Creador Original', // Reemplaza con el valor apropiado
    },
    {
        title: 'Taller de programación para jóvenes',
        center: 'Facultad de Ciencias Exactas',
        program: 'Modalidad Online',
        career: 'Ing. en Sistemas',
        status: 'nuevo', // Asegúrate de que este valor sea del tipo ExtensionStatusType
        term: 2024,
        id: 27,
        updatedAt: new Date().toISOString(), // Puedes establecer el valor apropiado
        updatedBy: 'Usuario Actual', // Reemplaza con el valor apropiado
        createdAt: new Date().toISOString(), // Establece la fecha de creación
        createdBy: 'Creador Original', // Reemplaza con el valor apropiado
    },
];