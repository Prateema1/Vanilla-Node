// With iife each function gets its own private scope

(function (message) {
    const superHero = "Batman";
    console.log(message, superHero);
})('Hello');

(function (message) {
    const superHero = "Captain America";
    console.log(message, superHero);
})('Hey');