export class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // TODO: Add introduce() method returning "Hi, I'm ${name}"
  introduce(): string {
    return `Hi, I'm ${this.name}`;
  }
}
