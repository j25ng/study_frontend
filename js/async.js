// const ws = (msg, ms) => {
//     return new Promise((resolve) =>
//         setTimeout(() => {
//             console.log(msg);
//             resolve();
//         }, ms),
//     );
// };

// const run = async () => {
//     await ws('1', 1000);
//     await ws('2', 2000);
//     await ws('3', 1000);
// };

// run();

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then((response) => response.json())
//     .then((json) => console.log('data', json))
//     .catch((error) => {
//         console.log(error);
//     });

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();

        console.log('data', data);
    } catch (error) {
        console.log('error', error);
    }
};

fetchData();