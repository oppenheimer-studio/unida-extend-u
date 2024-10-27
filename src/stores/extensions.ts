import { writable, type Writable } from "svelte/store";
import type { ExtensionModel } from "types/extensions/extension-model";
import type { ExtensionProjectView } from "types/extensions/extension-project-view";
import { staticItems } from "../routes/(authenticated)/extensions/static-data";

export const extensions: Writable<ExtensionModel[]> = writable(mapToExtensionModel(staticItems));

export function mapToExtensionProjectView(items: ExtensionModel[]): ExtensionProjectView[] {
    return items.map(item => ({
        title: item.title,
        center: item.center,
        program: item.program,
        career: item.career,
        status: item.status, // Mantiene el tipo ExtensionStatusType
        term: item.term,
        id: item.id,
        updatedAt: new Date(item.updatedAt).toISOString(), // Convertir el timestamp a formato ISO
        updatedBy: "Elizhabeth N.", // Convertir el ID a string
        createdAt: new Date(item.createdAt).toISOString(), // Convertir el timestamp a formato ISO
        createdBy: "Elizhabeth N." // Convertir el ID a string
    }));
}

export function mapToExtensionModel(items: ExtensionProjectView[]): ExtensionModel[] {
    return items.map(item => ({
        id: item.id,
        updatedAt: Date.now(), // Establecer el timestamp actual
        updatedById: parseInt(item.updatedBy, 10), // Convertir a número
        createdAt: Date.now(), // Establecer el timestamp actual para creación
        createdById: parseInt(item.createdBy, 10), // Convertir a número

        title: item.title,
        center: item.center,
        program: item.program,
        career: item.career,
        status: item.status, // Mantiene el tipo ExtensionStatusType
        term: item.term,
        totalHours: 0, // Puedes establecer un valor predeterminado o calcularlo
        report: undefined, // Establece esto según tu lógica
        fileURL: '', // Establece esto según tu lógica
        students: [] // Inicializa como un array vacío
    }));
}


export const lastExtension: Writable<ExtensionProjectView | null> = writable(null);
export const lastExtensionId: Writable<number> = writable(50);