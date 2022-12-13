//bring in spells.js
const Spell = require("../spells/spell")

//Base Character class that takes in the following constructor arguments:
//name, className, attack, magic, defense, speed, health, mana, and sets the on the character
//constructor should also initialize 3 empty arrays for weapons, pets, and spells
class Character {
    constructor(name, className, attck, magic, defense, speed, health, mana){
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attck;
        this.magic = magic;
        this.defense= defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
        this.weapons = [];
        this.pets = [];
        this.spells = [];
        this.activePet = null;
        this.activeWeapon = null;
        this.activeSpell = null;

    }
    levelUp(){
        this.level += 1;
        if (this.className ==="shaman"){
            this.attack = this.attack + 1;
            this.health = this.health + 11;
            this.mana = this.mana +2;
        }
        else if (this.className ==="mage"){
            this.mana = this.mana + 17;
            this.magic = this.magic + 1;
        }
        else if (this.className === "warlock"){
            this.mana = this.mana + 11;
            this.health = this.health + 29;
            this.speed = this.speed +1;
        }
    }

    getDamage(){
        // keep track of a character's active pet. if there is one, get the pet's damage and add it
        // to the character's magic damage
        if(this.activePet){
            const petDamage = this.activePet.damage;
            const magicDamage = this.magic;
            return petDamage + magicDamage;
        } 
        else if(this.activeSpell){
            const spellPower = this.activeSpell.power;
            const magicPower = this.magic;
            console.log (magicPower, "magic damage and spell damage", spellPower);
            return spellPower + magicPower;
        }
        else if(this.activeWeapon){
            const weaponDamage = this.activeWeapon.damage;
            return this.attack + weaponDamage;
        }
        else {
            return this.attack;
        }
    }
    summonPet(petName){
        // if we have a pet in our this.pets array, that maches the name passed in as an argument to this function
        // lets summon it
        // we can loop over the pets we have to find it.
        for (let i=0; i < this.pets.length; i++){
            const pet = this.pets[i]; //this pet is an individual pet element in the pets array
            if(pet.name === petName){
                this.activeSpell = null;
                this.activeWeapon = null;
                this.activePet = pet;
            }

        }
    }
    castSpell(spellName){
        for(let i=0; i < this.spells.length; i++){
            const spell = this.spells[i];
            if (spell.name === spellName){
                this.activeWeapon = null;
                this.activePet = null;
                this.activeSpell = spell;
            }
        }
    }
    equipWeapon(weaponName){
        for (let i=0; i< this.weapons.length; i++){
            const weapon = this.weapons[i];
            if (weapon.name === weaponName){
                this.activePet = null;
                this.activeSpell = null;
                this.activeWeapon = weapon;
            }
        }
    }
} 

module.exports = Character;