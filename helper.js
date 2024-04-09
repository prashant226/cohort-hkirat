// // function sum(a, b) {
// //     return a + b;
// // }

// // const sum = (a, b) => {
// //     return a + b;
// // }

// // const ans = sum(1, 2);
// // console.log(ans);


// [1,2,3,4] is the input 
// and output is [2,4,6,8]

//MAP in JS



// function transform(i) {
//     return i * 2;
// }
// const ans = arr.map(transform);
// console.log(ans);

//FILTER

// const arr1 = [1, 2, 3, 4, 5]
// const newArr = [];
// for (let i = 0; i < arr1.length; i++) {
//     if (arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

const arr = [1, 2, 3, 4, 5]

function filterLogic(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}


const ans = arr.filter(filterLogic);
console.log(ans);