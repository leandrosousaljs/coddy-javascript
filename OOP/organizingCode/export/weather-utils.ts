// TODO: Export the getWeatherMessage function here

export function getWeatherMessage(temp: number): string {
  if (temp < 10) {
    return "Brrr, it's cold!";
  } else if (temp <= 20) {
    return 'Nice and cool!️';
  } else {
    return 'Warm and sunny!️';
  }
}
