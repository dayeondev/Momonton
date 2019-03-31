const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';



let toDos = []; // 해야 할 일을 생성할 때마다 여기에 저장

function deleteToDo(event){
    // console.log(event);
    // console.log(event.target);
    // console.dir(event.target);
    // console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        // console.log(toDo.id, li.id);
        return toDo.id !== parseInt(li.id);
    });
    // console.log(cleanToDos);
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    // localStorage.setItem(TODOS_LS, toDos);
    // 이렇게 저장하면 저장이 안된다.
    // string만 저장이 되기 때문

    // JSON으로 해결
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    // console.log(text);
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌️";
    // 클릭하면 deleteToDo 실행
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;

    // li에 span과 delBtn을 넣고
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    // toDoList에 li를 넣는다.
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); // toDos에 toDoObj를 저장
    saveToDos(); // 로컬에도 저장
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
        if(loadedToDos !== null){
            // console.log(loadedToDos);
            // string 값이 반환된다
            
            // loadedToDos를 js object로 변환
            const parsedToDos = JSON.parse(loadedToDos);
            // console.log(parsedToDos);

            parsedToDos.forEach(function(toDo){
                paintToDo(toDo.text);
            });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();