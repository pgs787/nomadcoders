const todoForm = document.querySelector(".js-todoForm"),
  toDoinput = todoForm.querySelector("input"),
  toDoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintTodo(text) {
  if (text !== "") {
    const li = document.createElement("li");
    const delBtn = document.createElement("span");
    delBtn.style.cursor = "pointer";
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "✖ ";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
      text: text,
      id: toDos.length + 1
    };
    toDos.push(toDoObj);
    saveToDos();
  } else {
    swal("gg", "gg", "error");
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentVaule = toDoinput.value;
  paintTodo(currentVaule);
  toDoinput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintTodo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();
