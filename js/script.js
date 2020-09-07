'use strict';

class Todo {
  constructor(form, input, todoList, todoCompleted) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
  }

  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  }

  render() {
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.todoData.forEach(this.createItem, this);
    this.addToStorage();
  }

  createItem(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.key = todo.key;
    li.insertAdjacentHTML('beforeend', `
      <span class="text-todo">${todo.value}</span>
      <div class="todo-buttons">
        <button class="todo-edit"></button>
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
      </div>
      `);
    if (todo.completed) {
      this.todoCompleted.append(li);
    } else {
      this.todoList.append(li);
    }
  }

  addTodo(event) {
    event.preventDefault();
    if (this.input.value.trim()) {
      const newTodo = {
        value: this.input.value,
        completed: false,
        key: this.generateKey(),
      };
      this.todoData.set(newTodo.key, newTodo);
      this.render();
      this.input.value = '';
    } else {
      alert('Пустое дело добавить нельзя!');
    }
  }

  generateKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  deleteItem(targetItem) {
    const targetKey = targetItem.key;
    for (const key of this.todoData.keys()) {
      if (targetKey === key) {
        this.todoData.delete(targetKey);
      }
    }
    this.render();
  }

  completedItem(targetItem) {
    const targetKey = targetItem.key;
    for (const [key, value] of this.todoData) {
      if (targetKey === key && value.completed === false) {
        value.completed = true;
      } else if (targetKey === key && value.completed === true) {
        value.completed = false;
      }
    }
    this.render();
  }

  animateComplete(targetItem) {
    targetItem.style.transitionProperty = 'all';
    targetItem.style.transitionProperty = '0.5s';
    targetItem.style.opacity = 0;
  }

  animateDelete(targetItem) {
    targetItem.style.transitionProperty = 'opacity';
    targetItem.style.transitionDuration = '0.5s';
    targetItem.style.opacity = 0;
  }

  todoEdit(targetItem) {
    const targetKey = targetItem.key;
    targetItem.contentEditable = 'true';
    targetItem.addEventListener('blur', () => {
      for (const [key, value] of this.todoData) {
        if (targetKey === key) {
          value.value = targetItem.textContent.trim();
          this.addToStorage();
        }
      }
      targetItem.contentEditable = 'false';
    });
  }

  handler() {
    document.querySelector('.todo-container').addEventListener('click', event => {
      event.preventDefault();
      const target = event.target;
      if (target.matches('.todo-complete')) {
        const targetItem = target.closest('.todo-item');
        this.animateComplete(targetItem);
        setTimeout(() => {
          this.completedItem(targetItem);
        }, 500);
      } else if (target.matches('.todo-remove')) {
        const targetItem = target.closest('.todo-item');
        this.animateDelete(targetItem);
        setTimeout(() => {
          this.deleteItem(targetItem);
        }, 500);
      } else if (target.matches('.todo-edit')) {
        const targetItem = target.closest('.todo-item');
        this.todoEdit(targetItem);
      }
    });
  }

  init() {
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
  }
}


const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');

todo.init();
todo.handler();