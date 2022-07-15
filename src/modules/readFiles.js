const fs = require('fs')

/**
 * Takes an absolute path to a directory and reads all existing filenames from it.
 * 
 * @param {string} path an absolute path a directory
 * @returns {array} A list of objects that contain name, path, suffix
 */
module.exports = async function readFiles(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (error, files) => {
      if (error) {
        return reject('Unable to scan directory:', error)
      }
      const fileMap = files.map(file => {
        const fileMatch = file.match(/(.*)\.([a-z1-9]+)$/i)
        return {
          name: fileMatch[1],
          suffix: fileMatch[2],
          path: `${path}/${file}`
        }
      })
      resolve(fileMap)
    })
  })

}