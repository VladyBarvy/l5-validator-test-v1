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
/*
const v = new Validator();

const schema1 = v.number();
console.log(schema1.isValid(11)); // true;

const schema2 = v.number().even();
console.log(schema2.isValid(2)); // true;
console.log(schema2.isValid(11)); // false;

const schema3 = v.number().odd();
console.log(schema3.isValid(22)); // false;
console.log(schema3.isValid(23)); // true;
*/
