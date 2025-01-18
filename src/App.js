import Calculator from './Calculator.js';
import Delimiter from './Delimiter.js';
import Validator from './Validator.js';
import View from './View.js';

class App {
  /** @type {Calculator} */
  #calculator;

  /** @type {Delimiter} */
  #delimiter;

  /** @type {Validator} */
  #validator;

  /** @type {View} */
  #view;

  constructor(calculator, delimiter, validator, view) {
    this.#calculator = calculator;
    this.#delimiter = delimiter;
    this.#validator = validator;
    this.#view = view;
  }

  async run() {
    try {
      const input = await this.#view.input('덧셈할 문자열을 입력해주세요.');

      const delimitedString = this.#delimiter.getDelimitedString(input);

      this.#validator.validate(delimitedString);

      const result = this.#calculator.calculate(delimitedString);

      this.#view.output(`결과: ${result}`);
    } catch (error) {
      this.#view.output(error);
    }
  }
}

export default App;
