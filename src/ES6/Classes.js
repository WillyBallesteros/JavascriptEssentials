//El problema con estos dos objetos es que estamos
//duplicando la implementacion del Metodo Walk
//En el mundo real los metodos van a ser mucho mas grandes
const personOld = {
  name: "William",
  walk() {
    console.log("walk");
  },
};

const personOld2 = {
  name: "William",
  walk() {
    console.log("walk");
  },
};

//La clase comienza con Mayuscula
class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log("walk");
  }
}

const person = new Person("William");
