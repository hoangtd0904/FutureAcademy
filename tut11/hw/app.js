// function get_random_color() {
//     var color = "";
//     for (var i = 0; i < 3; i++) {
//         var sub = Math.floor(Math.random() * 256).toString(16);
//         console.log(sub);
//         color += (sub.length == 1 ? "0" + sub : sub);
//         console.log(color);
//     }
//     return "#" + color;
// }

function get_rand_color() {
    var color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
    console.log(color);
    while (color.length < 6) {
        color = "0" + color;
    }
    return "#" + color;
}

// console.log(`color 1: ` + get_random_color());
// console.log('-----------------------------------');
// console.log('color 2: ' + get_rand_color());
// console.log('-----------------------------------');
// console.log((0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6));


// Exe1:
const hideBtn = document.getElementById('hideBtn');
const hideDiv = document.getElementById('hidDiv');

hideBtn.onclick = () => {
    hideDiv.classList.toggle('hide');
}

// Ex2:
const colorBtn = document.getElementById('colorBtn');
const colorDiv = document.getElementById('colorDiv');

colorBtn.onclick = () => {
    let newColor = get_rand_color();
    colorDiv.style.backgroundColor = newColor;
    colorDiv.innerText = 'Color has changed'
}