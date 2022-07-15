var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as fs from 'fs';
/**
 * Takes an absolute path to a directory and reads all existing filenames from it.
 *
 * @param {string} path - an absolute path a directory
 * @returns {array} a list of objects that contain name, path, suffix
 */
export const readFiles = (path) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (error, files) => {
            if (error) {
                return reject('Unable to scan configured directory!');
            }
            const fileMap = files.map(file => {
                const fileMatch = file.match(/(.*)\.([a-z1-9]+)$/i) || '';
                const fileObj = {
                    name: fileMatch.length >= 1 ? fileMatch[1] : '<unknown>',
                    suffix: fileMatch.length >= 2 ? fileMatch[2] : '<unknown>',
                    path: `${path}/${file}`
                };
                return fileObj;
            });
            resolve(fileMap);
        });
    });
});
