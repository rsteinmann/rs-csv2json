# rs-csv2json
Converts CSV files to JSON files

Written and tested in node version 16.15.1

## Convert csv files to json

To quickly get csv files converted into json do...

1. Clone repo `git clone https://github.com/rsteinmann/rs-csv2json.git`
2. Run `npm install`
3. Put as many `.csv` files into folder `./input`
4. Run `npm start`
5. Check `./output` folder for json files

## Use as node module

To use this module in your project do...

1. Run `npm i rs-csv2json`
2. Touch the file you would like to add functionality
3. Add following script

```js
const path = require('path')
const csv2json = require('rs-csv2json').default

const inputPath = path.join(__dirname, `./input`) // set input path to csv files
const outputPath = path.join(__dirname, `./output`) // set output path to destionation

csv2json(inputPath, outputPath)
  .then((report) => console.log(report))
```