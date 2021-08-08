//onclick
let btn = document.getElementById('click-me');
btn.onclick = () => {
    alert('Hello');
}

// innerHTML - style 
let addItem = document.getElementById('addItem');
addItem.innerHTML = '<div class="green-color">Green text</div>';
addItem.style.padding = '8px 16px';
addItem.style.border = '1px solid #ccc'


//children - parentElement
let list = document.getElementById('ul-list');
let test = list.children;
console.log(...test);
console.log(test[1].parentElement);

// id - classList
console.log(list.id);
console.log(list.classList.add('no-style'));
if (!list.classList.contains('p-16')) {
    list.classList.add('p-16');
} else {
    list.classList.remove('p-16');
}

// createElement - setAttribute - appendChild
let newItem = document.createElement('li');
newItem.innerText = 'New Item';
list.appendChild(newItem);
newItem.setAttribute('class', 'p-16');
newItem.setAttribute('id', 'box');
newItem.classList.add('link');

//remove
let deleteItem = document.querySelector('.deleteItem');
deleteItem.remove()