const fs = require('fs')
const csv = require('csvtojson')

const inputPath = 'input'
const outputPath = 'output'
const fileName = 'demo'
const inputFile = `${inputPath}/${fileName}.csv`
const outputFile = `${outputPath}/${fileName}.json`

csv()
  .fromFile(inputFile)
  .then((jsonObj) => {
    console.log(jsonObj)
    writeJsonFile(outputFile, jsonObj)
  })

  /**
   * Writes passed json object into passed filename
   * 
   * @param {string} fileName - Set a filename to write to
   * @param {object} jsonObj - Any JSON object
   */
function writeJsonFile(fileName, jsonObj) {
  const jsonContent = JSON.stringify(jsonObj, null,'  ')
  const callback = (error) => {
    if (error) {
      console.log("An error occured while writing JSON Object to File.")
      return console.log(error)
    }
    console.log("JSON file has been saved.")
  }
  fs.writeFile(fileName, jsonContent, 'utf8', callback)
}