let hello1: String = 'false';
let hello2: boolean = false;

hello1 = 'true';

console.log(hello1);

// 문자
let str: String;

// 숫자
let num: number;

// 불린
let bool: boolean;

// null / undefined
let nul: null;
let und: undefined;
nul = null;
console.log(nul);
console.log(und);

// 배열
let fruits: String[] = ['apple', 'banana'];
let union: (String|number)[] = [1, 2, '삼'];
let array: number[] = [1, 2];

// 객체
let obj: Object = {1: '1', '2': 2};
let arr: Object = ['1', '2'];

interface User { // 모델
  name: String
  age: number
  isValid: boolean
}

const userA: User = {
  name: 'seongjin',
  age: 3,
  isValid: false,
}

const userB: User = {
  name: 'seongjin',
  age: 3,
  isValid: false,
}

// 함수
const add: (x: number, y: number) => number 
= function name(x: number, y: number): number {
  return x + y;
}

const hello: () => void = function name() {
  return document.createElement('h1');
}

function int(x: number) :number {
  return x;
}

//


