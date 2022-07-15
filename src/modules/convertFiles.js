const csv = require('csvtojson')
const writeJsonFile = require('./writeJsonFile')

const allowedSuffix = ['csv']
const isAllowedSuffix = (suffix) => allowedSuffix.includes(suffix)

/**
 * Takes a list of csv-files and converts them to json.
 * 
 * @param {array} files - a list of file objects with name and path set
 * @param {string} outputPath - absolute path of destination directory
 * @returns {array}  - a list of report objects that contain feedback of operation
 */
module.exports = async function convertFiles(files, outputPath) {
  return new Promise(async (resolve, reject) => {
    if (files.length < 1) {
      reject('No files converted!')
    }
    let report = []
    for (let i = 0; i < files.length; i++) {
      const { name, suffix, path } = files[i]
      let fileReport = {
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