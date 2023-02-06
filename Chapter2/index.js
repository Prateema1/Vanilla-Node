//Reference : https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#fsreadfilepath-options-callback

const fs = require('fs');
const path = require('path')

//Asynchronously reads entire content of file
fs.readFile(path.join(__dirname, 'files', 'demo.txt'), 'utf8', (err, data) => {     //Instead of hard coding path name, use path module
    if(err) throw err;
    console.log(data);
})

console.log("I will be printed first")

//Asynchronously Writes content specified for file
fs.writeFile(path.join(__dirname, 'files', 'writeMe.txt'),'Content To Be Written In File', (err) => {     //Instead of hard coding path name, use path module
    if(err) throw err;
    console.log('File Write Complete');

    fs.appendFile(path.join(__dirname, 'files', 'writeMe.txt'),'Updated File With New Content', (err) => {     //Instead of hard coding path name, use path module
        if(err) throw err;
        console.log('File Update Complete');

    fs.rename(path.join(__dirname, 'files', 'writeMe.txt'), path.join(__dirname, 'files', 'renamedWriteMe.txt'), (err) => {     //Instead of hard coding path name, use path module
        if(err) throw err;
        console.log('File Renamed Complete');
    })
    })
})

console.log("I will be printed second")

//Asynchronously Updates content of existing file || creates new file if not present
fs.appendFile(path.join(__dirname, 'files', 'newFile.txt'),'Append also created file if not present', (err) => {     //Instead of hard coding path name, use path module
    if(err) throw err;
    console.log('File Append Complete');
})

console.log("I will be printed third")

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error : ${err}`);
    process.exit(1);
})