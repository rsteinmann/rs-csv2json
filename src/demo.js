const convertCsv2Json = require('./modules/convertCsv2Json')
const path = require('path')
const inputPath = path.join(__dirname, `../input`)
const outputPath = path.join(__dirname, `../output`)

// convert all files from directory
convertCsv2Json(inputPath, outputPath)
  .then((report) => {
    console.log(chars('-', 60))
    console.log(`Total files found:    `, report.meta.found)
    console.log('Total files processed:', report.meta.converted)
    console.log(chars('-', 60))
    report.converted.forEach((convert) => {
      console.log(
        `[${convert.success ? '✔' : 'x'}] `,
        `rows:`,
        convert.rows,
        chars(' ', (6 - convert.rows.toString().length)),
        `${convert.name}.${convert.suffix}${chars(' ', 50)}`.slice(0, 50),
      )
    })
    console.log('\n')
  })
  .catch((error) => console.error(error))


function chars(char, num) {
  let str = ''
  if (num < 0 || !char) return str
  for (let i = 0; i < num; i++) {
    str += char
  }
  return str
}