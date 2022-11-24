const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo =>{
    const upper = todo[0].toUpperCase() + todo.substring(1);
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${upper}.</span>
    <i class="fa-regular fa-trash delete"></i>
    </li>`;
    list.innerHTML += html;
}

addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    // console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

list.addEventListener('click', e =>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = term =>{
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
}


search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    //console.log(term);
    filterTodos(term);
})