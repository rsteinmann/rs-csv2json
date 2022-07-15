import * as fs from 'fs'

/**
 * Writes passed json object into passed filename
 * 
 * @param {string} fileName - Set a filename to write to
 * @param {object} jsonObj - Any JSON object
 */
export const writeJsonFile = async (fileName: string, jsonObj: any) => {
  return new Promise<boolean>((resolve, reject) => {
    const jsonContent = JSON.stringify(jsonObj, null, '  ')
    const callback = (error: any) => {
      if (error) {
        reject('An error occured while writing JSON Object to File!')
      }
      resolve(true)
    }
    fs.writeFile(fileName, jsonContent, 'utf8', callback)
  })
}
