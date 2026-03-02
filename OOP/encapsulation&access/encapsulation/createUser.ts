export function createUser(username: string, age: number) {
  // Private data - cannot be accessed directly
  let privateUsername = username;
  let privateAge = age;

  // Public methods to interact with private data
  return {
    getUsername: function () {
      return privateUsername;
    },

    // TODO: Add the getAge() method that returns the correct age and the age info remains private
    getAge: function () {
      return privateAge;
    },
  };
}
