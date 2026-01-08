/* Challenge

Create a variable named student with an inline object type annotation that defines the following structure:

name property of type string
studentId property of type number
isEnrolled property of type boolean
Assign the variable the following values:

name: "Sarah Johnson"
studentId: 12345
isEnrolled: true
Create another variable named course with an inline object type annotation that defines the following structure:

title property of type string
credits property of type number
instructor property of type string
Assign the variable the following values:

title: "Introduction to TypeScript"
credits: 3
instructor: "Dr. Smith"
Print the following information on separate lines:

The student's name
The student's ID
The course title
The number of credits */

// TODO: Write your code here
// Create the student variable with inline object type annotation
const student: { name: string; studentId: number; isEnrolled: boolean } = {
  name: 'Sarah Johnson',
  studentId: 12345,
  isEnrolled: true,
};
// Create the course variable with inline object type annotation
const course: { title: string; credits: number; instructor: string } = {
  title: 'Introduction to TypeScript',
  credits: 3,
  instructor: 'Dr. Smith',
};
// Print the required information
console.log(student.name);
console.log(student.studentId);
console.log(course.title);
console.log(course.credits);
