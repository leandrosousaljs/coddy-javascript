/* Challenge

Create a function named removeKeys that takes two parameters:

An object
An array of strings (keys to be removed)
The function should return a new object with the specified keys removed. */

function removeKeys(obj, keysToRemove) {
  // Create a new empty object to store the filtered key-value pairs
  let newObj = {};

  // Get all keys from the input object
  let allKeys = Object.keys(obj);

  // Loop through all keys in the original object
  for (let i = 0; i < allKeys.length; i++) {
    let currentKey = allKeys[i];
    let shouldKeepKey = true;
    // Check if the current key is in the keysToRemove array
    for (let j = 0; j < keysToRemove.length; j++) {
      if (currentKey === keysToRemove[j]) {
        shouldKeepKey = false;
        break;
      }
    }

    // If the key should be kept, add it to the new object
    if (shouldKeepKey) {
      newObj[currentKey] = obj[currentKey];
    }
  }
  return newObj;
}
