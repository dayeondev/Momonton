// 폼 불러오기
const form = document.querySelector(".js-form");
// 입력 값 
const input = form.querySelector("input");
// greeting 가져오기
const greeting = document.querySelector(".js-greetings");

// 
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // 제출했을 때 새로고침 되는 것을 막는다.
    const currentValue = input.value;
    // console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN); // 폼을 보이게한다
    form.addEventListener("submit", handleSubmit); // "submit" 발생시 handleSubmit 호출
}

function paintGreeting(text){
    // 텍스트를 색칠하려면 폼을 숨겨야한다.
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `어서오세요 ${text}님!`;
}

// 저장된 이름 불러오기
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){ // 저장된 이름이 없을 때
        askForName();
    }else{ // 저장된 이름이 있을 때
        paintGreeting(currentUser); // 색칠하기
    }
}

function init(){
    loadName();
}

init();