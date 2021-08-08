// //creation
// let list = [];
// let isCont = true;

// //loop
// while(isCont == true){
// //menu
// let choice = prompt('TODO list: \n [C]reate \n [R]ead \n [U]pdate \n [D]elete \n [E]xit');

// //decision
// switch(choice){
//     case("c"):
//         let input = prompt("Job to do:");
//         list.unshift(input);
//         console.log("TODO list: " + list);
//         break;
//     case("r"):
//         console.log("TODO list: " + list);
//         break;
//     case("u"):
//         let updateIndex = prompt("Update job in:");
//         let updateContent = prompt('Job to do:');
//         list[updateIndex] = updateContent; 
//         console.log("TODO list: " + list);
//         break;
//     case("d"):
//         let deleteIndex = prompt('Delete job in:');
//         list.splice(deleteIndex,1);
//         console.log("TODO list: " + list);
//         break;
//     case("e"):
//         alert("Thanks for using !")
//         isCont = false;
//         break;
//     default: 
//         alert("Invalid command :< ")
// }
// END loop 
// }

//=============================================================

//Ex2

// //creation
// let n = Number(prompt('Enter n:'));
// let a = 0;

// //calculate A = 
// for(let t = 1 ; t < n; t++){
//     a += (1/(t*(t+1)));
// }

// //printout result
// console.log(Math.ceil(a*1000) /1000);


//END

// let arr = [12,5,3];
// let b5 = arr;
// console.log(`${arr} and ${b5}`);
// b5 = b5.sort(function(a,b){return a - b});
// // b = [13,69];
// console.log(`${arr} and ${b5}`);

let arr = ["a","b","c"];
// let newArr = [] ;
// alert(arr);
// for(let i = 0; i < 3;i++){
// newArr = arr.map(function(a){return a + 1});
// arr = newArr;
// // alert();
// alert(arr);
// }
// for(let i = 0; i < arr.length; i++){
//     console.log(typeof arr.splice(i,1));
// }
// for (const x in arr) {
//    console.log(typeof x);
// }
// for (const x of arr) {
//     x = "<" + x;
//     console.log(arr);
// }
// let x = "abc";
let op = "<";
let ed = ">";
for (let i =0;i < arr.length;i++) {
    arr[i] = "<".concat(arr[i],">");
    
}
console.log(arr);
// console.log(x);