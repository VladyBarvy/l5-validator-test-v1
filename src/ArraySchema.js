/* eslint-disable class-methods-use-this */
export default class ArraySchema {
  validators = [(value) => Array.isArray(value)];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  length(num) {
    const validator = (value) => {
      if (value.length === num) {
        return true;
      // eslint-disable-next-line
      } else {
        return false;
      }
    };
    this.validators.push(validator);
    return this;
  }
}
