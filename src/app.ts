const taskNameInputElement: HTMLInputElement = document.querySelector('#name');
const addButtonElement: HTMLButtonElement = document.querySelector('button');
const tasksContainerElement: HTMLElement = document.querySelector('.tasks'); 

interface Task {
	name: string;
	done: boolean;
}

const tasks: Task[] = [
	{name: 'Wyrzucić śmieci', done: false},
	{name: 'Pójść na siłownię', done: true},
	{name: 'Nakarmić koty', done: false}
];

const render = () => {
	tasksContainerElement.innerHTML = '';
	tasks.forEach((task, index) => {
		const taskElement: HTMLElement = document.createElement('li');
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

const addTask = (task: Task) => {
	tasks.push(task);
}

addButtonElement.addEventListener('click', (e: Event) => {
	e.preventDefault();
	addTask({name: taskNameInputElement.value, done: false});
	render();
})

render();