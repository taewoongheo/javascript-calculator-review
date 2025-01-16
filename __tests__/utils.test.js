import {
  isMatch,
  isNumericString,
  isPositiveNumber,
  shallowCopy,
} from '../src/utils';

describe('utils', () => {
  describe('isMatch', () => {
    it('문자열에 일치하는 정규표현식이 있을 경우, true를 반환한다.', () => {
      // given
      const regEx = /\/\/.*\n/;
      const value = '//;\n1;2;3';

      // when
      const result = isMatch(regEx, value);

      // then
      expect(result).toBe(true);
    });

    it('문자열에 일치하지 않은 정규표현식일 경우, false를 반환한다.', () => {
      // given
      const regEx = /\/\/.*\n/;
      const value = '1;2;3';

      // when
      const result = isMatch(regEx, value);

      // then
      expect(result).toBe(false);
    });
  });

  describe('shallowCopy', () => {
    it('배열을 입력받은 경우 얕은 복사를 진행한 배열을 반환한다.', () => {
      // given
      const arr = [1, 2, 3];

      // when
      const result = shallowCopy(arr);

      // then
      expect(result).not.toBe(arr);
    });
  });

  describe('isNumericString', () => {
    it('숫자로 바꿀 수 있는 문자열이면 true를 반환한다.', () => {
      // given
      const value = '123';

      // when
      const result = isNumericString(value);

      // then
      expect(result).toBe(true);
    });

    it('숫자로 바꿀 수 없는 문자열이면 false를 반환한다.', () => {
      // given
      const value = 'abc';

      // when
      const result = isNumericString(value);

      // then
      expect(result).toBe(false);
    });
  });

  describe('isPositiveNumber', () => {
    describe('주어진 변수가 문자열인 경우', () => {
      it('숫자로 변환하여 결과를 반환한다.', () => {
        // given
        const value = '123';

        // when
        const result = isPositiveNumber(value);

        // then
        expect(result).toBe(true);
      });
    });

    describe('주어진 변수가 숫자인 경우', () => {
      it('양수인 경우 true를 반환한다.', () => {
        // given
        const value = 123;

        // when
        const result = isPositiveNumber(value);

        // when
        expect(result).toBe(true);
      });
      it('음수인 경우 false를 반환한다.', () => {
        // given
        const value = -123;

        // when
        const result = isPositiveNumber(value);

        // when
        expect(result).toBe(false);
      });
      it('0인 경우 false를 반환한다', () => {
        // given
        const value = 0;

        // when
        const result = isPositiveNumber(value);

        // when
        expect(result).toBe(false);
      });
    });
  });
});
