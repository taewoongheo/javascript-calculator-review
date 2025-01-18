class App {
  /** @type {Calculator} */
  #calculator;

  /** @type {Validator} */
  #validator;

  /** @type {View} */
  #view;

  constructor(calculator, validator, view) {
    this.#calculator = calculator;
    this.#validator = validator;
    this.#view = view;
  }

  async run() {
    try {
      const input = await this.#view.input('덧셈할 문자열을 입력해주세요.');

      this.#validator.validate(input);

      const result = this.#calculator.calculate(input);

      this.#view.output(`결과: ${result}`);
    } catch (error) {
      this.#view.output(error);
    }
  }
}

export default App;
