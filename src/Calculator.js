class Calculator {
  /** @type {Delimiter} */
  #delimiter;

  constructor(delimiter) {
    this.#delimiter = delimiter;
  }

  /**
   *
   * @param {string} value
   * @returns {number}
   */
  calculate(value) {
    return this.#delimiter
      .getDelimitedString(value)
      .reduce((sum, current) => sum + Number(current), 0);
  }
}

export default Calculator;
