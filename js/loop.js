// for 반복문
// for (let i = 0; i < 10; i++) {
//     console.log('지금 현재 i 값은', i, '입니다.');
// }

// // while 반복문
// let j = 0;
// while (j < 10) {
//     console.log('지금 현재 j 값은', j, '입니다.');
//     j++;
// }

// // do while 반복문
// let k = 0;
// do {
//     console.log('지금 현재 k 값은', k, '입니다.');
//     k++;
// } while (k < 10);


// const person = {
//     name: '황지민',
//     age: 29,
//     job: '개발자',
// };

// for (key in person) {
//     console.log('key: ', key);

//     if (key === 'job') {
//         if (person[key] === '개발자') {
//             console.log('개발자입니다.');
//         } else {
//             console.log('30세 이상입니다.');
//         }
//     }
//     // console.log(person[key]);
// }

const persons = {
    황지민: {
        age: 29,
        job: '개발자',
        sex: '남',
    },
    홍길동: {
        age: 30,
        job: '개발자',
        sex: '남',
    },
    홍지민: {
        age: 25,
        job: '디자이너',
        sex: '여',
    },
    홍동길: {
        age: 35,
        job: '개발자',
        sex: '남',
    }
};

for (i in persons) {
    if (persons[i].age < 30 && persons[i].sex === '여') {
        console.log(i, '은(는) 30세 미만의 여성입니다.');
    }
};

for (i in persons) {
    for (j in persons[i]) {
        if (j === 'age' && persons[i][j] < 30) {
            if (persons[i].sex === '여') {
                console.log(i, '은(는) 30세 미만의 여성입니다.');
            }
        }
    }
};