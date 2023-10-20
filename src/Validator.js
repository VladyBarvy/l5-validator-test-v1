/* eslint-disable class-methods-use-this */
import NumberSchema from './NumberSchema.js';
import ArraySchema from './ArraySchema.js';

class Validator {
  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }
}

export default Validator;
