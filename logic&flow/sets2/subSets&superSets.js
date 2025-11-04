/* Challenge

Create a function called analyzeSetRelations that takes two arrays as parameters: arr1 and arr2. The function should convert the arrays to sets and return an object with the following properties:

isSubset: a boolean indicating whether set1 is a subset of set2
isSuperset: a boolean indicating whether set1 is a superset of set2
isEqual: a boolean indicating whether set1 and set2 have exactly the same elements */

function analyzeSetRelations(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  // Write your code here

  let isSubset = [...set1].every(el => set2.has(el));
  let isSuperset = [...set2].every(el => set1.has(el));
  let isEqual = isSubset && set1.size === set2.size ? true : false;

  return {
    isSubset: isSubset,
    isSuperset: isSuperset,
    isEqual: isEqual,
  };
}
