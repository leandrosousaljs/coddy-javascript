/* Challenge

Create a function named findMissingKeys that takes:

A JSON object (data)
An array of required keys (requiredKeys)
The function should return an array containing all keys from requiredKeys that do not exist in the data object. If all required keys exist, return an empty array.

Example Input:

data = {"name": "Phone", "price": 599}
requiredKeys = ["name", "price", "color"]
Expected Output:

["color"] */

function findMissingKeys(data, requiredKeys) {
  const missingKeys = [];

  for (let i = 0; i < requiredKeys.length; i++) {
    const key = requiredKeys[i];
    if (!data.hasOwnProperty(key)) {
      missingKeys.push(key);
    }
  }

  return missingKeys;
}

// Do not modify below this line
