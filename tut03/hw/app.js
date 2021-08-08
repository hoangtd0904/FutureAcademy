alert("Em để các bài ở dạng comment nên anh bỏ comment để xem từng bài giúp em với ạ, em cảm ơn :> ");

//Ex1: Cal sum of list

// let str = prompt("Enter a sequence of number, separate by commas (,) :");
// let arr = str.split(",");
// let sum = 0;

// for(let i = 0; i< arr.length; i++){
//     sum += parseInt(arr[i]);
// }
// alert(`The sum of them is ${sum}`)

//===================================================================================

//Ex2: find min

// let str = prompt("Enter a sequence of number, separate by commas (,) :");
// let arr = str.split(",");
// for(x in arr){
//     parseInt(x);
// }
// arr.sort(function(a,b){return a - b});
// alert(`The smallest number is ${arr[0]}`);

//===================================================================================

//Ex3: search number
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let numberInput = Number(prompt("Enter a number: "));
// if(arr.indexOf(numberInput) != -1){
//     alert(`${numberInput} is FOUND in my array at index ${arr.indexOf(numberInput)}`);
// } else{
//     alert(`${numberInput} is NOT found in my array. `);
// }

//===================================================================================

//Ex4: Shepherd

// let sheepSize = [5,49,56,200,30,1,5,31];  //origin sheep flock

// //intro
// console.log("Hello, my name is Hoang and here is my sheep size: ");
// console.log(sheepSize.join(" "));
// console.log(" "); 

// //find max
// let sheepMax = Math.max(...sheepSize);
// console.log(`Now my biggest sheep has size ${sheepMax}, let's shave it.`)
// console.log(" ");

// //update array
// let indexMax = sheepSize.indexOf(sheepMax);
// sheepSize[indexMax] = 8;
// console.log("After shearing, here is my flock: ");
// console.log(sheepSize.join(" "));
// console.log(" ");

// //monthly grow - loop
// for(let month = 1;month <= 4; month++){

// let newSheepSize = sheepSize.map(function(a){return a + 50});
// sheepSize = newSheepSize;
// console.log(`MONTH ${month}`);
// console.log("One month has passed, my sheeps have grown, here are my sheeps size: ");
// console.log(newSheepSize.join(" "));
// console.log(" ");

// sheepMax = Math.max(...sheepSize);
// console.log(`Now my biggest sheep has size ${sheepMax}, let's shave it.`)
// console.log(" ");

// indexMax = sheepSize.indexOf(sheepMax);
// sheepSize[indexMax] = 8;
// console.log("After shearing, here is my flock: ");
// console.log(sheepSize.join(" "));
// console.log(" ");
// //END loop
// }

// //sell sheep
// //let sum = sheepSize.reduce((a,b) => a + b ,0); //source: https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
// let sum = 0 ;
// for (let x of sheepSize) {
//     sum += x;
// }
// console.log(`My flock has size in total: ${sum}`);
// console.log(`I would get ${sum} x 2$ = ${sum*2}`);

//===================================================================================

//Ex5: read Name

// let nameStr = prompt("Enter a sequence of names separate by commas (,) : ");
// let nameArr = nameStr.split(",");
// for (let i = 0; i < nameArr.length; i++) {
//     nameArr[i] = "<".concat(nameArr[i],">");
// }
// alert(`${nameStr} => ${nameArr}`);

//===================================================================================

//Ex6: read odd number

// let str = prompt("Enter a sequence of number, separate by commas (,) :");
// let arr = str.split(",");
// let newArr =[];
// for (let x of arr) {
//     if(parseInt(x) % 2 === 1){
//         newArr.push(x);
//     }
// }
// alert(newArr);

