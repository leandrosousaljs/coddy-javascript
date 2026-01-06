/* Challenge

Create a type alias named Username for the string type.

Create a type alias named UserAge for the number type.

Create a type alias named ContactMethod that combines Username and UserAge using a union type.

Create a type alias named UserProfile for an object with the following properties:

id of type number
displayName of type Username
preferredContact of type ContactMethod
Create a type alias named AdminProfile that combines UserProfile with an additional object type containing a permissions property of type string using intersection types.

Now create the following variables:

Create a variable named regularUser of type UserProfile with id 1, displayName "john_doe", and preferredContact "john_doe"
Create a variable named systemAdmin of type AdminProfile with id 2, displayName "admin", preferredContact 25, and permissions "full_access"
Create a function named getContactInfo that accepts a parameter called contact of type ContactMethod and returns a string. Use a type guard to check the type and return:

If it's a string: "Contact: [contact]"
If it's a number: "Age: [contact]"
Print the following outputs on separate lines:

Call getContactInfo with regularUser.preferredContact and print the result
Call getContactInfo with systemAdmin.preferredContact and print the result
Print systemAdmin.permissions */

// TODO: Write your code here

// Create type aliases for Username, UserAge, ContactMethod, UserProfile, and AdminProfile
type Username = string;
type UserAge = number;
type ContactMethod = Username | UserAge;
type UserProfile = {
  id: number;
  displayName: Username;
  preferredContact: ContactMethod;
};
type AdminProfile = UserProfile & {
  permissions: string;
};
// Create variables regularUser and systemAdmin
let regularUser: UserProfile = {
  id: 1,
  displayName: 'john_doe',
  preferredContact: 'john_doe',
};

let systemAdmin: AdminProfile = {
  id: 2,
  displayName: 'admin',
  preferredContact: 25,
  permissions: 'full_access',
};
// Create getContactInfo function
const getContactInfo = (contact: ContactMethod): string => {
  if (typeof contact === 'number') {
    return `Age: ${contact}`;
  }

  return `Contact: ${contact}`;
};
// Print the required outputs
console.log(getContactInfo(regularUser.preferredContact));
console.log(getContactInfo(systemAdmin.preferredContact));
console.log(systemAdmin.permissions);
