/* Challenge

Create a function called setDifference that takes two arrays as parameters: arr1 and arr2. The function should convert the arrays to sets. Create a new Set that contains elements that are in set1 but not in set2, convert it an array and return it */

function setDifference(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const differenceSet = new Set();
  for (let item of set1) {
    if (!set2.has(item)) {
      differenceSet.add(item);
    }
  }
  return Array.from(differenceSet);
}
