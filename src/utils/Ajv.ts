import AjvValidator from 'ajv';
import addFormats from 'ajv-formats';
import CustomError from './CustomError';

const ajv = new AjvValidator({ allErrors: true });
addFormats(ajv);

require('ajv-errors')(ajv);

class Ajv {
  public static validate(schema: object, args: object) {
    if (!ajv.validate(schema, args)) {
      return this.ajvValidate(ajv.errors);
    }
    return null;
  }

  private static ajvValidate(errors: any) {
    type typeMessages = {
      [key: string]: any;
    };
    const messages: typeMessages = {};
    for (const { message, instancePath } of errors) {
      const instances = [];
      for (const instance of instancePath.split('/')) {
        if (instance.length > 0) {
          instances.push(instance);
        }
      }
      const property = message.split(' ')[0];
      messages[instances[instances.length - 1] === property ? instances.join('.') : instances.length > 0 ? `${instances.join('.')}.${property}` : property] =
        message;
    }
    return new CustomError(JSON.stringify(messages));
  }
}

export default Ajv;
