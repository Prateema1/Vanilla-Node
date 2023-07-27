// import add from "./math-esm.mjs";
// import math from "./math-esm.mjs";

import * as math from "./math-esm.mjs";
// OR

// import { add, subtract } from "./math-esm.mjs";

const { add, subtract } = math;

// console.log(add(2,3));

// console.log(math.add(2,3));
// console.log(math.subtract(2,3));

console.log(add(2,3));
console.log(subtract(2,3));