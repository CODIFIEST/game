//this is where we put our game logic
//we will put the mechanics of our game here, and slowly
//build it over the next few lessons
// import { print } from ('./print') // gdi this isn't working
//const wrastle =  require ("./fight")
//These characters are removed for simplicity.
// const Paladin = require("./paladin");
// const paladin = new Paladin ("Wonky");

// const Gambler = require("./gambler");
// const gambler = new Gambler ("Kenny Rodgers", 100);

// const Medic = require("./medic");
// const medic = new Medic ("Strange");

// const Warrior = require("./warrior");
// const warrior = new Warrior ("Xena");

// console.log (warrior);
// console.log (paladin);
// console.log (gambler);
// console.log (medic);

const Warlock = require("./characters/warlock");
const warlock = new Warlock ("Gandolf");

const Mage = require("./characters/mage");
const mage = new Mage ("Markie Mark");

const Shaman = require("./characters/shaman");
const shaman = new Shaman ("Paul Stamats");

function wrastle(player1, player2){
    let player1Health = player1.health;
    let player2Health = player2.health;
    
    player1Health -= player2.getDamage();
    player2Health -= player1.getDamage();

    if (player1Health <= 0 && player2Health <= 0) {    //this part needs refinement.. could they both die?
        print ("Double murder.", " You both died, game over")//OK figured that out. now let's make them fight to the death
    }
    else if (player1Health <= 0) {    //this part needs refinement.. could they both die?
        print (player1.name, "is dead, game over")
    }
    else if (player2Health <= 0) {
        print (player2.name, "is dead, game over")
    }
    else if (player1.getDamage() === player2.getDamage()){  //this is directly related to homework, the above is just messin around
        print ("You both die.", "There are no ties")
    }
    else if (player1.getDamage() >= player2.getDamage()){
        print (player1.name, "wins this round")
    }
    else {
        print(player2.name, "wins this round")
    }

}

console.log (warlock);

console.log (mage);
console.log (shaman);
shaman.levelUp();
console.log (shaman);
shaman.summonPet("shroom")
warlock.summonPet("imp")
shaman.equipWeapon("morning star")
mage.castSpell("fireball")
console.log (shaman)
console.log (shaman.getDamage());
console.log (mage);
console.log (mage.getDamage());
console.log (warlock)
console.log (warlock.getDamage());
//wrastle(shaman, warlock)
