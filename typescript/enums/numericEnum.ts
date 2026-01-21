/* Challenge

Create a numeric enum named UserRole with three members: Admin, Editor, and Viewer.

Create three variables to demonstrate the enum values:

adminRole of type UserRole and assign it UserRole.Admin
editorRole of type UserRole and assign it UserRole.Editor
viewerRole of type UserRole and assign it UserRole.Viewer
Print the following outputs on separate lines:

Print the value of adminRole
Print the value of editorRole
Print the value of viewerRole
Print the numeric value of UserRole.Admin
Print the numeric value of UserRole.Editor
Print the numeric value of UserRole.Viewer */

// TODO: Write your code here
// Create the UserRole enum and variables as described in the challenge
enum UserRole {
  Admin,
  Editor,
  Viewer,
}

const adminRole: UserRole = UserRole.Admin;
const editorRole: UserRole = UserRole.Editor;
const viwerRole: UserRole = UserRole.Viewer;
// Print the required outputs
console.log(adminRole);
console.log(editorRole);
console.log(viwerRole);
console.log(UserRole.Admin);
console.log(UserRole.Editor);
console.log(UserRole.Viewer);
