/* Challenge

Create a function named filterObject that:

Takes an object and an array of keys to keep
Returns a new object containing only the specified keys from the original object
Important: Do not modify the original object
For example:

// Original object
const person = {
  name: "John",
  age: 30,
  city: "New York",
  job: "Developer"
};

// Call your function
const filtered = filterObject(person, ["name", "job"]);

// Result should be:
// { name: "John", job: "Developer" }

// The original object should remain unchanged
console.log(person); // Still has all original properties
If a key in the "keep list" doesn't exist in the original object, just ignore it. */

function filterObject(obj, keysToKeep) {
  // Create a new empty object
  const result = {};

  // Loop through each key to keep
  for (let i = 0; i < keysToKeep.length; i++) {
    const key = keysToKeep[i];

    // Only add the key-value pair if the key exists in the original object
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}
