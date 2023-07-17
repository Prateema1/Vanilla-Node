const add = require("./math");

console.log(add(2,3));

// Import For Pattern 3

const math = require("./math");

console.log(math.add(2,3));
console.log(math.subtract(2,3));

// Can also destruct , ES2015 feature

const { add, subtract } = math;

console.log(add(2,3));
console.log(subtract(2,3));

