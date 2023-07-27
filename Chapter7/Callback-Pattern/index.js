function greet (name) {
    console.log(`Hello ${name}`);
}


// Any function passed as a parameter to another function is called a callback function
// And a function that accepts a function as its parameter or return a function is called a higherorder function
function greetJulia(greetFn) {
    const name = "Julia";
    greetFn(name);
}

greetJulia(greet);

// Let's substitute with the type of functions by actual type name

// function higherOrderFunction(callback) {
//     const name = "Julia";
//     callback(name);
// }

// higherOrderFunction(greet);