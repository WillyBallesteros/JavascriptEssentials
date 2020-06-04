//El método map() crea un nuevo array con los resultados
//de la llamada a la función indicada aplicados a cada uno de sus elementos
//No modifica el arreglo original
//recibe un callback como parametro
const colors = ["red", "green", "blue"];
const itemsOld = colors.map(function (color) {
  return "<li>" + color + "</li>";
});

//podemos mejorar el codigo con Arroy function y template literal
//backTick character
export const items = colors.map((color) => `<li>${color}</li>`);
