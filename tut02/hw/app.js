// alert("Em để các cài ở dạng comment nên anh bỏ comment để xem từng bài giúp em với ạ, em cảm ơn :> ");

//Ex1: print out list of numbers
//a
// for(let i = 0; i <= 7; i++){
//     console.log(i);
// }

//b
// let n = Number(prompt("Enter n: "));
// for(let i = 0; i <= n; i++){
//     console.log(i);
// }

//c
// let n = Number(prompt("Enter n: "));
// for(let i = 3; i < n; ++i){
//     console.log(i);
// }

//d
// let n = Number(prompt("Enter n: "));
// let c = Number(prompt("Enter c: "));
// if(c > n){
//     console.log("Invalid input :< ")
// } else{
//     for(let i = c; i <= n; i++){
//         console.log(i);
//     }    
// }

//e
// let n = Number(prompt("Enter n: "));
// let c = Number(prompt("Enter c: "));
// if(c > n){
//     console.log("Invalid input :< ")
// } else{
//     while(c < n){
//         console.log(c);
//         c+=3;
//     }    
// }

//------------------------------------------------------------------------------------

//Ex2: Calculate factorial number

// let n = Number(prompt("Enter n: "));
// let facNum = n;
// while(n > 1){
//     n-=1;
//     facNum = facNum * n;
// }
// console.log(facNum);

//------------------------------------------------------------------------------------

//Ex3: 14+ content

// let age = Number(prompt("How old are you ?"));
// if(age > 0 && age < 14){
//     console.log("You are not old enough to view this content :<");
// } else if( age >= 14 && age < 110){    // no one older than 110 i think :> 
//     console.log("Enjoy it :> ");
// } else{
//     console.log("Invalid age :<");
// }

//------------------------------------------------------------------------------------

//Ex4: low/high Half

// let x = Number(prompt("Enter a number(0-9): "));
// if( x >= 0 && x < 4.5){
//     console.log("Lower half of 9");
// } else if ( x > 4.5 && x <= 9){
//     console.log("Higher half of 9");
// }else if(x == 4.5){
//     console.log("Middle of 9");
// } else{
//     console.log("Invalid input :<");
// }

//------------------------------------------------------------------------------------

//Ex5: low/high half advanced

// let n = Number(prompt("Enter n: "));
// let x = Number(prompt("Enter x: "));
// if( x >= 0 && x < n/2){
//     console.log( x + " is in lower half of " + n);
// } else if ( x > n/2 && x <= n){
//     console.log(x + " is in higher half of " + n);
// }else if(x == n/2){
//     console.log(x+ " is middle of " + n);
// } else{
//     console.log("Invalid input :<");
// }

//------------------------------------------------------------------------------------

//Ex6: even/odd number

// let n = Number(prompt("Enter n: "));
// if( n % 2 == 0){
//     alert(n + ' is an even number');
// } else {
//     alert(n + ' is an odd number');
// }

//------------------------------------------------------------------------------------

//Ex7: low/high 

//a
// console.log("3 L");
// console.log("3 H");

//b
// let n = Number(prompt("Enter the total number of L's and H's: "));
// console.log(Math.ceil(n/2) +" L");
// console.log(Math.floor(n/2) + " H");   //get the lower round number

//c
// for(let i = 0; i < 4; i++){
//     console.log("0");
//     console.log("1");
// }

//d
// let n = Number(prompt("Enter the total number of 1's and 0's ?"));
// for(let i = 0; i < Math.floor(n/2);i++){
//     console.log("0");
//     console.log("1");
// }
// if(n % 2 != 0){     
//     console.log("0");
// }


//------------------------------------------------------------------------------------

//Ex8: BMI calculator

// let weight = Number(prompt("Enter your weight (kg): "));
// let height = Number(prompt("Enter your height (cm): "));
// height = height / 100 ;
// let bmi = weight / (height*height);
// alert("Your BMI: " + Math.round(bmi*100) / 100);
// if(bmi < 16){
//     alert("You are severely underweight !");
// } else if (bmi >= 16 && bmi < 18.5){
//     alert("You are underweight !");
// } else if (bmi >= 18.5 && bmi < 25){
//     alert("You are normal !");
// } else if (bmi >= 25 && bmi < 30){
//     alert("You are overweight !");
// } else if (bmi >= 30){
//     alert("You are obese !");
// }else{
//     alert("Invalid input !"); }
