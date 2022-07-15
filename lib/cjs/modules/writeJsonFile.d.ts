/**
 * Writes passed json object into passed filename
 *
 * @param {string} fileName - Set a filename to write to
 * @param {object} jsonObj - Any JSON object
 */
export declare const writeJsonFile: (fileName: string, jsonObj: any) => Promise<boolean>;
