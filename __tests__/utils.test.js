import { isMatch, shallowCopy } from '../src/utils';

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
});
