class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

//se debe llamar el constructor de la clase padre  **super
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("William", "SW Eng");
