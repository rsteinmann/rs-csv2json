"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFiles = void 0;
const csvtojson_1 = __importDefault(require("csvtojson"));
const writeJsonFile_1 = require("./writeJsonFile");
const allowedSuffix = ['csv'];
const isAllowedSuffix = (suffix) => allowedSuffix.includes(suffix);
/**
 * Takes a list of csv-files and converts them to json.
 *
 * @param {array} files - a list of file objects with name and path set
 * @param {string} outputPath - absolute path of destination directory
 * @returns {array}   list of report objects that contain feedback of operation
 */
const convertFiles = (files, outputPath) => __awaiter(void 0, void 0, void 0, function* () {
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
                const jsonObj = yield (0, csvtojson_1.default)().fromFile(path);
                yield (0, writeJsonFile_1.writeJsonFile)(`${outputPath}/${name}.json`, jsonObj);
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
exports.convertFiles = convertFiles;
