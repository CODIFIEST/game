const Pet = require ("./pet");
const morningstar = require("../weapons/morningstar")
const lightheal = require("../spells/lightheal")
const Character = require("./character")
class Shaman extends Character {
    constructor (name, health){
        //Create the pet inside the constructor like from class
        super (name, "shaman", 6, 6, 8, 3, 100, 100);
        const pet = new Pet("shroom", 100, "k-hole");
        this.pets = [];
        this.pets.push(pet);
        this.weapons.push(morningstar);
        this.spells.push(lightheal);
    }
}
module.exports = Shaman;