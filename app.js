alert("Em để các bài ở dạng comment nên anh bỏ comment để xem từng bài giúp em với ạ, em cảm ơn :> ");
//Ex1: 

// let isStartWithJava = function (string) {
//     if (string.substring(0, 4) == 'Java') {
//         return true;
//     } else {
//         return false;
//     }
// }

//====================================================================================

//Ex2: find max different

// let findMaxDiff = function (arr) {
//     for (let x in arr) {
//         if ((Number.isInteger(x))) {
//             alert('Input array is not Integer array !');
//             return 0;
//         }
//     }
//     if (arr.length <= 1) {
//         return 0;
//     } else {
//         let driff = [];
//         for (let i = 0; i < arr.length - 1; i++) {
//             driff.push(Math.abs(arr[i] - arr[i + 1]));
//         }
//         return Math.max(...driff);
//     }
// }

//====================================================================================

//Ex3: print first elements

// let first = function(array,n){
//     if(n == undefined){
//         return array[0];
//     } else if(n <= 0){
//         return array = [];
//     } else if (n < array.length){
//         let returnArray =[];
//         for (let i = 0; i < n; i++) {
//             returnArray.push(array[i]);
//         }
//         return returnArray;
//     }else if( n > array.length){
//         return array;
//     }
// }

//====================================================================================

//Ex4: checkInt

// let checkInt = function (number1, number2) {
//     if (number1 > 0 && number2 < 0 || number1 < 0 && number2 > 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//====================================================================================

//Ex5: tri tuyet doi

// let abs = function(n){
//     if (n >= 13) {
//         return Math.abs(n-13);
//     } else {
//         return Math.abs(n-13)*2;
//     }
// }

//====================================================================================

//Ex6:  max different of random number
// let findMaxDifferent = function (arr) {
//     if (arr.length <= 1) {
//         return 0;
//     } else {
//         let driff = [];
//         for (let i = 0; i < (arr.length); i++) {
//             for (let x = i+1; x < (arr.length); x++) {
//                 driff.push(Math.abs(arr[i] - arr[x]));
//             }
//         }
//         console.log(driff);
//         return Math.max(...driff);
//     }
// }


// let testCase = [1, 2, -2, 9, 5, -12];
// alert(findMaxDifferent(testCase));