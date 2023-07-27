const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename));

// console.log(path.format(path.extname(__filename)));


// // Returns if path is absolute or not

// console.log(path.isAbsolute(__filename));



// path.join

console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("folder1", "//folder2", "index.html"));
console.log(path.join("folder1", "folder2", "../index.html"));

//path.resolve 
// returns the specied argument with absolute path

console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("folder1", "//folder2", "index.html"));
console.log(path.join("folder1", "folder2", "../index.html"));


