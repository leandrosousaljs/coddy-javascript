/* Challenge

You're given a GameCharacter class. Your task is to:

Add a private field #isAlive initialized to true
Add a private method #checkIfAlive() that:
Sets #isAlive to true if #health > 0
Sets #isAlive to false if #health ≤ 0 */

export class GameCharacter {
  name = '';
  #health = 100;
  // TODO: Add a private field #isAlive initialized to true
  #isAlive = true;

  constructor(name: string) {
    this.name = name;
  }

  takeDamage(amount: number) {
    this.#health -= amount;
    this.#checkIfAlive();
  }

  heal(amount: number) {
    this.#health += amount;
    if (this.#health > 100) {
      this.#health = 100;
    }
  }

  getStatus() {
    return this.#isAlive ? 'Alive' : 'Defeated';
  }

  // TODO: Add a private method #checkIfAlive()
  #checkIfAlive() {
    // TODO: Set #isAlive to true if #health > 0, set it to false if #health ≤ 0
    this.#isAlive = this.#health > 0;
  }
}
