import { fileObjectType, fileReportType } from '..';
export interface reportType {
    meta: {
        found: number;
        converted: number;
    };
    input: fileObjectType[] | null;
    converted: fileReportType[] | null;
}
/**
 * Reads an input folder's csv files and converts them to JSON files
 *
 * @param {string} inputPath - an absolute path to csv files
 * @param {string} outputPath - an absolute path for written json files
 * @returns {object} a report object that contains feedback of operations
 */
export declare const convertCsv2Json: (inputPath: string, outputPath: string) => Promise<reportType>;
