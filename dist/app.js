"use strict";
const taskNameInputElement = document.querySelector('#name');
const addButtonElement = document.querySelector('button');
const tasksContainerElement = document.querySelector('.tasks');
const categoriesContainerElement = document.querySelector('.categories');
const categories = ['general', 'gym', 'work', 'hobby'];
const tasks = [
    { name: 'Wyrzucić śmieci', done: false, category: 'work' },
    { name: 'Pójść na siłownię', done: true, category: 'gym' },
    { name: 'Nakarmić koty', done: false, category: 'hobby' }
];
const render = () => {
    tasksContainerElement.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement('label');
        labelElement.innerText = task.name;
        labelElement.setAttribute('for', id);
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener('change', () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        tasksContainerElement.appendChild(taskElement);
    });
};
const renderCategories = () => {
    categories.forEach(category => {
        const categoryElement = document.createElement('li');
        const radioInputElement = document.createElement('input');
        radioInputElement.type = 'radio';
        radioInputElement.name = 'category';
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        const labelElement = document.createElement('label');
        labelElement.setAttribute('for', `category-${category}`);
        labelElement.innerText = category;
        categoriesContainerElement.appendChild(categoryElement);
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener('click', (e) => {
    const selectedRadioElement = document.querySelector('input[type=', radio, ']:checked');
    const selectedCategoty = selectedRadioElement.value;
    e.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false, category: selectedCategoty });
    render();
});
addTask({ name: 'Zrobić klatę', category: 'gym', done: false });
renderCategories();
render();
