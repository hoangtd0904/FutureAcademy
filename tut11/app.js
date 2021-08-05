const form = document.getElementById('todo-form');
let list = document.getElementById('list');
const removeBtns = document.getElementsByClassName('remover');

// submit event
form.onsubmit = (e) => {
    e.preventDefault();
    // let inputValue = form.todo.value;
    // let newItem = document.createElement('li');
    // newItem.innerText = inputValue;
    // list.appendChild(newItem);  

    let content = form.todo.value;
    const li = `
        <li class="list-item d-flex justify-content-between align-items-center">
            <p class="list-content">${content}</p>
            <button class="btn btn-danger remover">Remove</button>
        </li>`;
    list.innerHTML += li;


    /**                      C1                        */

    // create LI
    //     const li = document.createElement('li');
    //     li.classList.add('list-item');
    //     li.classList.add('d-flex');
    //     li.classList.add('justify-content-between');
    //     li.classList.add('align-items-center');

    //     // Create Remover
    //     const button = document.createElement('button');
    //     button.classList.add('btn');
    //     button.classList.add('btn-danger');
    //     button.innerHTML = 'Remove';




    //     // create p
    //     const p = document.createElement('p');
    //     p.classList.add('list-content');
    //     p.innerHTML = content;


    //     // add new element
    //     li.appendChild(p);
    //     li.appendChild(button);

    //     li.onclick = () => {
    //         li.classList.toggle('checked');
    //     }

    //     button.onclick = () => {
    //         button.parentElement.remove();
    //     }

    //     list.appendChild(li);

    //     form.todo.value = "";

    // }

    // remove

    // console.log(removeBtns);
    // for (let i = 0; i < removeBtns.length; i++) {
    //     const element = removeBtns[i];
    //     element.onclick = () => {
    //         element.parentElement.remove();
    //         console.log(list);
    //     }


    /**                 C2                      */


}
list.onclick = (e) => {
    if (e.target.classList.contains('btn-danger')) {
        console.log(e.target);
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains('list-item')) {
        console.log(e.target);
        e.target.classList.toggle('checked');
        e.target.children[0].classList.toggle('checked');
        e.target.children[0].style.border = 'none';
    }
}