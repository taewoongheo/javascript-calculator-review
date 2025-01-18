import App from './App.js';
import Calculator from './Calculator.js';
import Delimiter from './Delimiter.js';
import SchemaValidator from './lib/SchemaValidator.js';
import Validator from './Validator.js';
import View from './View.js';

const app = new App(
  new Calculator(),
  new Delimiter(),
  new Validator(new SchemaValidator()),
  new View(),
);

await app.run();
