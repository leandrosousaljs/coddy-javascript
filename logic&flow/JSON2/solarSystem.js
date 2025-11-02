/* Challenge

Easy
Create a function named analyzeSolarSystem that takes one argument, a JSON string solarSystemData. The JSON string contains information about planets in our solar system. Each planet has the following properties:

name (string)
type (string: "rocky" or "gas")
numberOfMoons (number)
discoveredIn (number, year)
surfaceTemperature (object with min and max in Celsius)
hasRings (boolean)
Your task:

Parse the JSON string into an object.
For each planet:
Add a property classification based on these rules:
If it's a rocky planet and surfaceTemperature.max < 50°C: Potentially Habitable
If it's a rocky planet and surfaceTemperature.max >= 50°C: Extreme Environment
If it's a gas planet and numberOfMoons > 10: Complex System
If it's a gas planet and numberOfMoons <= 10: Simple Gas Giant
Add a property ageOfDiscovery that calculates how many years ago the planet was discovered (from the year 2010)
If the planet has rings and more than 5 moons, add a property specialFeature with value Ring System with Rich Moon Population
Return the modified object as a JSON string.
Example input: 

{
  "planets": [
    {
      "name": "Mars",
      "type": "rocky",
      "numberOfMoons": 2,
      "discoveredIn": -3000,
      "surfaceTemperature": {
        "min": -140,
        "max": 20
      },
      "hasRings": false
    },
    {
      "name": "Saturn",
      "type": "gas",
      "numberOfMoons": 82,
      "discoveredIn": -3000,
      "surfaceTemperature": {
        "min": -178,
        "max": -138
      },
      "hasRings": true
    }
  ]
} */

function analyzeSolarSystem(solarSystemData) {
  let data = JSON.parse(solarSystemData);

  for (let i = 0; i < data.planets.length; i++) {
    let planet = data.planets[i];

    if (planet.type === 'rocky') {
      if (planet.surfaceTemperature.max < 50) {
        planet.classification = 'Potentially Habitable';
      } else {
        planet.classification = 'Extreme Environment';
      }
    } else if (planet.type === 'gas') {
      if (planet.numberOfMoons > 10) {
        planet.classification = 'Complex System';
      } else {
        planet.classification = 'Simple Gas Giant';
      }
    }

    planet.ageOfDiscovery = 2010 - planet.discoveredIn;

    if (planet.hasRings && planet.numberOfMoons > 5) {
      planet.specialFeature = 'Ring System with Rich Moon Population';
    }
  }

  return JSON.stringify(data);
}
