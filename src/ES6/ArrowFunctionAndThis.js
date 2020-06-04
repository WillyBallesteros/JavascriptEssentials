// Las funciones flecha no rebind this

//En el callback del settimeout
const personOld = {
  talk() {
    setTimeout(function () {
      console.log("this", this);
    }, 1000);
  },
};

//person.talk();
//cuando se ejecuta la funcion obtenemos el Objeto window, no el objeto persona

//El callback no es parte de ningun objeto, es independiente
//En los callback es strict mode no sobreescribe este comportamiento
//Entonces retorna una referencia del objeto window

//Entonces como obtenemos la referencia del objeto persona en la funcion?
// anteriormente se utilizaba var self = this;  ** old days **

// const person = {
//     talk() {
//       var self = this;
//       setTimeout(function () {
//         console.log("self", self);
//       }, 1000);
//     },
//   };

const person = {
  talk() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

// ** Arrow Functions don't rebind the this keyword **
