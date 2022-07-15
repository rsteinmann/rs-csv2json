import { fileObjectType } from './modules/readFiles'
import { fileReportType } from './modules/convertFiles'
import { convertCsv2Json, reportType } from './modules/convertCsv2Json'

export {
  convertCsv2Json
}

export default convertCsv2Json

export type {
  fileObjectType,
  fileReportType,
  reportType
}
