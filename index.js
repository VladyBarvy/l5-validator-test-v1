import Validator from './src/Validator.js';

export default Validator;

const v = new Validator();

const schema1 = v.number();
console.log(schema1.isValid(11)); // true;

const schema2 = v.number().even();
console.log(schema2.isValid(2)); // true;
console.log(schema2.isValid(11)); // false;

const schema3 = v.number().odd();
console.log(schema3.isValid(22)); // false;
console.log(schema3.isValid(23)); // true;


const schema4 = v.array();

console.log(schema4.isValid([])); // true
console.log(schema4.isValid(123)); // false
console.log(schema4.isValid('Hexlet')); // false

/*
const schema5 = v.array();

console.log(schema5.isValid([1, 2])); // true

const schema6 = v.array().length(4);
console.log(schema6.isValid([1, 2])); // false
console.log(schema6.isValid([1, 2, 2, 1])); // true
*/
