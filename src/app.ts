const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks'); 
const categoriesContainerElement: HTMLElement = document.querySelector('.categories');

type Category = 'general' | 'gym' | 'work' | 'hobby';


interface Task {
	name: string;
	done: boolean;
	category?: 'general' | 'gym' | 'work' | 'hobby';
}

const categories: Category[] = ['general', 'gym', 'work', 'hobby'];

const tasks: Task[] = [
	{name: 'Wyrzucić śmieci', done: false, category: 'work'},
	{name: 'Pójść na siłownię', done: true, category: 'gym'},
	{name: 'Nakarmić koty', done: false, category: 'hobby'}
];

const render = () => {
	tasksContainerElement.innerHTML = '';
	tasks.forEach((task, index) => {
		const taskElement: HTMLElement = document.createElement('li');
		if (task.category) {
			taskElement.classList.add(task.category);
		}
		const id: string = `task-${index}`;
		const labelElement: HTMLLabelElement = document.createElement('label');
		labelElement.innerText = task.name;
		labelElement.setAttribute('for', id);
		const checkboxElement: HTMLInputElement = document.createElement('input');
		checkboxElement.type = 'checkbox';
		checkboxElement.name = task.name;
		checkboxElement.id = id;
		checkboxElement.checked = task.done;
		checkboxElement.addEventListener('change', () => {
			task.done = !task.done;
		})
		taskElement.appendChild(labelElement);
		taskElement.appendChild(checkboxElement);
		tasksContainerElement.appendChild(taskElement);
	})
}

const renderCategories = () => {
	categories.forEach(category => {
		const categoryElement: HTMLElement = document.createElement('li');
		const radioInputElement: HTMLInputElement = document.createElement('input');
		radioInputElement.type = 'radio';
		radioInputElement.name = 'category';
		radioInputElement.value = category;
		radioInputElement.id = `category-${category}`;
		const labelElement: HTMLLabelElement = document.createElement('label');
		labelElement.setAttribute('for', `category-${category}`); 
		labelElement.innerText = category;
		categoriesContainerElement.appendChild(categoryElement);
		categoryElement.appendChild(radioInputElement);
		categoryElement.appendChild(labelElement);
	})
}

const addTask = (task: Task) => {
	tasks.push(task);
}

addButtonElement.addEventListener('click', (e: Event) => {
	const selectedRadioElement: HTMLInputElement = document.querySelector('input[type='radio']:checked');
	const selectedCategoty: Category = selectedRadioElement.value as Category;
	e.preventDefault();
	addTask({name: taskNameInputElement.value, done: false, category: selectedCategoty});
	render();
})
addTask({name: 'Zrobić klatę', category: 'gym', done: false });
renderCategories();
render();