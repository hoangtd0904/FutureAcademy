// // let email = "Email", name = "Name", age = 'Age';
// // let object = {
// //     [name] : "hoang",
// //     [age] : 20,
// //     [email]: 'tranduchoang@gmail.com'
// // };
// // for(x in object){ console.log(object[x]);}

// let user = [{
//     id: 1,
//     name: 'Hoang',
//     age: 20
// }];
// let id = 1;
// let indexId;
// while(1){
//     let choice = prompt('C/R/U/D');
//     switch (choice) {
//         case ('c'):
//         let person = {
//             id : ++id,
//             name : prompt('Enter name:'),
//             age : Number(prompt('Enter age:'))
//         };
//         // person.id = ++id;
//         // person.name = prompt('Enter name:');
//         // person.age = Number(prompt('Enter age:'));
//         user.push(person);
//         console.table(user);
//         break;
//     case ('r'):
//         console.table(user);
//         break;
//     case ('u'):
//         indexId = prompt('Enter user id: ');
//         if (user[indexId - 1]) {
//             user[indexId - 1].name = prompt('Enter new name: ');
//             user[indexId - 1].age = Number(prompt('Enter new age:'));
//             console.table(user);
//         } else {
//             alert('Invalid user !');
//         }
//         break;
//     case ('d'):
//         indexId = prompt('Enter user id: ');
//         if (user[indexId - 1]) {
//             delete user[indexId - 1];
//             console.table(user);
//         } else {
//             alert('Invalid user !');
//         }
//         break;
//     case('e'):
//         alert('Thanks for using !');
//         break;
//     default:
//         alert('Invalid input !');
//         break;
// }   
// }
let arrTemp = [];
let arr =[
    {
        name : 'Hoang',
        age : 20,
        arr : [12,14,150]
    },
    {
        name : 'nam',
        age : 20,
        arr : [
            45,46,312345]
    },
    {
        name : 'long',
        age : 20,
        arr : [45678,4532,78678]
    }
] 
for (let x of arr) {
    console.log(typeof x);
    for (let i = 0; i < x.arr.length; i++) {
        console.log(x.arr[i].join(', '));
        
    }
}
