import { Weapon } from './weapon.ts';

export class Character {
  name: string;
  health: number;
  weapon: Weapon | null;

  constructor(name: string) {
    this.name = name;
    this.health = 100;
    this.weapon = null; // Composition: Character can have a weapon
  }

  // TODO: Add a method called takeDamage(amount)
  takeDamage(amount: number): void {
    // TODO: Reduce the character's health by the amount
    this.health -= amount;
    // TODO: Log: ${this.name} takes ${amount} damage
    console.log(`${this.name} takes ${amount} damage`);
  }

  // TODO: Add a method called equipWeapon(weapon)
  equipWeapon(weapon: Weapon): void {
    // TODO: Set character's weapon to the given weapon
    this.weapon = weapon;
    // TODO: Log: ${this.name} equipped ${weapon.name}
    console.log(`${this.name} equipped ${weapon.name}`);
  }

  attack(): void {
    if (this.weapon) {
      console.log(`${this.name} attacks with ${this.weapon.name} for ${this.weapon.damage} damage`);
    } else {
      console.log(`${this.name} punches for 5 damage`);
    }
  }
}
