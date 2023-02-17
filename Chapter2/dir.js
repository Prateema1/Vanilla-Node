const fs = require('fs');

//check if dir exists

if(!fs.existsSync('./newDir')) {
    fs.mkdirSync('./newDir', (err) => {
        if (err) throw err;
        console.log('Directory created');
    })
}

//Deletes new directory

if(fs.existsSync('./newDir')) {
    fs.rmdir('./newDir', (err) => {
        if (err) throw err;
        console.log('Directory Removed');
    })
}