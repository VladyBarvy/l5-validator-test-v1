/* eslint-disable class-methods-use-this */
import NumberSchema from './NumberSchema.js';
class Validator {
    number() {
        return new NumberSchema();
    }
/*
    number() {
      
        class InstanceNumberValidator {

            validators = (value) => typeof value === 'number';
          
            isValid(value) {
              return (this.validators(value) === true);
            }


            even() {
                const validator = (value) => value % 2 === 0;
                //this.validators.push(validator);
                this.validators = validator;
                return this;
            }


            odd() {
                const validator = (value) => value % 2 !== 0;
                //this.validators.push(validator);
                this.validators = validator;
                return this;
            }     
                    
        }
        
        return new InstanceNumberValidator();
    }
*/






    
  }

  export default Validator;
