# javascript-calculator-precourse

## order

- 덧셈할 문자열을 입력받는다.
- 문자열 앞부분의 커스텀 구분자 여부를 확인한다.
- 커스텀 구분자가 존재하는 경우, 커스텀 구분자를 포함해 구분자를 선택한다.
- 구분자들로 분리된 문자열을 반환한다.
- 분리된 문자가 숫자가 아닌 경우 에러를 발생시킨다.
- 분리된 문자가 양수가 아닌 경우 에러를 발생시킨다.
- 유효한 경우 각 숫자의 합을 반환한다.
- 문자열 덧셈 계산기를 실행시킨다.
- 에러가 발생한 경우 애플리케이션을 종료한다.

## Object

- View: Input, Output와 관련된 UI를 담당한다.
- Calculator: 덧셈기능과 관련된 기능을 담당한다.
- Delimiter: 구분자와 관련된 기능을 담당한다.
- Validator: 유효성을 검증하고 에러를 반환하는 기능을 담당한다.
- App: 애플리케이션의 실행과 종료를 담당한다.
  (Delimiter를 Calculator에 합친 이유가, 정확히 뭐지? 실제 실행에서도 delimiter는 명백한 기능이 있는데?)

### View

- 사용자로부터 문자열을 입력받는다.
- 결과를 출력한다.

### Calculator

- 분리된 문자열의 유효성을 확인하고, 유효한 경우 각 숫자의 합을 반환한다.
  (Calculator와 Delimiter를 합쳤음. )

### Delimiter

- 커스텀 구분자 여부를 확인한다.
- 분리된 문자열을 반환한다.

### Validator

- 구분자의 입력이 올바른지 검증하고, 아닐 경우 에러를 발생
- 문자열의 입력이 올바른지 검증하고, 아닐 경우 에러를 발생

### App

- 실행과 종료
