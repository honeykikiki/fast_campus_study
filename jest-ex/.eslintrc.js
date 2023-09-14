module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'module',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 0, // 쓰지않는 변수 오류표시
  },
  eslintConfig: {
    extends: ['jest'],
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     node: true,
//     es6: true,
//   },
//   extends: "eslint:recommended",
//   parserOptions: {
//     ecmaVersion: 2022,
//   },
//   rules: {
//     indent: [error, 2], // 들여쓰기에 대해 일관된 2칸 사용을 강제합니다.
//     quotes: [error, single], // 문자열에는 홑따옴표를 사용하도록 강제합니다.
//     semi: [error, always], // 문장 끝에는 세미콜론을 필수로 요구합니다.
//     "no-console": warn, // console문 사용에 대해 경고를 표시합니다 (예: console.log)
//     "no-unused-vars": warn, // 사용되지 않는 변수에 대해 경고를 표시합니다.
//     "no-var": error, // var 대신 const 또는 let 사용을 권장합니다.
//     "prefer-const": error, // 재할당되지 않는 변수에는 const 사용을 권장합니다.
//     "arrow-spacing": [error, { before: true, after: true }], // 화살표 함수 앞뒤에 일관된 공백을 요구합니다.
//     "object-curly-spacing": [error, always], // 객체 내 중괄호 내부에 일관된 공백을 요구합니다.
//     "array-bracket-spacing": [error, always], // 배열 내 대괄호 내부에 일관된 공백을 요구합니다.
//     "no-trailing-spaces": error, // 줄 끝에 공백이 있는 경우 에러를 표시합니다.
//     "comma-spacing": [error, { before: false, after: true }], // 쉼표 앞뒤에 일관된 공백을 요구합니다.
//     "space-infix-ops": error, // 중위 연산자 주변에 공백을 요구합니다 (예: +, -)
//     "space-before-function-paren": [error, never], // 함수 괄호 앞에 공백을 허용하지 않습니다.
//     "keyword-spacing": [error, { before: true, after: true }], // 키워드 주변에 일관된 공백을 요구합니다.
//     "brace-style": [error, "1tbs", { allowSingleLine: true }], // 제어문에 대해 한 줄로도 허용하는 1TBS 중괄호 스타일을 요구합니다.
//     "no-else-return": error, // return문 다음에 else 블록을 사용하지 않도록 요구합니다.
//     "no-multi-spaces": error, // 연속된 공백 사용을 금지합니다.
//     eqeqeq: [error, always], // 엄격한 동등 연산자 (===, !==) 사용을 요구합니다.
//     "no-alert": error, // alert, prompt, confirm 사용을 금지합니다.
//     "no-empty": error, // 빈 블록문을 허용하지 않습니다.
//     "no-eval": error, // eval 함수 호출을 금지합니다.
//     "no-extra-parens": [error, all, { nestedBinaryExpressions: false }], // 불필요한 괄호 사용을 금지합니다.
//     "no-implied-eval": error, // setTimeout, setInterval, new Function에서 암시적인 eval 사용을 금지합니다.
//     "no-lone-blocks": error, // 불필요한 중첩된 블록문을 금지합니다.
//     "no-multiple-empty-lines": [error, { max: 1 }], // 최대 한 줄의 빈 줄을 허용합니다.
//     "no-new-func": error, // Function 생성자 사용을 금지합니다.
//     "no-return-assign": error, // return 문 안에서 할당을 금지합니다.
//     "no-self-compare": error, // 조건문에서 자기 자신과의 비교를 금지합니다.
//     "no-useless-return": error, // 불필요한 return 문을 금지합니다.
//     "no-with": error, // with 문 사용을 금지합니다.
//     radix: error, // parseInt() 함수에 기수를 명시하지 않는 것을 금지합니다.
//     yoda: [error, never], // Yoda 조건을 금지합니다 (예: if (5 === x) 대신 if (x === 5) 사용).
//     "no-use-before-define": error, // 선언 전에 변수 사용을 금지합니다.
//     "prefer-template": error, // 문자열 연결에 대신 템플릿 리터럴 사용을 권장합니다.
//     "no-shadow": error, // 외부 스코프와 동일한 이름의 변수 숨김을 금지합니다.
//     "no-duplicate-imports": error, // 중복된 import문을 금지합니다.
//     "arrow-parens": [error, "as-needed"], // 화살표 함수의 괄호 사용을 필요에 따라 지정합니다.
//     "arrow-body-style": [error, "as-needed"], // 화살표 함수의 본문 스타일을 필요에 따라 지정합니다.
//     "no-confusing-arrow": error, // 화살표 함수와 비교 연산자를 혼동하지 않도록 합니다.
//     "prefer-destructuring": [error, { object: true, array: false }], // 객체와 배열에 대해 구조 분해 사용을 권장합니다.
//   },
// };
