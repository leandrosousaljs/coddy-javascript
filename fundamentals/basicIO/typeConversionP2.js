/* Challenge

In this challenge, you'll practice converting between different data types in JavaScript, focusing on Boolean and String conversions.

You are given several variables with different values. Your task is to:

Convert the string '42' to a boolean using Boolean()
Convert the number 0 to a boolean using Boolean()
Convert the number 7 to a boolean using Boolean()
Convert the empty string '' to a boolean using Boolean()
Convert the boolean true to a string using String()
Convert the number 123 to a string using String() */

// Values to convert
const stringValue = '42';
const zeroNumber = 0;
const positiveNumber = 7;
const emptyString = '';
const boolValue = true;
const numValue = 123;

// TODO: Convert stringValue to a boolean and log the result

console.log("Boolean('42'): ", Boolean(stringValue));

// TODO: Convert zeroNumber to a boolean and log the result
console.log('Boolean(0): ', Boolean(zeroNumber));

// TODO: Convert positiveNumber to a boolean and log the result
console.log('Boolean(7): ', Boolean(positiveNumber));

// TODO: Convert emptyString to a boolean and log the result
console.log("Boolean(''): ", Boolean(emptyString));

// TODO: Convert boolValue to a string and log the result
console.log('String(true): ', String(boolValue));

// TODO: Convert numValue to a string and log the result
console.log('String(123): ', String(numValue));
