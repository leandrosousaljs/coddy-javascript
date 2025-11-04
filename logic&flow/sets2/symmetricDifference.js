/* Challenge

Create a function called efficientSymmetricDifference that takes two arrays as parameters: arr1 and arr2. The function should convert the arrays to sets. Create a new Set that is the symmetric difference of the two input Sets, convert it to array and return the array */

function efficientSymmetricDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const symDiff = new Set();

  for (let item of set1) {
    if (!set2.has(item)) {
      symDiff.add(item);
    }
  }

  for (let item of set2) {
    if (!set1.has(item)) {
      symDiff.add(item);
    }
  }

  return Array.from(symDiff);
}
