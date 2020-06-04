//var -> function
//let -> block
//const -> block y no se puede reasignar

//Cuando se define una variable con VAR la variable es accesible dentro
// de la funcion en la cual se definio.
export const sayHelloVar = function () {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log(i);
};

//Cuando se define una variable con LET la variable es accesible dentro
// del bloque donde se define.
export const sayHelloLet = function () {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
};
