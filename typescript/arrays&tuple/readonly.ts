/* Challenge

Create a readonly array named configValues that can only hold strings and initialize it with the values "production", "database", and "cache".

Then create another readonly array named ports that can only hold numbers and initialize it with the values 3000, 5432, and 6379.

Finally, create a readonly array named features that can only hold boolean values and initialize it with true, false, and true.

Print all three readonly arrays to the console on separate lines in the order they were created. */

// TODO: Write your code here

const configValues: readonly string[] = ['production', 'database', 'cache'];
const ports: readonly number[] = [3000, 5432, 6379];
const features: readonly boolean[] = [true, false, true];

console.log(configValues);
console.log(ports);
console.log(features);
