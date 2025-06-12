// const array = [1, 2, 3, 4, 5]

// const humanArray = ['홍길동', '김철수', '김지민']

// const objectArray = [
//     { name: '홍길동' },
//     { name: '김철수' },
//     { name: '김지민' },
// ];

// for (let i = 0; i < humanArray.length; i++) {
//     console.log(humanArray[i]);
// }

// array.push(6);  // (what to add)
// console.log(array);

// array.pop();    // pop은 마지막 요소를 삭제합니다.
// console.log(array);

// array.unshift(0);   // (what to add)
// console.log(array);

// array.shift();  // (how many to delete)
// console.log(array);

// array.splice(2, 0, 3); // (index, how many to delete, what to add)
// console.log(array);

// array.splice(2, 1); // (index, how many to delete)
// console.log(array);

// const copyArray = array.slice(1, 3); // (start index, end index - not included)
// console.log(copyArray);

// console.log(array.concat(copyArray));
// // array.concat(...copyArray); // (what to add)

// const mapArray = array.map((e) => e * 2); // map은 배열의 각 요소를 변환하여 새로운 배열을 만듭니다.
// console.log(mapArray);

// const filterArray = array.filter((e) => e > 2); // filter는 조건에 맞는 요소만을 포함하는 새로운 배열을 만듭니다.
// console.log(filterArray);

// const findArray = array.find((e) => e === 3); // find는 조건에 맞는 첫 번째 요소를 반환합니다.
// console.log(findArray);

// reduce(acc, cur) : acc = 누적값, cur = 현재값
// const reduceArray = array.reduce((acc, cur) => acc + cur, 0); // reduce는 배열의 모든 요소를 누적하여 하나의 값을 만듭니다.
// console.log(reduceArray);

// const nonSortArray = [100, 20, 4, 3000];
// const sortArray = nonSortArray.sort();
// const realSortArray = nonSortArray.sort((a, b) => a - b); // sort는 배열을 정렬합니다. 기본적으로 문자열로 정렬되므로 숫자로 정렬하려면 비교 함수를 사용해야 합니다.
// console.log(realSortArray);

// const array1 = [];
// const array2 = [];

// for (let i = 0; i <= 100; i++) {
//     array1.push(i);
// }

// for (let i = 101; i <= 200; i++) {
//     array2.push(i);
// }

// console.log(array1);
// console.log(array2);

// const evenArray = array1.concat(array2).filter((e) => e % 2 === 0); // 짝수만 필터링
// console.log(evenArray);

// console.log(evenArray.sort((a, b) => b - a)); // 내림차순 정렬

// console.log(evenArray.reduce((acc, cur) => acc + cur, 0)); // 모든 요소의 합계

// const oneComboArray = array1
//     .concat(array2)
//     .filter((e) => e % 2 === 0)
//     .sort((a, b) => b - a)
//     .reduce((acc, cur) => acc + cur, 0);

// console.log(oneComboArray); // 짝수만 필터링, 내림차순 정렬, 합계

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (const data of array) {
//     console.log(data);
// }

// humansArray = ['홍길동', '김철수', '김지민'];

// humansArray.forEach((data, index) => { // forEach는 배열의 각 요소에 대해 함수를 실행합니다. (data, index) => { ... }는 콜백 함수입니다. data는 현재 요소, index는 현재 요소의 인덱스를 나타냅니다.
//     console.log(data, index);
// });

// const newArray = array.map((data, index) => { // map은 배열의 각 요소를 변환하여 새로운 배열을 만듭니다.
//     return data * 2; // 각 요소를 2배로 변환
// });

// console.log(newArray); // [2, 4, 6, 8, 10]

const scores = [85, 90, 50, 58, 92, 82, 61, 45, 70, 74];
const newScores = [];

for (const score of scores) {
    if (score >= 60) {
        newScores.push(score);
    }
}

console.log(newScores.reduce((acc, cur) => acc + cur, 0) / newScores.length);