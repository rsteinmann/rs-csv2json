var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import csv from 'csvtojson';
import { writeJsonFile } from './writeJsonFile';
const allowedSuffix = ['csv'];
const isAllowedSuffix = (suffix) => allowedSuffix.includes(suffix);
/**
 * Takes a list of csv-files and converts them to json.
 *
 * @param {array} files - a list of file objects with name and path set
 * @param {string} outputPath - absolute path of destination directory
 * @returns {array}   list of report objects that contain feedback of operation
 */
export const convertFiles = (files, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        if (files.length < 1) {
            reject('No files converted!');
        }
        let report = [];
        for (let i = 0; i < files.length; i++) {
            const { name, suffix, path } = files[i];
            let fileReport = {
                name,
                suffix,
                path,
                rows: 0,
                success: false
            };
            if (isAllowedSuffix(suffix)) {
                const jsonObj = yield csv().fromFile(path);
                yield writeJsonFile(`${outputPath}/${name}.json`, jsonObj);
                fileReport.rows = jsonObj.length;
                fileReport.success = true;
            }
            report.push(fileReport);
            if (files.length - 1 === i) {
                resolve(report);
            }
        }
    }));
});
