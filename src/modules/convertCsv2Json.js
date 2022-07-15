const readFiles = require('./readFiles')
const convertFiles = require('./convertFiles')

/**
 * Reads an input folders csv files and converts them to JSON files
 * 
 * @param {string} inputPath - an absolute path to csv files
 * @param {string} outputPath - an absolute path for written json files
 * @returns {object} a report object that contains feedback of operations
 */
module.exports = async function convertCsv2Json(inputPath, outputPath) {
  return new Promise(async (resolve, reject) => {
    let report = {
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