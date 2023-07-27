// Import Export Pattern
// Make sure to use on pattern at a time and comment unused ones before running code


//Pattern 1
const add = (a, b) => {
    return a + b;
}

module.exports = add;

// Pattern 2
module.exports = (a, b) => {
    return a + b;
}

// Pattern 3

const subtract = (a, b) => {
    return a - b;
}

module.exports = {
    add,
    subtract
}

// This will break the reference between module.exports and exports as they both point to same memory address
// exports = {
//     add,
//     subtract
// }


// Pattern 4

module.exports.add = (a, b) => {
    return a + b;
}

module.exports.subtract = (a, b) => {
    return a - b;
}

// Pattern 5

// Not Recommended to only use exports

exports.add = (a, b) => {
    return a + b;
}

exports.subtract = (a, b) => {
    return a - b;
}







