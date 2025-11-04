/* Challenge

Create a function called setIntersection that takes arrays as parameters. The function should convert that arrays to Sets. Create a Set that is the intersection of the two input Sets, convert to an array and return the array. Do not use the spread operator in your solution. */

function setIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const intersectionSet = new Set();
  for (let item of set1) {
    if (set2.has(item)) {
      intersectionSet.add(item);
    }
  }
  return Array.from(intersectionSet);
}
