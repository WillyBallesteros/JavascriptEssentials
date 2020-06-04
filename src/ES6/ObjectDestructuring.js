// La sintaxis de asignación desestructurante (destructuring assignment)
// es una expresión que posibilita la extracción de datos de arrays,
// o de propiedades de objetos, en variables distintas.

const address = {
  street: "",
  city: "",
  country: "",
};

//repetitive
const streetOld = address.street;
const cityOld = address.city;
const countryOld = address.country;

//Destructuring
const { street, city, country } = address;

//Alias
const { street: st } = address;
