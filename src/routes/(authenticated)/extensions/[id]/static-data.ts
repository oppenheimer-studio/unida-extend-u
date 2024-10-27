import HoursDatagridActionButtons from "components/Extensions/single-view/hours-datagrid-action-buttons.svelte";
import type { GridHeader } from "types/grid-header";

export const hoursHeaders: GridHeader<{}>[] =[
    {
        name: "Actividad",
        field: "activity",
    },
    {
        name: "Cantidad de horas",
        field: "hours",
    },
    {
        name: "Actions",
        field: "activity",
		component: HoursDatagridActionButtons,
		getComponentProps: (_item) => {
			return {
				onEdit: () => {
				},
				onDelete: () => {
				},
			};
		}
    },
]

export const studentsHeaders: GridHeader<{}>[] = [
    {
        name: "Nombre",
        field: "name",
    },
    {
        name: "Apellido",
        field: "surname",
    },
    {
        name: "Correo Electrónico",
        field: "email",
    },
    {
        name: "Teléfono",
        field: "phone",
    },
    {
        name: "Horas",
        field: "hours",
    },
    {
        name: "Acciones",
        field: "actions",
        getComponentProps: (_item) => {
            return {
                onEdit: () => {
                    // Implementa la lógica de edición aquí
                },
                onDelete: () => {
                    // Implementa la lógica de eliminación aquí
                },
            };
        }
    },
];


export const professorsHeaders: GridHeader<{}>[] = [
    {
        name: "Nombre",
        field: "firstName",
    },
    {
        name: "Departamento",
        field: "department",
    },
    {
        name: "Curso",
        field: "curese",
    },
    {
        name: "Acciones",
        field: "actions",
        getComponentProps: (_item) => {
            return {
                onEdit: () => {
                    // Implementa la lógica de edición aquí
                },
                onDelete: () => {
                    // Implementa la lógica de eliminación aquí
                },
            };
        }
    },
];
