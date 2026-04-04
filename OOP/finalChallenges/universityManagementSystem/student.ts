import { Person } from './person.ts';

export class Student extends Person {
  major: string;
  grades: number[];

  constructor(name: string, age: number, major: string) {
    super(name, age);
    this.major = major;
    this.grades = [];
  }

  getGPA(): number | string {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    const average = sum / this.grades.length;
    return (average / 25).toFixed(2); // Convert to 4.0 scale
  }

  // TODO: Override introduce() to return ${super.introduce()}, a ${this.major} student
  introduce(): string {
    return `${super.introduce()}, a ${this.major} student`;
  }
  // TODO: Add addGrade(grade) method that takes a grade between 0 and 100
  addGrade(grade: number): void {
    // TODO: Check if grade is between 0 and 100
    if (grade < 0 || grade > 100) {
      // TODO: If invalid: Log: "Grade must be between 0 and 100"
      console.log('Grade must be between 0 and 100');
    } else {
      // TODO: If valid: Add to this.grades array
      this.grades.push(grade);
    }
  }
}
