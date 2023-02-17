//If we have larger files, sometimes rather than attempting to grab all at once, do it chunk by chunk (reduces load on application and increases efficiency)

const fs = require('fs')
const path = require('path')

//Create Read Stream
const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf8'})
 
//Create Write Stream 
const ws = fs.createWriteStream('./files/new-loremFile.txt')

//Listen to data coming in from stream

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

//Better way than listener, Take readable stream and pipe and pass it to the write Stream

rs.pipe(ws)
