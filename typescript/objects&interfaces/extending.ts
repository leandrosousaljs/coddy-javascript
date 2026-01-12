/* Challenge

Create a base interface named Employee with the following properties:

id of type number
name of type string
department of type string
Create an interface named Manager that extends Employee and adds the following properties:

teamSize of type number
budget of type number
Create a type alias named Contact with the following properties:

email of type string
phone of type string
Create a type alias named Developer using intersection types that combines Employee and Contact, and adds the following properties:

programmingLanguages of type string[]
yearsExperience of type number
Using your interfaces and types, create the following variables:

Create a variable named teamLead of type Manager with id 101, name "Alice Johnson", department "Engineering", teamSize 8, and budget 250000
Create a variable named softwareDev of type Developer with id 102, name "Bob Smith", department "Engineering", email "bob.smith@company.com", phone "555-0123", programmingLanguages ["TypeScript", "Python", "Java"], and yearsExperience 5
Create a function named getManagerSummary that accepts a parameter of type Manager and returns a string in the format "[name] manages [teamSize] people with a budget of $[budget]".

Create a function named getDeveloperSkills that accepts a parameter of type Developer and returns a string in the format "[name] knows [programmingLanguages joined with ', '] ([yearsExperience] years experience)".

Print the following outputs on separate lines:

Call getManagerSummary with teamLead and print the result
Call getDeveloperSkills with softwareDev and print the result
Print the department of teamLead
Print the email of softwareDev */

// TODO: Write your code here

// Create the Employee interface
interface Employee {
  id: number;
  name: string;
  department: string;
}
// Create the Manager interface that extends Employee
interface Manager extends Employee {
  teamSize: number;
  budget: number;
}
// Create the Contact type alias
type Contact = {
  email: string;
  phone: string;
};
// Create the Developer type alias using intersection types
type Developer = Employee &
  Contact & {
    programmingLanguages: string[];
    yearsExperience: number;
  };
// Create the teamLead variable of type Manager
const teamLead: Manager = {
  id: 101,
  name: 'Alice Johnson',
  department: 'Engineering',
  teamSize: 8,
  budget: 250000,
};
// Create the softwareDev variable of type Developer
const softwareDev: Developer = {
  id: 102,
  name: 'Bob Smith',
  department: 'Engineering',
  email: 'bob.smith@company.com',
  phone: '555-0123',
  programmingLanguages: ['TypeScript', 'Python', 'Java'],
  yearsExperience: 5,
};
// Create the getManagerSummary function
const getManagerSummary = (manager: Manager): string =>
  `${manager.name} manages ${manager.teamSize} people with a budget of $${manager.budget}`;
// Create the getDeveloperSkills function
const getDeveloperSkills = (dev: Developer): string =>
  `${dev.name} knows ${dev.programmingLanguages.join(', ')} (${dev.yearsExperience} years experience)`;
// Print the required outputs
console.log(getManagerSummary(teamLead));
console.log(getDeveloperSkills(softwareDev));
console.log(teamLead.department);
console.log(softwareDev.email);
