import Validator from './src/Validator.js';

export default Validator;

/*
const v = new Validator();
const schema = v.number();

console.log(schema.isValid(null)); // false
console.log(schema.isValid('')); // false
console.log(schema.isValid(true)); // false
console.log(schema.isValid(123)); // true
console.log(schema.isValid(0)); // true
*/

const v = new Validator();
const schema = v.array();

console.log(schema.isValid([]));        // true
console.log(schema.isValid(123));       // false
console.log(schema.isValid('Hexlet'));  // false
