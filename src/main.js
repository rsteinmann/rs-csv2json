const convertCsv2Json = require('./modules/convertCsv2Json')
const path = require('path')
const inputPath = path.join(__dirname, `../input`)
const outputPath = path.join(__dirname, `../output`)

// start conversion
convertCsv2Json(inputPath, outputPath)
  .then(() => console.log('\n\n=> all files processed!\n\n'))
  .catch((error) => console.error(error))
