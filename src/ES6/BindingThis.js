//****** En Javascript las funciones son objetos ******

export const person = {
  name: "William",
  walk() {
    console.log(this);
  },
};

//Tienen propiedades y objetos que podemos utilizar
//uno de ellos es bind method
//con el metodo bind podemos asignar el valor de THIS permanentemente

export const walk = person.walk.bind(person); //Aca person.walk es un objeto

//Si ejecutamos la funcion walk con bind
//  person.walk.bind(person)
//el valor de this estara basado en el argumento que se pasa en el metodo bind
