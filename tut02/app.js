let a = prompt("Enter age:  ");

if(a == 0){
    console.log("Tuổi không hợp lệ");
}

if(a < 0){
    console.log("Số âm ");
} else{
    console.log("Số dương và ");
    if(a < 16){
        console.log("Chưa đủ tuổi nhậu");
    } else if(a > 16 && a < 18){
        console.log("Đủ tuổi nhậu");
    }
    else{
        console.log("Nhậu tới bến :>");
    }
    
    if( a < 18){
        console.log("Học đi");
    } else if( a >= 18){
        console.log("Đủ tuổi lấy chồng :>");
    } 
}
if( a % 2 == 0){
    console.log("Số chẵn ");
} else{
    console.log("Số lẻ ");
}