const fs = require('fs')

/**
 * Writes passed json object into passed filename
 * 
 * @param {string} fileName - Set a filename to write to
 * @param {object} jsonObj - Any JSON object
 */
module.exports = async function writeJsonFile(fileName, jsonObj) {
  return new Promise((resolve, reject) => {
    const jsonContent = JSON.stringify(jsonObj, null, '  ')
    const callback = (error) => {
      if (error) {
        reject('An error occured while writing JSON Object to File.', error)
      }
      resolve()
    }
    fs.writeFile(fileName, jsonContent, 'utf8', callback)
  })
}
