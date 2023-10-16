/* eslint-disable class-methods-use-this */
import NumberSchema from './NumberSchema.js';
class Validator {
  number() {
    return new NumberSchema();
  }
}

 export default Validator;
