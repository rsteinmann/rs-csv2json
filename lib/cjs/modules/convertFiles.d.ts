import { fileObjectType } from '..';
export interface fileReportType {
    name: string;
    suffix: string;
    path: string;
    rows: number;
    success: boolean;
}
/**
 * Takes a list of csv-files and converts them to json.
 *
 * @param {array} files - a list of file objects with name and path set
 * @param {string} outputPath - absolute path of destination directory
 * @returns {array}   list of report objects that contain feedback of operation
 */
export declare const convertFiles: (files: fileObjectType[], outputPath: string) => Promise<fileReportType[]>;
