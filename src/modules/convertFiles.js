const csv = require('csvtojson')
const writeJsonFile = require('./writeJsonFile')

const allowedSuffix = ['csv']
const isAllowedSuffix = (suffix) => allowedSuffix.includes(suffix)

/**
 * Takes a list of csv-files and converts them to json.
 * 
 * @param {array} files - a list of file objects with name and path set
 * @param {string} outputPath - absolute path of destination directory
 * @returns 
 */
module.exports = async function convertFiles(files, outputPath) {
  return new Promise(async (resolve, reject) => {
    if (files.length < 1) {
      reject('No files converted!')
    }
    for (let i = 0; i < files.length; i++) {
      const { name, suffix, path } = files[i]
      if (isAllowedSuffix(suffix)) {
        const jsonObj = await csv().fromFile(path)
        await writeJsonFile(`${outputPath}/${name}.json`, jsonObj)
        console.log(` [✔] "${name}.${suffix}": written lines:`, jsonObj.length)
      } else {
        console.log(` [x] "${name}.${suffix}": SKIPPED`)
      }
      if (files.length - 1 === i) {
        resolve(true)
      }
    }
  })
}