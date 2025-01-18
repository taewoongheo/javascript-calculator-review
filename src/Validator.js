import { isNumericString, isPositiveNumber } from './utils.js';

class Validator {
  /** @type {SchemaValidator} */
  #validator;

  static ERROR_MESSAGE = Object.freeze({
    HAS_NOT_ALLOWED_DELIMITER:
      '[ERROR] 쉼표(,), 콜론(:) 또는 "//"와 "\\n" 사이에 위치하는 문자만 구분자로 사용할 수 있습니다.',
    HAS_NEGATIVE_OR_ZERO_NUMBER: '[ERROR] 음수 또는 0은 사용할 수 없습니다.',
  });

  constructor(validator) {
    this.#validator = validator;
  }

  #hasAllowedDelimiter(value) {
    return value.every((aValue) => isNumericString(aValue));
  }

  #hasPositiveNumber(value) {
    return value.every((aValue) => isPositiveNumber(aValue));
  }

  validate(value) {
    this.#validator
      .validate(value)
      .with(this.#hasAllowedDelimiter, {
        message: Validator.ERROR_MESSAGE.HAS_NOT_ALLOWED_DELIMITER,
      })
      .with(this.#hasPositiveNumber, {
        message: Validator.ERROR_MESSAGE.HAS_NEGATIVE_OR_ZERO_NUMBER,
      });
  }
}

export default Validator;
