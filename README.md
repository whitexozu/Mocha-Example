# aht


mocha 명령어로 테스트를 진행할 때 다음과 같은 옵션을 사용할 수 있습니다.

$ mocha [debug] [options] [files]
-V, --version: Mocha의 버전을 확인합니다.
-A, --async-only: 비동기 테스트만 허용합니다.
-c, --colors: 코드 색상을 활성화합니다.
-C, --no-colors: 코드 색상을 비활성화합니다.
-R, --reporter <name>: 테스트 결과에 대한 리포팅 방식을 설정합니다.
-b, --bail: 첫번째 실패한 테스트만 확인합니다.
-g, --grep <pattern>: 지정한 정규표현식 패턴과 일치하는 테스트만 진행합니다.
-f, --fgrep <string>: 지정한 문자열을 포함하는 테스트만 진행합니다.
-i, --invert: --grep, --fgrep 결과와 일치하지 않는 테스트만 진행합니다. ex> mocha -f 'abc' -i
-r, --require <name>: 가져올 모듈(should.js, chai 같은 Assertion 라이브러리)을 지정합니다.
-t, --timeout <ms>: 지정한 테스트가 제한 시간(기본값 2000)을 지나면 실패합니다. 단일 테스트의 제한 시간을 설정할 수 있습니다.
-u, --ui <name>: 사용자 인터페이스를 지정합니다. ex> mocha -u tdd
-w, --watch: 테스트 대상 파일들을 감시합니다.