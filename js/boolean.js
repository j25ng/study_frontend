const a = 1;
const b = '1';
const c = 2;
const d = 1;

// 논리 연산자
console.log('a === b && a < c', a === b && a < c); // 둘 중 하나라도 false면 false
console.log('a === b || a < c', a === b || a < c); // 둘 중 하나라도 true면 true

// 부정 연산자
console.log(!false);
console.log('a !== b', a !== b);
console.log('a != b', a != b);

// 비교 연산자
console.log('a == b', a == b); // true
console.log('a === b', a === b); // false
console.log('a < c', a < c); // true
console.log('a > c', a > c); // false
console.log('a <= d', a <= d); // true
console.log('a >= d', a >= d); // false

// 증감 연산자
let e = 1;
e++; // e = e + 1;
console.log('e++', e); // e = 2
e--; // e = e - 1;
console.log('e--', e); // e = 1
console.log('++e', ++e); // e = 2
console.log('--e', --e); // e = 1