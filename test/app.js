//Ex1: reverse string
// function reverse(str) {
//     let strChar = str_input.split('');
//     let strReverse = '';
//     console.log(strChar);
//     for (let i = strChar.length - 1; i >= 0; i--) {
//         strReverse += strChar[i];
//     }
//     return strReverse;
// }

//Ex2: upper case 
// function capitalizeFirst(str){
//     let strArr = str.split(' ');
//     for (let i = 0; i < strArr.length; i++) {
//         strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
//     }
//     return (strArr.join(' '));
// }

// //Ex3: delete same element
// function deleteSame(arr){
//     let arrAfter = [];
//     for (let i = 0; i < arr.length;i++) {
//        if (arrAfter.indexOf(arr[i]) == -1 ) {
//            arrAfter.push(arr[i]);
//        }
//     }
//     return arrAfter;
// }

//Ex4:  staffManager
// function staffManager() {
//     let staffData = [
//         {
//             name: 'Hoang',
//             age: 20,
//             salary: 1500,
//             position: 'Front End Dev'
//         },
//         {
//             name: 'Nam',
//             age: 20,
//             salary: 1500,
//             position: 'Front End Dev'
//         },
//         {
//             name: 'Long',
//             age: 20,
//             salary: 1200,
//             position: 'Front End Designer'
//         }
//     ];
//     let isContinue = true;

//     function printStaffList() {
//         console.clear();
//         console.table(staffData);
//     }

//     printStaffList();
//     while (isContinue) {
//         let userChoice = prompt('Enter your command (Read, Create, Update, Delete, Exit)');
//         switch (userChoice.toLowerCase()) {
//             case ('create'):
//                 let newStaff = {
//                     name: prompt('Enter staff\'s name: '),
//                     age: Number(prompt('Enter staff\'s age: ')),
//                     salary: Number(prompt('Enter staff\'s salary: ')),
//                     position: prompt('Enter staff\'s position: ')
//                 }
//                 staffData.push(newStaff);
//                 printStaffList();  // print updated task list 
//                 break;
//             case ('update'):
//                 let updatePos = Number(prompt('Enter index'));
//                 // updatePos--;
//                 staffData[updatePos].name = prompt('Enter staff\'s name: ');
//                 staffData[updatePos].age = Number(prompt('Enter staff\'s age: '));
//                 staffData[updatePos].salary = Number(prompt('Enter staff\'s salary: '));
//                 staffData[updatePos].position = prompt('Enter staff\'s position: ');
//                 printStaffList();
//                 break;
//             case ('delete'):
//                 let deletePos = Number(prompt('Enter index'));
//                 deletePos--;
//                 staffData.splice(deletePos, 1);
//                 printStaffList();
//                 break;
//             case ('read'):
//                 printStaffList();
//                 break;
//             case ('exit'):
//                 alert('Thanks for using !');
//                 isContinue = false;
//                 break;
//             default:
//                 alert('Invalid input !!')
//                 break;
//         }
//     }
// }

//Ex5: calendar

function dayCheck() {

    function isLeapYear(year) {
        if ((year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
            return true;
        } else {
            return false;
        }
    }

    let date = prompt('Enter DD/MM/YYYY ');
    if (date.indexOf('/') == -1) {
        alert('Invalid date !');
        dayCheck();
    } else {
        let dateArr = date.split('/');
        let day = dateArr[0];
        let month = dateArr[1];
        let year = dateArr[2];

        if(day)

    }
}


// let str_input = 'future academy';
// let arr = [1,2,3,4,5,4,4,2,2,3,1,4]
// alert(deleteSame(arr))
staffManager();