import { Person } from "./Person";

//Named export  { promote }
export function promote() {}

//Default export Teacher
export default class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}
