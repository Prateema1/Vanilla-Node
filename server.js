//How Nodejs differs from Vanilla JS
//1) Node runs on a server -> not in a browser
//2) The console in now available in the terminal window
console.log("Hello Node")
//3) global object instead of window object (in case of browser)
//console.log(global)
//4) Node has common core modules (that relate to OS, the file system and more)
//5) Common JS modules instead of ES6 modules

const os = require('os')       //Common core module
const path = require('path')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))     //Pull all the individual value and returns as an object


