const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname, 'files', 'demo.txt'), 'utf8', (err, data) => {     //Instead of hard coding path name, use path module
    if(err) throw err;
    console.log(data);
})

console.log("I will be printed first")

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error : ${err}`);
    process.exit(1);
})