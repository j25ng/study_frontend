const a = 1;
const b = 10;
const c = 100;

// 기본 함수 선언식
function Hwang(x, y) {
    return x / y;
};

console.log(Hwang(b, c));

// 화살표 함수 선언식
const arrowFunction = (x, y) => {
    return x * y;
};

console.log(arrowFunction(c, b));