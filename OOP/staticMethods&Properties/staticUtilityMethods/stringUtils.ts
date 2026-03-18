/* Challenge

Create a class named StringUtils with a static method called capitalize that takes a string as an argument and returns the same string with the first letter capitalized. For example, if the input is "javascript", the method should return "Javascript". Export this class.

Check if the string is empty: if (!str || str.length === 0) (Without this check an empty string could cause issues).
!str checks for null/undefined (prevents errors)
str.length === 0 checks for empty string (returns "" instead of crashing)
Get the first character: str.charAt(0)
Make it uppercase: .toUpperCase()
Get the rest of the string: str.slice(1) (from position 1 to end)
Combine: uppercase first character + rest of string */

// TODO: Create a class named StringUtils and export it
export class StringUtils {
  // TODO: Add a static method called capitalize
  // This method should take a string as an argument and return the same string with the first letter capitalized
  static capitalize(str: string) {
    // TODO: Check if the string is empty
    if (!str || str.length === 0) return str;
    // TODO: Get the first character: str.charAt(0)
    // TODO: Make it uppercase: .toUpperCase()
    // TODO: Get the rest of the string: str.slice(1) (from position 1 to end)
    // TODO: Combine: uppercase first character + rest of string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
