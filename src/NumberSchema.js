export default class NumberSchema {

  validators = [(value) => typeof value === 'number'];

  isValid(value) {
    return this.validators.every((validator) => validator(value));
  }

  even () {
    const vali = (value) => value % 2 === 0;
    this.validators.push(vali);
    return this;
  }

  odd () {
    const vali = (value) => value % 2 !== 0;
    this.validators.push(vali);
    return this;
  }
}
