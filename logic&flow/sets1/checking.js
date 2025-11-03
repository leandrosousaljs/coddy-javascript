/* Challenge

Create a function called symmetricDifference that takes two arrays as parameters. The function should convert the arrays to sets, and return a new Set containing elements that are in either of the two Sets, but not in both. Use the has() method to check for element existence. Finally convert the set to an array and return it. */

function symmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = new Set();

  for (let elem of set1) {
    if (!set2.has(elem)) {
      result.add(elem);
    }
  }

  for (let elem of set2) {
    if (!set1.has(elem)) {
      result.add(elem);
    }
  }

  return Array.from(result);
}
