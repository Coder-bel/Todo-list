const addList = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')
const gene = (todo) =>{
    const code = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>   
            <button class="delete btn btn-secondary">⏏</button>
        </li>
    `
    list.innerHTML += code; 
}

addList.addEventListener('submit', e=> {
    
    e.preventDefault();
    let todo = addList.add.value;
    console.log(todo);

    if (todo.length) {
    gene(todo);
    addList.reset()
    }
})
list.addEventListener('click', e=> {    
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});
const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo)=> !todo.textContent.includes(term))
    .forEach((todo) =>todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo)=> todo.textContent.includes(term))
        .forEach((todo) =>todo.classList.remove('filtered'));
}; 

// keyup event
search.addEventListener('keyup', ()=>{
    const term = search.value.trim();
    filterTodos(term);
})
