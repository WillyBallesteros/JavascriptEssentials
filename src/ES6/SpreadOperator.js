const first = [1, 2, 3];
const second = [4, 5, 6];

const combinedOld = first.concat(second);
//con el spread agregamos individualmente cada elemento del array
const combined = [...first, "other", ...second, "another"];

//clone
const clone = [...first];

// ***  Funciona tambien para objetos ***

const name = { name: "William" };
const job = { job: "Developer" };

const user = { ...name, ...second, location: "Duitama" };

//clone
const cloneName = { ...name };
