import { Character } from './character.ts';
import { Weapon } from './weapon.ts';

const hero = new Character('Knight');
const sword = new Weapon('Sword', 10);

hero.equipWeapon(sword); // Should log: "Knight equipped Sword"
hero.takeDamage(20); // Should log: "Knight takes 20 damage"
console.log(hero.health); // Should show: 80
