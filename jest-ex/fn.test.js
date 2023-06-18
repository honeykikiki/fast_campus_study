import fn from './fn';

// test('1은 1 이다', () => {
//   expect(1).toBe(1);
// });

// test('2 + 3 = 5', () => {
//   expect(fn.add(2, 3)).toBe(5);
// });

// test('2 + 3 = 5', () => {
//   expect(fn.add(2, 3)).toEqual(5);
// });
// toBe() =>
// toEqual() =>
// toStrictEqual =>

// test('이름과 나이를 전달 받아서 객체를 반환해줘', () => {
//   expect(fn.makeUser('jack', 20)).toEqual({
//     name: 'jack',
//     age: 20
//   });
// })

// test('이름과 나이를 전달 받아서 객체를 반환해줘', () => {
//   expect(fn.makeUser('jack', 20)).toStrictEqual({
//     name: 'jack',
//     age: 20
//   });
// })

// toBeNull
// toBeUndefind
// toBeDefined
// test('null은 null입니다.', () => {
//   expect(null).toBeNull();
// })

// toBeTruthy true
// toBeFalsy false

test('"1"은 true 입니다.', () => {
  expect(fn.add('1', -1)).toBeTruthy();
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 크거나 같다
// toBeLessThan 작다
// toBeLessThanOrEqual 작거나 같다
test('ID는 10자 이하여야 합니다.', () => {
  const Id = 'T';
  expect().toBeGreaterThan;
  // expect().toBeGreaterThanOrEqual
  // expect().toBeLessThan
  // expect().toBeLessThanOrEqual
});
