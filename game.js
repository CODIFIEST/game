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

// day what? 
const Warlock = require("./characters/warlock");
 const warlock = new Warlock ("WonkyLock");

const Mage = require("./characters/mage");
 const mage = new Mage ("Channing Tatum");

const Shaman = require("./characters/shaman");
 const shaman = new Shaman ("Paul Stamets");
 //HW day 8 
 //Create a mobs folder, mobs class, and some mobs, as well as a mobs array that stores all your mobs.
 const DarkLord = require("./mobs/darklord")
 const darklord = DarkLord;

 const Goblin = require ("./mobs/goblin")
 const goblin = Goblin;
 
 const Ork = require ("./mobs/ork")
 const ork = Ork;

 const Pteradactyl = require("./mobs/pteradactyl")
 const pteradactyl = Pteradactyl;

const SheDevil = require ("./mobs/shedevil")
const shedevil = SheDevil;

 const mobs =[
    darklord,
    goblin,
    ork,
    pteradactyl,
    shedevil
 ]
//check to see if mobs working, then comment out
///////////// console.log("here is the random mob list \n", mobs);
//const Goblin = require("./mobs/goblin")

//we want to prompt the user to make decisions, so we need to use a prompt library
//in game.js, you can require the prompt-promise package the same way you require local stuff! const prompt = require("prompt-promise")
const prompt = require ("prompt-promise");

//if we are going to use the naming presets, we have to include config
const config = require("./config/config");

//testing the chance.js library
const Chance = require('chance')
const chance = new Chance;
// use chance to pick a random mobber. pick it from the array.
let randomMobber = mobs[chance.integer({min:0, max: (mobs.length-1)})]
// console.log("the random mobber is ", randomMobber)
// console.log(randomMobber.name, "jumps out and attacks you! Inflicting", randomMobber.damage, "damage");
///////////////////////////////////////////////////
// GAME TIME
// - Choose a class, instantiate your character based on that class. Throw an error if that class is not available.
async function gameloop(){
    // in the game loop, at the start I want to get the clas choice from the user
    // they can pick shaman, warlock or mage

    // im going to store my character in this variable once i pick a class
    // i will create that class, and put it in the character variable
    let character;
   while (!character){
        const classChoice = await prompt("Select your class: press 1 for shaman, 2 for warlock, or 3 for mage \n")

        if (classChoice === "1"){
            character = shaman;
        }else if(classChoice === "2"){
            character = warlock;
        }else if (classChoice === "3"){
            character = mage;
        }else {
            console.log("try again shithead, that is not 1,2 or 3")
        }     
       
    }
//    console.log ("your character deals", character.getDamage(),"\n or" ,character.attack); 
///////////////////////////////////////////////
    //     else {
    //    console.error("try again shithead, that is not 1,2 or 3")}
    //     }\\\\\\\\\\\\\\\\\\\\
    /////////////////////////////////////////////////////////////////
    async function attackloop(){
        let yourMove;
        while(!yourMove){
            console.log("You can attack, equip a weapon, summon a pet, or cast a spell each turn")
            const killMob = await prompt("Press 1 2 3 or 4. If you press something else, you WILL lose a turn. kek\n")
            if (killMob === "1"){
                yourMove = true;
                randomMobber.health -= character.attack;
                console.log("KERSPLAT!!!",randomMobber.name,"has", randomMobber.health, "health left")                 
            }  
        }
    }
   console.log("I chose a", character.className, "named", character.name, "and now it's too late to go back.");
   console.log(character.name, "starts with", character.health, "HP and ", character.attack, "attack damage.\n\nOh shit!\n");
   

    while (character.health > 0 && randomMobber.health > 0){

        console.log(randomMobber.name, "jumps out and attacks you! Inflicting", randomMobber.damage, "damage and has", randomMobber.health, "health remaining");

// subtract damage automatically just because
        character.health -= randomMobber.damage;
        console.log(character.name, "only has", character.health, "HP left\n\n")
        await attackloop();

//         //next round
//         randomMobber = mobs[chance.integer({min:0, max: (mobs.length-1)})];
//         console.log(randomMobber.name, "jumps out and attacks you! Inflicting", randomMobber.damage, "damage");

// // subtract damage automatically just because
//         character.health -= randomMobber.damage;
//         console.log(character.name, "only has", character.health, "HP left")


    }
  // throw console.error("bye");

   // spawn a random mob then prompt to fight it
   //lets take the first mob in the array, then if we beat it, we can fight the next one

   //- Select random mobs to fight, in a "turn based" fighting system.

console.log("press ctrl-c to quit");

}

///////////////////////////////////////////////////////////////////////////////////////////////
// THIS WAS THE PREVIOUS DAYS HOEWORK
//-------------------------------------------

// function wrastle(player1, mob){
//     let player1Health = player1.health;
//     let player2Health = player2.health;
 
//     while (player1Health > 0 && player2Health > 0)    {
//         console.log("staring health", player1.name, player1Health)
//         console.log("staring health", player2.name, player2Health)
        
        
//         player1Health -= player2.getDamage();
//         player2Health -= player1.getDamage();

//         if (player1Health <= 0 && player2Health <= 0) {    //this part needs refinement.. could they both die?
//             console.log ("Double murder.", " You both died, game over") //OK figured that out. now let's make them fight to the death
//         }
//         else if (player1Health <= 0) {    //this part needs refinement.. could they both die?
//             console.log (player1.name, "is dead, game over")
//         }
//         else if (player2Health <= 0) {
//             console.log (player2.name, "is dead, game over")
//         }
//         else if (player1.getDamage() === player2.getDamage()){  //this is directly related to homework, the above is just messin around
//             console.log ("You both die.", "There are no ties")
//         }
//         else if (player1.getDamage() >= player2.getDamage()){
//             console.log (player1.name, "wins this round with", player1.getDamage(), "damage vs.", player2.getDamage(), "damage")
//         }
//         else {
//             console.log (player2.name, "wins this round with", player2.getDamage(), "damage vs.", player1.getDamage(), "damage")
//         }
//         if(player1.activeSpell){
//             player1.mana = player1.mana - player1.activeSpell.mana;
           
//         }
//         else if (player2.activeSpell){
//             player2.mana = player2.mana - player2.activeSpell.mana;
//         }
        
//         // for some reason I thought pets would use mana, but they don't so commented out.
//         // if(player1.activePet){
//         //     player1.mana = player1.mana - player1.activePet.mana;
//         //     console.log("here");
//         // } else if(player2.activePet){
//         //     player2.mana = player2.mana - player2.activePet.mana;
//         //     console.log("player 2 here")
//         // }
        
//         console.log(player1.name, "has", player1Health, "health and", player1.mana, "mana remaining")
//         console.log(player2.name, "has", player2Health, "health and", player2.mana, "mana remaining")
//     }
// }



// shaman.levelUp();
// console.log (shaman);
// shaman.summonPet("shroom")
// warlock.summonPet("imp")
// // shaman.equipWeapon("morning star")
// // mage.castSpell("fireball")
// mage.levelUp();
// mage.levelUp();
// console.log (warlock);
// console.log (mage.getDamage(config.spellNames.fireball));
// console.log (warlock.getDamage("imp"));
// console.log (shaman.getDamage(config.weapoNames.morningstar));
console.log (shaman.attack);
// console.log (shaman)
// console.log (shaman.getDamage());
// console.log (mage);
// console.log (mage.getDamage());
// console.log (warlock)
// console.log (warlock.getDamage());
// wrastle(mage, shaman);
gameloop();