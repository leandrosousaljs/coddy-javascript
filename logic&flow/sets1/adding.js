/* Challenge

Create a function called addUniqueElements that takes two parameters: an array and another array. The function should convert the first array to a Set, and add all elements from the second array to the Set, but only if they don't already exist in the Set. Finally convert the set to an array and return it. */

function addUniqueElements(array1, array2) {
  let mySet = new Set(array1);

  for (let i = 0; i < array2.length; i++) {
    mySet.add(array2[i]);
  }

  return Array.from(mySet);
}
