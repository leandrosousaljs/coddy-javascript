/* Project: Defining Task Struct

Welcome to your first TypeScript project! Over the next few lessons, you'll build a complete task list application that demonstrates how TypeScript helps create well-structured, type-safe code. This project will combine many of the concepts you've learned so far: interfaces, literal types, arrays, and functions.

The foundation of any task management system is defining what a task looks like. In this lesson, you'll create the data structure that represents a single task in your application. This structure needs to capture the essential information: a unique identifier, what the task is about, and its current state.

Your Task interface will use literal types for the status property, which means the status can only be one of a few specific string values like 'todo', 'in-progress', or 'done'. This approach prevents typos and ensures consistency throughout your application - TypeScript will catch any attempt to use an invalid status value.

This project structure will serve as the blueprint for all the functionality you'll build in the upcoming lessons, including adding new tasks, updating their status, and filtering tasks by their current state. 

Challenge

1.Create an interface named Task with the following properties:

id of type number
title of type string
status that can only be one of these literal values: 'todo', 'in-progress', or 'done'
Using your Task interface, create the following variables:

Create a variable named firstTask of type Task with id 1, title "Learn TypeScript interfaces", and status 'todo'
Create a variable named secondTask of type Task with id 2, title "Build task management app", and status 'in-progress'
Create a variable named thirdTask of type Task with id 3, title "Write unit tests", and status 'done'
Create a function named getTaskInfo that accepts a parameter of type Task and returns a string in the format "Task [id]: [title] - [status]".

Print the following outputs on separate lines:

Call getTaskInfo with firstTask and print the result
Call getTaskInfo with secondTask and print the result
Call getTaskInfo with thirdTask and print the result
Print the status of firstTask
Print the title of secondTask

*/

// TODO: Write your code here

// Create the Task interface
interface Task {
  id: number;
  title: string;
  status: 'todo' | 'in-progress' | 'done';
}
// Create the task variables
let firstTask: Task = {
  id: 1,
  title: 'Learn TypeScript interfaces',
  status: 'todo',
};

let secondTask: Task = {
  id: 2,
  title: 'Build task management app',
  status: 'in-progress',
};

let thirdTask: Task = {
  id: 3,
  title: 'Write unit tests',
  status: 'done',
};
// Create the getTaskInfo function
const getTaskInfo = ({ id, title, status }: Task): string => `Task ${id}: ${title} - ${status}`;

// Print the required outputs
console.log(getTaskInfo(firstTask));
console.log(getTaskInfo(secondTask));
console.log(getTaskInfo(thirdTask));
console.log(firstTask.status);
console.log(secondTask.title);
