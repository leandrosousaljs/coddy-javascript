/* Challenge

Create a function named checkPermissions that takes one parameter:

role of type UserRole (using the enum from the previous lesson)
The function should:

Check the role value and print different messages based on the role
If the role is UserRole.Admin, print "Full access granted"
If the role is UserRole.Editor, print "Edit access granted"
For any other role, print "View access only"
Have a return type of void
You are provided with the following from the previous challenge:

The UserRole enum with Admin, Editor, and Viewer members
Variables: adminRole, editorRole, and viewerRole
Create a variable named currentUser of type UserRole and assign it UserRole.Editor.

Create a variable named guestUser of type UserRole and assign it the numeric value 2.

Print the following outputs by calling your checkPermissions function:

Call checkPermissions with adminRole
Call checkPermissions with currentUser
Call checkPermissions with guestUser
Call checkPermissions with UserRole.Admin
Call checkPermissions with the numeric value 0 */

// Provided from previous challenge
enum UserRole {
  Admin,
  Editor,
  Viewer,
}

const adminRole = UserRole.Admin;
const editorRole = UserRole.Editor;
const viewerRole = UserRole.Viewer;

// TODO: Write your code here
// Create the checkPermissions function
const checkPermissions = (role: UserRole): void => {
  if (role === 0) {
    console.log('Full access granted');
  } else if (role === 1) {
    console.log('Edit access granted');
  } else {
    console.log('View access only');
  }
};
// Create currentUser variable
const currentUser: UserRole = UserRole.Editor;
// Create guestUser variable
const guestUser: UserRole = 2;
// Call checkPermissions with the required parameters
checkPermissions(adminRole);
checkPermissions(currentUser);
checkPermissions(guestUser);
checkPermissions(UserRole.Admin);
checkPermissions(0);
