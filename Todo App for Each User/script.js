document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const homeContainer = document.getElementById('home-container');
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const addButton = document.getElementById('add-button');
    const clearButton = document.getElementById('clear-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const users = {
        "mrj0@gmail.com": "123456",
        "rj@gmail.com": "123456",
        "admin@gmail.com": "admin"
    };

    function checkUserLogin() {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            showHomePage(userEmail);
        } else {
            showLoginPage();
        }
    }

    function showLoginPage() {
        loginContainer.style.display = 'block';
        homeContainer.style.display = 'none';
    }

    function showHomePage(email) {
        loginContainer.style.display = 'none';
        homeContainer.style.display = 'block';
        loadTodos(email);
    }

    function loadTodos(email) {
        todoList.innerHTML = '';
        if (email === "admin@gmail.com") {
            Object.keys(localStorage).forEach(key => {
                if (key.startsWith('todos_')) {
                    const userTodos = JSON.parse(localStorage.getItem(key)) || [];
                    userTodos.forEach((todo, index) => {
                        const listItem = createTodoItem(todo, key.split('_')[1], index);
                        todoList.appendChild(listItem);
                    });
                }
            });
        } else {
            const todos = JSON.parse(localStorage.getItem(`todos_${email}`)) || [];
            todos.forEach((todo, index) => {
                const listItem = createTodoItem(todo, email, index);
                todoList.appendChild(listItem);
            });
        }
    }

    function createTodoItem(todo, email, index) {
        const listItem = document.createElement('li');
        if (email !== "admin@gmail.com") {
            listItem.innerHTML = todo;
        } else {
            listItem.innerHTML = `${email}: ${todo}`;
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            deleteTodoItem(email, index);
        });
        listItem.appendChild(deleteButton);

        return listItem;
    }

    function deleteTodoItem(email, index) {
        const todos = JSON.parse(localStorage.getItem(`todos_${email}`)) || [];
        todos.splice(index, 1);
        localStorage.setItem(`todos_${email}`, JSON.stringify(todos));
        loadTodos(localStorage.getItem('userEmail'));
    }

    loginButton.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        if (users[email] && users[email] === password) {
            localStorage.setItem('userEmail', email);
            showHomePage(email);
        } else {
            alert('Invalid email or password');
        }
    });

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('userEmail');
        showLoginPage();
    });

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const email = localStorage.getItem('userEmail');
            const todos = JSON.parse(localStorage.getItem(`todos_${email}`)) || [];
            todos.push(todoText);
            localStorage.setItem(`todos_${email}`, JSON.stringify(todos));
            todoInput.value = '';
            loadTodos(email);
        }
    });

    clearButton.addEventListener('click', () => {
        const email = localStorage.getItem('userEmail');
        localStorage.removeItem(`todos_${email}`);
        loadTodos(email);
    });

    checkUserLogin();
});
