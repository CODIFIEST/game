//this is where we put our game logic
//we will put the mechanics of our game here, and slowly
//build it over the next few lessons
// import { console.log } from ('./console.log') // gdi this isn't working
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
const warlock = new Warlock ("WonkyLock");

const Mage = require("./characters/mage");
const mage = new Mage ("Channing Tatum");

const Shaman = require("./characters/shaman");
const shaman = new Shaman ("Paul Stamets");

function wrastle(player1, player2){
    let player1Health = player1.health;
    let player2Health = player2.health;
 
    while (player1Health > 0 && player2Health > 0){
        console.log("staring health", player1.name, player1Health)
        console.log("staring health", player2.name, player2Health)
        
        
        player1Health -= player2.getDamage();
        player2Health -= player1.getDamage();

        if (player1Health <= 0 && player2Health <= 0) {    //this part needs refinement.. could they both die?
            console.log ("Double murder.", " You both died, game over") //OK figured that out. now let's make them fight to the death
        }
        else if (player1Health <= 0) {    //this part needs refinement.. could they both die?
            console.log (player1.name, "is dead, game over")
        }
        else if (player2Health <= 0) {
            console.log (player2.name, "is dead, game over")
        }
        else if (player1.getDamage() === player2.getDamage()){  //this is directly related to homework, the above is just messin around
            console.log ("You both die.", "There are no ties")
        }
        else if (player1.getDamage() >= player2.getDamage()){
            console.log (player1.name, "wins this round with", player1.getDamage(), "damage vs.", player2.getDamage(), "damage")
        }
        else {
            console.log (player2.name, "wins this round with", player2.getDamage(), "damage vs.", player1.getDamage(), "damage")
        }
        if(player1.activeSpell){
            player1.mana = player1.mana - player1.activeSpell.mana;
           
        }
        else if (player2.activeSpell){
            player2.mana = player2.mana - player2.activeSpell.mana;
        }
        
        // for some reason I thought pets would use mana, but they don't so commented out.
        // if(player1.activePet){
        //     player1.mana = player1.mana - player1.activePet.mana;
        //     console.log("here");
        // } else if(player2.activePet){
        //     player2.mana = player2.mana - player2.activePet.mana;
        //     console.log("player 2 here")
        // }
        
        console.log(player1.name, "has", player1Health, "health and", player1.mana, "mana remaining")
        console.log(player2.name, "has", player2Health, "health and", player2.mana, "mana remaining")
    }
}



// shaman.levelUp();
// console.log (shaman);
shaman.summonPet("shroom")
warlock.summonPet("imp")
// shaman.equipWeapon("morning star")
mage.castSpell("fireball")
mage.levelUp();
mage.levelUp();
console.log (warlock);
console.log (shaman);
console.log (mage.activeSpell.mana);
// console.log (shaman)
// console.log (shaman.getDamage());
// console.log (mage);
// console.log (mage.getDamage());
// console.log (warlock)
// console.log (warlock.getDamage());
wrastle(mage, shaman);
