/* Challenge

Create a function called setUnion that takes two arrays as parameters. The function should convert that arrays to sets and create a new Set that is the union of the two input Sets. Finally convert the set to an array and return it.

Do not use the spread operator in your solution. */

function setUnion(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const unionSet = new Set(set1);
  for (let item of set2) {
    unionSet.add(item);
  }
  return Array.from(unionSet);
}
