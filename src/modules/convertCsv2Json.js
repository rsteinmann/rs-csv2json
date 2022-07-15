const readFiles = require('./readFiles')
const convertFiles = require('./convertFiles')

/**
 * Reads an input folders csv files and converts them to JSON files
 * 
 * @param {string} inputPath - an absolute path to csv files
 * @param {*} outputPath - an absolute path for written json files
 * @returns 
 */
module.exports = async function convertCsv2Json(inputPath, outputPath) {
  return new Promise(async (resolve, reject) => {
    const files = await readFiles(inputPath)
    console.log('Found files:', files.map(file => file.name), '\n')
    await convertFiles(files, outputPath)
    resolve()
  })
}