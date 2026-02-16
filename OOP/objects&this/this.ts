/* Challenge

Add a method called getStatus to the player object that returns a string with the player's name and health using the this keyword.

Expected Output Format:
"Knight has 70 health" */

const player = {
  name: 'Knight',
  health: 100,
  getStatus() {
    return `${this.name} has ${this.health} health`;
  },
  takeDamage: function (damage: number) {
    this.health -= damage;
  },

  // TODO: Add getStatus method here that returns a string with the player's name and health
};

// Test
player.takeDamage(30);
console.log(player.getStatus()); // Should output: "Knight has 70 health"
