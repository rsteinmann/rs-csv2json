var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { readFiles } from './readFiles';
import { convertFiles } from './convertFiles';
/**
 * Reads an input folder's csv files and converts them to JSON files
 *
 * @param {string} inputPath - an absolute path to csv files
 * @param {string} outputPath - an absolute path for written json files
 * @returns {object} a report object that contains feedback of operations
 */
export const convertCsv2Json = (inputPath, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        let report = {
            meta: {
                found: 0,
                converted: 0
            },
            input: null,
            converted: null
        };
        const files = yield readFiles(inputPath);
        report.input = files;
        report.meta.found = files.length;
        report.converted = yield convertFiles(files, outputPath);
        report.meta.converted = report.converted.filter((c) => c.success).length;
        resolve(report);
    }));
});
