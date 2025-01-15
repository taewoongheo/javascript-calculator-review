import isMatch from './utils';

class Calculator {
  /** @type {object} */
  #delimeter = /\/\/.*\n/;

  /**
   *
   * @param {string} value
   * @returns { boolean }
   */
  #hasDelimeter(value) {
    return isMatch(this.#delimeter, value);
  }
}

export default Calculator;
