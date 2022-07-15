import * as fs from 'fs'

export interface fileObjectType {
  name: string
  suffix: string
  path: string
}

/**
 * Takes an absolute path to a directory and reads all existing filenames from it.
 * 
 * @param {string} path - an absolute path a directory
 * @returns {array} a list of objects that contain name, path, suffix
 */
export const readFiles = async (path: string) => {
  return new Promise<fileObjectType[]>((resolve, reject) => {
    fs.readdir(path, (error, files) => {
      if (error) {
        return reject('Unable to scan configured directory!')
      }
      const fileMap = files.map(file => {
        const fileMatch = file.match(/(.*)\.([a-z1-9]+)$/i) || ''
        const fileObj: fileObjectType = {
          name: fileMatch.length >= 1 ? fileMatch[1] : '<unknown>',
          suffix: fileMatch.length >= 2 ? fileMatch[2] : '<unknown>',
          path: `${path}/${file}`
        }
        return fileObj
      })
      resolve(fileMap)
    })
  })
}