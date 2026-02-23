function calculate(a: number, b: number, operation: string) {
  if (operation === '+') return a + b;
  if (operation === '-') return a - b;
}

// TODO: Export square function as named here
export function square(x: number) {
  return x * x;
}

// TODO: Export calculate function as default here

export default calculate;
