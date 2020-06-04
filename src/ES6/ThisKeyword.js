//This esta retornando una referencia a este objecto person
export const person = {
  name: "William",
  walk() {
    console.log(this);
  },
};

//person.walk();

export const walk = person.walk;
//si ejecuto la funcion walk
//walk()
//Me muestra undefined en la consola

//Esto quiere decir que el valor de this esta determinado
//por como es llamada la funcion

//Si la funcion es llamada como un metodo en un objeto siempre
//retornara la referencia a ese objeto

//Sin embargo si llamamos una funcion como un objeto independiente
//o fuera de un objeto, esto retornara el objeto global el cual es
//el window object en los browsers

//En esta implementacion "react" no podemos ver el objecto window
//por lo que esta activado el modo estricto por defecto

//por eso al ejecutarlo obtenemos "undefined"
