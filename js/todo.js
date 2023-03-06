const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDoListkey";

let toDoslistSet = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDoslistSet));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoslistSet = toDoslistSet.filter((toDO) => toDO.id !== parseInt(li.id));
  saveTodos();
}

function pushToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoslistSet.push(newToDoObj);
  pushToDo(newToDoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDoslistSet = parsedToDos;
  parsedToDos.forEach(pushToDo);
}
