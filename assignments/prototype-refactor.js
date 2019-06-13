/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// @@@@@@@@@@@@@@@@@@@@ Original code from JS-III (Prototype) @@@@@@@@@@@@@@@@@@@@
// function GameObject (attributes) {
//     this.createdAt = attributes.createdAt
//     this.name = attributes.name
//     this.dimensions = attributes.dimensions
// }
// GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`
// }

// function CharacterStats (attributes) {
//     GameObject.call(this, attributes)
//     this.healthPoints = attributes.healthPoints
// }
// CharacterStats.prototype = Object.create(GameObject.prototype)
// CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`
// }

// function Humanoid (attributes) {
//     CharacterStats.call(this, attributes)
//     this.team = attributes.team
//     this.weapons = attributes.weapons
//     this.language = attributes.language
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype)
// Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}.`
// }

// @@@@@@@@@@@@@@@@@@@@ Refactored into class @@@@@@@@@@@@@@@@@@@@
class GameObject {
    constructor (attributes) {
        this.createdAt = attributes.createdAt
        this.name = attributes.name
        this.dimensions = attributes.dimensions
    }
    destroy() {
        return `${this.name} was removed from the game.`
    }
}

class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes)
        this.healthPoints = attributes.healthPoints
    }
    takeDamage() {
        return `${this.name} took damage.`
    }
}  

class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes)
        this.team = attributes.team
        this.weapons = attributes.weapons
        this.language = attributes.language
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }
}
  
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 1,
    height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
    'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 2,
    width: 2,
    height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
    'Giant Sword',
    'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
    length: 1,
    width: 2,
    height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
    'Bow',
    'Dagger',
    ],
    language: 'Elvish',
});


console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

  
// @@@@@@@@@@@@@@@@@@@@ Stretch Goals @@@@@@@@@@@@@@@@@@@@

// function Hero(attributes) {
//     Humanoid.call(this, attributes)
//     this.highground = attributes.highground
//     this.awakenPower = attributes.awakenPower
// }
// Hero.prototype = Object.create(Humanoid.prototype)
// Hero.prototype.apDMG = function (victim) {
//     return `${this.name} does 18 damage to ${victim.name}`
// }


// function Villain(attributes) {
//     Humanoid.call(this, attributes)
//     this.lowground = attributes.lowground
//     this.ultimatePower = attributes.ultimatePower
// }
// Villain.prototype = Object.create(Humanoid.prototype)
// Villain.prototype.upDMG = function (victim) {
//     return `${this.name} does 10 damage to ${victim.name}`
// }
  
  
// const hero = new Hero({
//     createdAt: new Date(),
//     dimensions: {
//     length: 1,
//     width: 2,
//     height: 4,
//     },
//     healthPoints: 31,
//     name: 'Gandaldore',
//     team: 'Middle-wartz',
//     weapons: [
//     'Wand',
//     'Ring',
//     ],
//     language: 'Klingon',
//     highground: true,
//     awakenPower: 'Hakuna Matata'
// })
  
// const vill = new Villain({
//     createdAt: new Date(),
//     dimensions: {
//     length: 1,
//     width: 2,
//     height: 4,
//     },
//     healthPoints: 50,
//     name: 'Varth Dader',
//     team: 'Empire',
//     weapons: [
//     'Laser-sword',
//     ],
//     language: 'Dothraki',
//     lowground: true,
//     ultimatePower: 'Quantum Solace'
// })

// console.log(`${hero.name} and ${vill.name} meet on the battlefield.`)
// console.log(hero.greet())
// console.log(vill.greet())
// console.log(`${vill.name} casts ${vill.ultimatePower}.`)
// console.log(vill.upDMG(hero))
// console.log(`${hero.name} casts ${hero.awakenPower}.`)
// console.log(hero.apDMG(vill))