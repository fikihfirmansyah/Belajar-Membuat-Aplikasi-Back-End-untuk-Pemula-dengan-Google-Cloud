const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write(process.argv[2]);