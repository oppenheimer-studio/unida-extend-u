import type { ExtensionStatusType } from "./extension-status-type";
import type { ExtensionReport } from "./report/report-model";

export type ExtensionModel = {
	id: number; // codigo de extension
    updatedAt: number,
    updatedById: number,
    createdAt: number,
    createdById: number,

	title: string;
	center: string; // sede
	program: string; // programa
	career: string; // carrera
	status: ExtensionStatusType
	objective?: string
	term: number; // periodo
    totalHours: number
    report?: ExtensionReport,

    fileURL: string 
    students?: number[]
}

export type CreateExtensionModel = {
    title: string;
    career: string;
    program: string;
    center: string;
    objective: string;
    term: number;
};
// export type ExtensionView = {
//     id: number
//     title: string;
//     career: string;
//     program: string;
//     center: string;
//     objective: string;
//     term: number;
// 	status: ExtensionStatusType
// };