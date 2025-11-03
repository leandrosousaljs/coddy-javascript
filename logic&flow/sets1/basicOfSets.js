/* Challenge

Create a function called processStudentGroups that takes an array of student names as an argument. The function should:

Create a Set from the input array to get unique student names
Remove any student whose name starts with 'Z' (case insensitive)
Add 'John Doe' to the Set if not already present
Return an object with the following properties:
uniqueCount: The number of unique students
hasJohnDoe: A boolean indicating whether 'John Doe' is in the Set
studentsArray: An array of the final set of student names */

function processStudentGroups(students) {
  let studentSet = new Set(students);

  for (let student of studentSet) {
    if (student.toLowerCase().startsWith('z')) {
      studentSet.delete(student);
    }
  }

  studentSet.add('John Doe');

  return {
    uniqueCount: studentSet.size,
    hasJohnDoe: studentSet.has('John Doe'),
    studentsArray: Array.from(studentSet),
  };
}
