let score = 0;

export function addPoints(points: number) {
  score += points;
  console.log(`Score increased! Current score: ${score}`);
}
