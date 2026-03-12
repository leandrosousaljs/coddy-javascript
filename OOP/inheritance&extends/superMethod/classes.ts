export class Meal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class Salad extends Meal {
  ingredients: string[];

  constructor(name: string, ingredients: string[]) {
    // TODO: Add super() call here
    super(name);
    // TODO: Set ingredients property here
    this.ingredients = ingredients;
  }
}
