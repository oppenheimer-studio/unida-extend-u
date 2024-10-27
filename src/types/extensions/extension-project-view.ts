import type { ExtensionStatusType } from "./extension-status-type";

export type ExtensionProjectView = {
	title: string; // name
	center: string; // sede
	program: string; // programa
	career: string; // carrera
	status: ExtensionStatusType
	objective?: string
	term: number; // periodo

	id: number; // codigo de extension
	updatedAt: string,
	updatedBy: string,
	createdAt: string,
	createdBy: string,
};