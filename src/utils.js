/**
 *
 * @param {object} regEx
 * @param {string} value
 * @returns {boolean}
 */
export function isMatch(regEx, value) {
  return new RegExp(regEx).test(value);
}

/**
 *
 * @param {Array | Object} object
 * @returns {Array | Object | null}
 */
export function shallowCopy(object) {
  if (Array.isArray(object)) {
    return Object.assign([], object);
  }

  if (typeof object === 'object' && object !== null) {
    return { ...object };
  }

  return null;
}

/**
 *
 * @param {string} value
 */
export function isNumericString(value) {
  return !isNaN(value);
}

export function isPositiveNumber(value) {
  return Number(value) > 0;
}
