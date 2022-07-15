import { readFiles } from './readFiles'
import { convertFiles } from './convertFiles'
import { fileObjectType, fileReportType } from '..'

export interface reportType {
  meta: {
    found: number
    converted: number
  }
  input: fileObjectType[] | null
  converted: fileReportType[] | null
}

/**
 * Reads an input folder's csv files and converts them to JSON files
 * 
 * @param {string} inputPath - an absolute path to csv files
 * @param {string} outputPath - an absolute path for written json files
 * @returns {object} a report object that contains feedback of operations
 */
export const convertCsv2Json = async (inputPath: string, outputPath: string) => {
  return new Promise<reportType>(async (resolve, reject) => {
    let report: reportType = {
      meta: {
        found: 0,
        converted: 0
      },
      input: null,
      converted: null
    }
    const files = await readFiles(inputPath)
    report.input = files
    report.meta.found = files.length
    report.converted = await convertFiles(files, outputPath)
    report.meta.converted = report.converted.filter((c) => c.success).length
    resolve(report)
  })
}