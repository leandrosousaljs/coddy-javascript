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

2.You are provided with the following from the previous challenge:

The Task interface with id (number), title (string), and status (literal type)
Three task variables: firstTask, secondTask, and thirdTask
The getTaskInfo function
Create a function named addTask that takes two parameters:

taskList of type Task[] (an array of Task objects)
title of type string (the title for the new task)
The function should:

Create a new task with a unique ID (use the length of the current array + 1)
Set the title to the provided title parameter
Set the status to 'todo'
Return a new array containing all existing tasks plus the new task
Create an initial task list by creating a variable named initialTasks of type Task[] containing firstTask and secondTask.

Use your addTask function to add a new task with the title "Review code changes" to initialTasks and store the result in a variable named updatedTasks.

Print the following outputs on separate lines:

Print the length of initialTasks
Print the length of updatedTasks
Call getTaskInfo with the last task in updatedTasks and print the result
Print the title of the newly added task (the last task in updatedTasks)
Print the status of the newly added task

3.You are provided with the following from the previous challenge:

The Task interface with id (number), title (string), and status (literal type)
Three task variables: firstTask, secondTask, and thirdTask
The getTaskInfo function
The addTask function
The initialTasks and updatedTasks arrays
Create a function named changeTaskStatus that takes three parameters:

taskList of type Task[] (an array of Task objects)
taskId of type number (the ID of the task to update)
newStatus of type 'todo' | 'in-progress' | 'done' (the new status for the task)
The function should:

Find the task with the matching ID in the task list
Update that task's status to the new status
Return a new array with the updated task (do not modify the original array)
If no task with the given ID is found, return the original array unchanged
Create a variable named testTasks of type Task[] containing firstTask, secondTask, and thirdTask.

Use your changeTaskStatus function to:

Change the status of task with ID 1 to 'in-progress' and store the result in progressTasks
Change the status of task with ID 2 to 'done' in progressTasks and store the result in completedTasks
Print the following outputs on separate lines:

Call getTaskInfo with the first task from testTasks and print the result
Call getTaskInfo with the first task from progressTasks and print the result
Call getTaskInfo with the second task from completedTasks and print the result
Print the status of the first task in testTasks
Print the status of the second task in completedTasks

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
  title: 'Learn TypeScript basics',
  status: 'todo',
};

let secondTask: Task = {
  id: 2,
  title: 'Build a simple app',
  status: 'in-progress',
};

let thirdTask: Task = {
  id: 3,
  title: 'Write unit tests',
  status: 'done',
};

let initialTasks: Task[] = [firstTask, secondTask];
// Create the getTaskInfo function
const getTaskInfo = ({ id, title, status }: Task): string => `Task ${id}: ${title} - Status: ${status}`;

const addTask = (taskList: Task[], title: string): Task[] => {
  let newTask: Task = {
    id: taskList.length + 1,
    title,
    status: 'todo',
  };

  return [...taskList, newTask];
};

const updatedTasks: Task[] = addTask(initialTasks, 'Review code changes');

let lastTask: Task = updatedTasks[updatedTasks.length - 1];

const changeTaskStatus = (taskList: Task[], taskId: number, newStatus: 'todo' | 'in-progress' | 'done'): Task[] => {
  return taskList.map(task => (task.id === taskId ? { ...task, status: newStatus } : task));
};

const testTasks: Task[] = [firstTask, secondTask, thirdTask];

const progressTasks: Task[] = changeTaskStatus(testTasks, 1, 'in-progress');

const completedTasks: Task[] = changeTaskStatus(progressTasks, 2, 'done');

// Print the required outputs
console.log(getTaskInfo(testTasks[0]));
console.log(getTaskInfo(progressTasks[0]));
console.log(getTaskInfo(completedTasks[1]));
console.log(testTasks[0].status);
console.log(completedTasks[1].status);
