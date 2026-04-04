import { Person } from './person.ts';

export class Professor extends Person {
  department: string;

  constructor(name: string, age: number, department: string) {
    super(name, age);
    this.department = department;
  }

  // Professor-specific method
  teach(course: string): string {
    return `${this.name} is teaching ${course}`;
  }

  // TODO: Override introduce() to return "Prof. ${name} from ${department}"
  introduce(): string {
    return `Prof. ${this.name} from ${this.department}`;
  }
}
