export interface fileObjectType {
    name: string;
    suffix: string;
    path: string;
}
/**
 * Takes an absolute path to a directory and reads all existing filenames from it.
 *
 * @param {string} path - an absolute path a directory
 * @returns {array} a list of objects that contain name, path, suffix
 */
export declare const readFiles: (path: string) => Promise<fileObjectType[]>;
