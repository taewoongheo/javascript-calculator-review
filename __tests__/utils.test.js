import isMatch from '../src/utils';

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
});
