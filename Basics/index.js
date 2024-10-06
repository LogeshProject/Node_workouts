const add = require('./add.js')



console.log('Hello world');

const sum = add(1,3)
console.log(sum);

require('./batman.js')
require('./superman.js')

const hero = require('./superHero.js')

console.log(hero.getName());

hero.setName('Spiderman')

console.log(hero.getName());

const newHero = require('./superHero.js')

console.log(newHero.getName());



