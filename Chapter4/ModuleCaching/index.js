// const superHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("SuperMan");
// console.log(superHero.getName());

//Requiring Module Again to create another instance

// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName());

const Superhero = require("./super-hero");

const batman = new Superhero("Batman");
console.log(batman.getName());
batman.setName("Captain Americs");

console.log(batman.getName());

const superman = new Superhero("Superman");
console.log(superman.getName());
