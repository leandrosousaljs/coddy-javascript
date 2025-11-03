/* Challenge

Create a function called setOperations that takes an array as a parameter. The function should convert the array to a set and:

Create a copy of the input Set
Add the number 10 to the copied Set
Clear the original Set
Return an object with two properties: copiedSet (the modified copy) and originalSet (the cleared original Set) */

function setOperations(inputArr) {
  const inputSet = new Set(inputArr);
  const copiedSet = new Set(inputSet);
  copiedSet.add(10);
  inputSet.clear();

  return {
    copiedSet: copiedSet,
    originalSet: inputSet,
  };
}
