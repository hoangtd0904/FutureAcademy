alert("Em để các bài ở dạng comment nên anh bỏ comment để xem từng bài giúp em với ạ, em cảm ơn :> ");
//Ex1: array of products

// let products = [
//     {
//         name: 'Xiaomi portable charger 20000mah',
//         brand: 'Xiaomi',
//         price: 428,
//         color: 'White',
//         category: 'Charger',
//         provider: ['Phukienzero', 'Dientuccc']
//     },
//     {
//         name: 'VSmart Active 1',
//         brand: 'VSmart',
//         price: 5487,
//         color: 'Black',
//         category: 'Phone',
//         provider: ['Tgdd', 'ddghn', 'vhstore']
//     },
//     {
//         name: 'IPhone X',
//         brand: 'Apple',
//         price: 21490,
//         color: 'Gray',
//         category: 'Phone',
//         provider: ['Tgdd']
//     },
//     {
//         name: 'Samsung Galaxy A9',
//         brand: 'Samsung',
//         price: 8490,
//         color: 'Blue',
//         category: 'Phone',
//         provider: ['Tgdd']
//     },
// ]

//print product name and price
// for (let i = 0; i < products.length; i++) {
//     console.log('-------------------------------------------');
//     console.log(`Name: ${products[i].name}`);
//     console.log(`Price: ${products[i].price}`);
// }
// console.log(' ');

// //print out number of products
// for (let i = 0; i < products.length; i++) {
//     console.log(`#${i + 1}: ${products[i].name}`);
//     console.log(`    Price: ${products[i].price}`);
// }

// //print out product in position
// let prodChoice = Number(prompt('Enter product position: '));
// console.clear();
// if (prodChoice > 0 && prodChoice <= products.length) {
//     console.log(`Name: ${products[prodChoice - 1].name} \nBrand: ${products[prodChoice - 1].brand} \n`
//         + `Price: ${products[prodChoice - 1].price} \nColor: ${products[prodChoice - 1].color} \n`
//         + `Category: ${products[prodChoice - 1].category}`);
// } else alert('Invalid input !');

// //print out products base on category
// let categoryChoice = prompt('Enter your category?');
// for (let x in products) {
//     if (x.category == categoryChoice) {
//         console.log('-------------------------------------------');
//         console.log(`Name: ${products[i].name}\nPrice: ${products[i].price}`);
//     }
// }

//print out productss with providers
// for (let i = 0; i < products.length; i++) {
//     console.log(`#${i + 1}: ${products[i].name}`);
//     console.log(`    Price: ${products[i].price}`);
//     console.log(`    Provider(s): ${products[i].provider.join(', ')}`);
// }

// //search by provider
// let providerChoice = prompt('Enter provider ?');
// for (let x of products) {
//     for (let i = 0; i < x.provider.length; i++) {
//         if (x.provider[i] == providerChoice) {
//             console.log('-------------------------------------------');
//             console.log(`Name: ${x.name} \nBrand: ${x.brand} \n`
//                 + `Price: ${x.price} \nColor: ${x.color} \n`
//                 + `Category: ${x.category}\nProvider: ${(x.provider).join(', ')}`);
//             break;
//         } 
//     }

// }


// END

//====================================================================

//Ex2: Proceccing learning tasks

// let tasks = [
//     {
//         title : 'HTML',
//         status : ' '
//     },
//     {
//         title : 'CSS',
//         status : ' '
//     },
//     {
//         title : 'Basics of JS',
//         status : ' '
//     },
//     {
//         title : 'Node Package Manager (npm)',
//         status : ' '
//     },
//     {
//         title : 'Git',
//         status : ' '
//     },
// ]
// let isContinue = true;

// // fn to print latest task list
// let printTasks = function () {
//    console.clear();
//    console.log('Hi there, this is your learning tasks to front-end developer carrer:\n');
//    for (let i = 0; i < tasks.length; i++) {
//       console.log(`${i + 1}. [${tasks[i].status}] ${tasks[i].title}`);
//    }
// }

// printTasks();
// while (isContinue) {
//    let userChoice = prompt('Enter your command (New, Delete, Update, Complete, Exit)');
//    switch (userChoice.toLowerCase()) {
//       case ('new'):
//          let newTask = {
//              title : prompt('Enter new task'),
//              status : ' '
//          }
//          tasks.push(newTask);  
//          printTasks();  // print updated task list 
//          break;
//       case ('update'):
//          let updatePos = Number(prompt('Enter position'));
//          updatePos--;
//          let updateTitle = prompt('Enter new title');
//          tasks[updatePos].title = updateTitle; // update task
//          tasks[updatePos].status = ' ';  //update status of updated task
//          printTasks();
//          break;
//       case ('delete'):
//          let deletePos = Number(prompt('Enter position'));
//          deletePos--;
//          tasks.splice(deletePos, 1);
//          printTasks();
//          break;
//       case ('complete'):
//          let completePos = Number(prompt('Enter position'));
//          completePos--;
//          tasks[completePos].status = 'X';
//          printTasks();
//          break;
//       case ('exit'):
//          alert('Thanks for using !');
//          isContinue = false;
//          break;
//       default:
//          alert('Invalid input !!')
//          break;
//    }
// }

//END