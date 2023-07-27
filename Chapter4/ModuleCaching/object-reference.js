const obj1 = {
    name: "Katy Perry"
}

// const obj2 = obj1;
// obj2.name = "Diana Smith";


console.log(obj1);  // Assigning one object to another, both point to same address in memory

let obj2 = obj1;
 obj2 = {                    // New assignment
    name: "Santa Clerk"
}

// Here, when we assign obj2 to a literal the refrence between obj1 and obj 2 is broken and obj1 is not modified
// Same might happen with node modules

console.log(obj1);