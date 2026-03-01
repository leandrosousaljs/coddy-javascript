/* Challenge

You're given a calculator object that already has add() and subtract() methods. Your task is to add multiply and divide methods that return this to enable chaining. */

export const calculator = {
  value: 0,

  add(n: number) {
    this.value += n;
    return this;
  },

  subtract(n: number) {
    this.value -= n;
    return this;
  },

  // TODO: Add multiply method here
  multiply(n: number) {
    this.value *= n;
    return this;
  },

  // TODO: Add divide method here
  divide(n: number) {
    this.value /= n;
    return this;
  },

  getValue() {
    return this.value;
  },
};
