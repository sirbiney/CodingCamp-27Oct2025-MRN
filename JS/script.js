let todos = [];

function validateForm(todo, date) {
    if (todo.trim() === "" || date.trim() === "") {
        return false;
    }  
    return true;
}

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("date-input");

    const todoValue = todoInput.value;
    const dateValue = dateInput.value;

    if (!validateForm(todoValue, dateValue)) {
        alert("Invalid input. Please enter a valid todo and date.");
    } else {
        todos.push({ task: todoValue, dueDate: dateValue });
        renderTodos();
        todoInput.value = "";
    }
}

function clearAllTodos() {
    if (todos.length === 0) {
        alert("No todos to clear!");
        return;
    }
    
    if (confirm("Are you sure you want to delete ALL todos?")) {
        todos = [];
        renderTodos();
    }
}

function filterTodos(filterType) {
    alert("Filter: " + filterType);
}

function renderTodos() {
    const todoList = document.getElementById("todo-list");
    const emptyMessage = document.getElementById("empty-message");

    // Clear existing list
    todoList.innerHTML = "";

    // Show/hide empty message
    if (todos.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
        
        // Add table rows for each todo
        todos.forEach((todo, index) => {
            todoList.innerHTML += `
                <tr>
                    <td>${todo.task}</td>
                    <td>${todo.dueDate}</td>
                    <td></td>
                </tr>`;
        });
    }
}