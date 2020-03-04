var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('todo_list')) || [];
function renderTodos() {
    listElement.innerHTML = ''; //remove todo o conteudo dentro da tag
    for (todo of todos) {
        var todoItem = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');
        linkElement.setAttribute('href','#');
        
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');
        
        linkElement.appendChild(linkText);        
        todoItem.appendChild(todoText);
        todoItem.appendChild(linkElement);
        
        listElement.appendChild(todoItem);
    }
}

function addItem() {
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';

    saveToStorage();
    renderTodos();
}

function deleteTodo(pos) {
    todos.splice(pos,1);
    saveToStorage();
    renderTodos();
}

function saveToStorage() {
    localStorage.setItem('todo_list', JSON.stringify(todos));
}
renderTodos();
