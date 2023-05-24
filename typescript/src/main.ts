interface Fruits {
  [item: number]: string,
}

const fruits: Fruits = ['apple', 'banana', 'melon']
console.log(fruits[1]);





interface Getname {
  (message: string): String,
}

interface User { // 모델
  name: String
  readonly age: number
  getName: Getname,
  getName2: (message: string) => string,
}

const heo: User = {
  name: 'ss',
  age: 1,
  getName(message: string) {
    console.log('message');
    return this.name;
  },
  getName2: function (message: string): string {
    throw new Error("Function not implemented.");
  }
}

heo.getName('성진');


let num2!: number;
// num2 = 3;
console.log(num2);

function logText(el:Element) {
  console.log(el.textContent);
}

const h1El = document.querySelector('h1');
if (h1El) {
  logText(h1El);
}




// 타입 단언
// ex1
const el = document.querySelector('.title');
if (el) {
  el.textContent = 'hello';
}

// ex2
function getNumber(x: number | null | undefined) {
  if (x) {
    return Number(x.toFixed(2));
  }
}
getNumber(3);
getNumber(null);

// ex3
function getValue(x: string| number, isNumber: boolean) {
  if (isNumber) {
    // return Number(x.toFixed(2));
  }

  // return x.toUpperCase();
  
}
getNumber(3);
getNumber(null);




//
let num = 12;
num = 15;

function add(a: number, b = 2) {
  return a + b;
}
num = add(1);


// let hello1: String = 'false';
// let hello2: boolean = false;

// hello1 = 'true';

// console.log(hello1);

// // 문자
// let str: String;

// // 숫자
// let num: number;

// // 불린
// let bool: boolean;

// // null / undefined
// let nul: null;
// let und: undefined;
// nul = null;
// console.log(nul);
// console.log(und);

// // 배열
// let fruits: String[] = ['apple', 'banana'];
// let union: (String|number)[] = [1, 2, '삼'];
// let array: number[] = [1, 2];

// // 객체
// let obj: Object = {1: '1', '2': 2};
// let arr: Object = ['1', '2'];

// interface User { // 모델
//   name: String
//   age: number
//   isValid: boolean
// }

// const userA: User = {
//   name: 'seongjin',
//   age: 3,
//   isValid: false,
// }

// const userB: User = {
//   name: 'seongjin',
//   age: 3,
//   isValid: false,
// }

// // 함수
// const add: (x: number, y: number) => number 
// = function name(x: number, y: number): number {
//   return x + y;
// }

// const hello: () => void = function name() {
//   return document.createElement('h1');
// }

// function int(x: number) :number {
//   return x;
// }

// //
// const tuple: [string, number, boolean] = ['a', 1, false];
// const users: [string, number, boolean][] = [['a', 1, false]];

// // void
// function helloTwo(params: String): void {
  
// }
// //Naver
// const nev: number[] = [];
// nev.push(1);

// // union
// let union2: string | number [] = '';


// // intersetion
// interface User {
//   // name: string,
//   age: number
// }
