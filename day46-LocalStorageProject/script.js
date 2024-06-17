const input = document.querySelector(".form-control");
const addBtn = document.querySelector(".btn");
const todoList = document.querySelector(".todo-list");

let myTodos = JSON.parse(localStorage.getItem("todos")) || [];

const completedTodo = (todoId) => {
    const finishedTodo = myTodos.find((todo) => todo.id === todoId);
    finishedTodo.isCompleted = !finishedTodo.isCompleted;
    localStorage.setItem("todos", JSON.stringify(myTodos))
    showTodo();
}
const deleteTodo = (todoId) => {
    myTodos = myTodos.filter((todo) => todoId !== todo.id);
    localStorage.setItem("todos", JSON.stringify(myTodos));
    showTodo();
}
const updateTodo = (todoId) => {
    let update = myTodos.find((todo) => todo.id == todoId);
    const newTodo = prompt("Enter a new todo");
    update.todo = newTodo;
    localStorage.setItem("todos", JSON.stringify(myTodos));
    showTodo();
}
const showTodo = () => {
    todoList.innerHTML = "";
    myTodos.forEach(TODO => {
        let { todo, isCompleted, id } = TODO;
        todoList.innerHTML += `
            <div class="container border border-2 w-50 p-2">
                <h1 class="text-primary mb-4 ${isCompleted ? "checked" : ""}">${todo}</h1>
                <input class="checker"onclick="completedTodo(${id})" ${isCompleted ? "checked" : ""}  type="checkbox" >
                <i  onclick="updateTodo(${id})" class="update fa-solid fa-pen-to-square"></i>
                <button onclick="updateTodo(${id})"  class="btn btn-warning me-3">Update</button>
                    <i  onclick="deleteTodo(${id})" class="delete fa-solid fa-trash"></i>
                <button onclick="deleteTodo(${id})" class="btn btn-danger">Delete</button>
            </div>
            `
    });
}
window.onload = showTodo;
addBtn.addEventListener("click", function (e) {
    if (!input.value) {
        return alert("Enter a valid todo")
    } else {
        myTodos.push({
            todo: input.value,
            isCompleted: false,
            id: Date.now()
        })
        input.value = "";
        localStorage.setItem("todos", JSON.stringify(myTodos));
        // console.log(myTodos)
        showTodo();
    }
})

