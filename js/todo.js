// localStorage는 데이터베이스가 아니다.
// console에서 보면 toDos.array가 데이터베이스이다.
// localStorage는 단순히 toDos.array를 복사해놓는 곳이다.
// toDos.array != localStorage 인 것을 인지하고 있어야한다.

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.className = "toDo";
    li.id = newToDo.id;       // li 태그에 id 속성 및 값 추가.
    const deleteBtn = document.createElement("span");
    deleteBtn.innerText = "❌";
    deleteBtn.className = "toDo__button";
    deleteBtn.addEventListener("click", deleteToDo);
    const label = document.createElement("label");
    label.innerText = newToDo.text; 
    li.appendChild(deleteBtn);
    li.appendChild(label); 
    toDoList.appendChild(li);
    saveToDos(newToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; 
    parsedToDos.forEach(paintToDo);
}

// array에서 실제로 삭제하지 않고 array에서 해당 id를 제외하고 새로운 array를 생성한다.
// filter function은 새로운 array를 주기 때문이다.