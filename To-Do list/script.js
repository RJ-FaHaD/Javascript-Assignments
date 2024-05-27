document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-button');
    const clearButton = document.getElementById('clear-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addItem);
    clearButton.addEventListener('click', clearList);

    function addItem() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = todoText;
            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    }

    function clearList() {
        todoList.innerHTML = '';
    }
});
