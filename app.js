const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.querySelector('#add-task-section button');
const incompleteTasksList = document.getElementById('incomplete-tasks');
const completedTasksList = document.getElementById('completed-tasks');

const createButton = function (text, className) {
  const button = document.createElement('button');
  button.className = className;
  button.innerText = text;
  return button;
};

const createTaskListItem = function (taskText) {
  const listItem = document.createElement('li');

  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';

  const label = document.createElement('label');
  label.innerText = taskText;
  label.className = 'task';

  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'task';

  const editButton = createButton('Edit', 'edit');

  const deleteButton = createButton('', 'delete');
  const deleteButtonImg = document.createElement('img');
  deleteButtonImg.src = './remove.svg';
  deleteButton.appendChild(deleteButtonImg);

  listItem.append(checkBox, label, editInput, editButton, deleteButton);

  return listItem;
};

const addTask = function () {
  if (!newTaskInput.value) return;
  const listItem = createTaskListItem(newTaskInput.value);

  incompleteTasksList.appendChild(listItem);
  bindTaskEvents(listItem);

  newTaskInput.value = '';
};

const editTask = function () {
  const listItem = this.parentNode;

  const editInput = listItem.querySelector('input[type=text]');
  const label = listItem.querySelector('label');
  const editButton = listItem.querySelector('.edit');
  const isEditing = listItem.classList.contains('edit-mode');

  if (isEditing) {
    label.innerText = editInput.value;
    editButton.innerText = 'Edit';
  } else {
    editInput.value = label.innerText;
    editButton.innerText = 'Save';
  }

  listItem.classList.toggle('edit-mode');
};

const deleteTask = function () {
  const listItem = this.parentNode;
  const taskList = listItem.parentNode;

  taskList.removeChild(listItem);
};

const toggleTaskComplete = function () {
  const listItem = this.parentNode;
  const isCompleted = this.checked;

  const targetList = isCompleted ? completedTasksList : incompleteTasksList;
  targetList.appendChild(listItem);
};

addTaskButton.addEventListener('click', addTask);

const bindTaskEvents = function (taskListItem) {
  const checkBox = taskListItem.querySelector('input[type=checkbox]');
  const editButton = taskListItem.querySelector('button.edit');
  const deleteButton = taskListItem.querySelector('button.delete');

  editButton.onclick = editTask;

  deleteButton.onclick = deleteTask;

  checkBox.onchange = toggleTaskComplete;
};

const taskItems = [
  ...incompleteTasksList.children,
  ...completedTasksList.children,
];

taskItems.forEach(bindTaskEvents);
