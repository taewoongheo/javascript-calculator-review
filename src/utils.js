/**
 *
 * @param {object} regEx
 * @param {string} value
 * @returns {boolean}
 */
export default function isMatch(regEx, value) {
  return new RegExp(regEx).test(value);
}
