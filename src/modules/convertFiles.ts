import csv from 'csvtojson'
import { fileObjectType } from '..'
import { writeJsonFile } from './writeJsonFile'

const allowedSuffix: string[] = ['csv']
const isAllowedSuffix = (suffix: string) => allowedSuffix.includes(suffix)

export interface fileReportType {
  name: string
  suffix: string
  path: string
  rows: number
  success: boolean
}

/**
 * Takes a list of csv-files and converts them to json.
 * 
 * @param {array} files - a list of file objects with name and path set
 * @param {string} outputPath - absolute path of destination directory
 * @returns {array}   list of report objects that contain feedback of operation
 */
export const convertFiles = async (files: fileObjectType[], outputPath: string) => {
  return new Promise<fileReportType[]>(async (resolve, reject) => {
    if (files.length < 1) {
      reject('No files converted!')
    }
    let report: fileReportType[] = []
    for (let i = 0; i < files.length; i++) {
      const { name, suffix, path } = files[i]
      let fileReport: fileReportType = {
        name,
        suffix,
        path,
        rows: 0,
        success: false
      }
      if (isAllowedSuffix(suffix)) {
        const jsonObj = await csv().fromFile(path)
        await writeJsonFile(`${outputPath}/${name}.json`, jsonObj)
        fileReport.rows = jsonObj.length
        fileReport.success = true
      }
      report.push(fileReport)
      if (files.length - 1 === i) {
        resolve(report)
      }
    }
  })
}