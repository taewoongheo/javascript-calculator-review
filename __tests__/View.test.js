import { MissionUtils } from '@woowacourse/mission-utils';
import View from '../src/View.js';

const getReadLineAsyncSpy = () => {
  const readLineAsyncSpy = jest.spyOn(MissionUtils.Console, 'readLineAsync');
  readLineAsyncSpy.mockClear();
  return readLineAsyncSpy;
};

describe('View', () => {
  let view;
  let readLineAsyncSpy;

  beforeEach(() => {
    view = new View();
    readLineAsyncSpy = getReadLineAsyncSpy();
  });

  describe('input', () => {
    it('query가 숫자인 경우 에러 없이 input 메서드를 호출할 수 있다.', () => {
      // given
      const query = '123';

      // when
      view.input(query);

      // then
      expect(readLineAsyncSpy).toHaveBeenCalled();
    });
    it('query가 문자열인 경우 에러 없이 input 메서드를 호출할 수 있다.', () => {
      // given
      const query = 'string';

      // when
      view.input(query);

      // then
      expect(readLineAsyncSpy).toHaveBeenCalled();
    });
  });
});
