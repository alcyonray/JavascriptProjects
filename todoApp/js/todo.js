var myObject = { "name": "Jeremiah", "age": 29, "city":"Nevada City"};
//stringify creates a single string of the whole object
var myJSON = JSON.stringify(myObject);
//parse can take such a string, and turn it back into an object
var myParse = JSON.parse(myJSON);

var thisName = myParse.name;
localStorage.setItem("name", thisName);

var retrievedName = localStorage.getItem("name");

console.log(myJSON);
console.log(myParse);
//using the localStorage, will ONLY work running the program in a browser
console.log(retrievedName);

function getTodos() {
    var todos = new Array;
    var todosString = localStorage.getItem('todo');
    if (todosString !== null) {
        todos = JSON.parse(todosString);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if (task !== '' ){
        var todos = getTodos();

        todos.push(task);

        //localStorage.setItem('todo', JSON.stringify(todos));
        document.getElementById("task").value = "";
        show();
    }

    return false;
}

function show() {
    var todos = getTodos();

    var html = '<ul>';

    for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
        html += '<li>' + element + '<button onclick="remove(this)" class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('todos').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        element.addEventListener('click', remove);
    }
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

document.getElementById('add').addEventListener('click', add);

show();