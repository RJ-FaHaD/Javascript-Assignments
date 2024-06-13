
const users = [
    { email: "mrj0@gmail.com", password: "123456" },
    { email: "rj@gmail.com", password: "123456" },
    { email: "admin@gmail.com", password: "admin" }
];

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        localStorage.setItem('loggedInUser', email);
        checkUserLogin();
    } else {
        alert('Invalid email or password');
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'block';
}

function checkUserLogin() {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (loggedInUser) {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('homePage').style.display = 'block';
        displayTasks(getTasksForUser(loggedInUser));
    } else {
        document.getElementById('homePage').style.display = 'none';
        document.getElementById('loginPage').style.display = 'block';
    }
}

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const category = document.getElementById('category').value;
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (taskName && dueDate && category) {
        const task = { name: taskName, dueDate: dueDate, category: category, user: loggedInUser };
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks(getTasksForUser(loggedInUser));
        clearInputs();
    } else {
        alert('Please fill in all fields');
    }
}

function clearInputs() {
    document.getElementById('taskName').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('category').value = 'Homework';
}

function filterTasks() {
    const filterCategory = document.getElementById('filterCategory').value;
    const loggedInUser = localStorage.getItem('loggedInUser');
    const userTasks = getTasksForUser(loggedInUser);
    
    if (filterCategory === 'All') {
        displayTasks(userTasks);
    } else {
        const filteredTasks = userTasks.filter(task => task.category === filterCategory);
        displayTasks(filteredTasks);
    }
}

function getTasksForUser(email) {
    if (email === 'admin@gmail.com') {
        return tasks;
    } else {
        return tasks.filter(task => task.user === email);
    }
}

function displayTasks(taskArray) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    taskArray.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task.name} (Due: ${task.dueDate}) - <strong>${task.category}</strong>`;
        taskList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', checkUserLogin);
