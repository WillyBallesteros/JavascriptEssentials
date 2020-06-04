// OLD javascript
export const squareOld = function (number) {
  return number * number;
};

//ES6 Arrow function
//remover la palabra function
//colocar la flecha gorda
//Si es un solo parametro podemos quitar los parentesis
//Si no hay parametros se deja () los parentesis vacios
//No necesita la palabra return
export const square = (number) => number * number;

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

//OLD
const activeJobsOld = jobs.filter(function (job) {
  return job.isActive;
});
//Arrow function
const activeJobs = jobs.filter((job) => job.isActive);
