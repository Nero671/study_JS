'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed'),
      addBtn = document.querySelector('#add');
      


const todoData = localStorage.getItem('todoData') ? JSON.parse(localStorage.getItem('todoData')) : {
  todoList: [],
  todoCompleted: []
};

const addToStorage = () => {
  localStorage.setItem('todoData', JSON.stringify(todoData));
  console.log(todoList);
};

const render = function() {
  todoList.textContent = '';
  todoCompleted.textContent = '';

  todoData.forEach(function(item) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.innerHTML = `
      <span class="text-todo">${item.value}</span>
			<div class="todo-buttons">
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
    `;

    if(item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }
    addToStorage();
    const btnTodoCompleted = li.querySelector('.todo-complete');

    btnTodoCompleted.addEventListener('click', function () {
      item.completed = !item.completed;
      render();
      addToStorage();
    });

    const todoRemove = li.querySelector('.todo-remove');

    todoRemove.addEventListener('click', function() {
      li.remove();
      addToStorage();
    });
  });
};

todoControl.addEventListener('submit', function (event) {
  event.preventDefault();
  if (headerInput.value.trim() === '') {
    addBtn.disabled;
  } else {
    const newTodo = {
      value: headerInput.value,
      completed: false
    };
    todoData.push(newTodo);
    render();
    headerInput.value = '';
  }
  addToStorage();
});

render();

