class SuperHero {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}


// module.exports = new SuperHero("Batman");

// In case we do not want Module Caching to interfere in creating different instance of the class.
module.exports = SuperHero;