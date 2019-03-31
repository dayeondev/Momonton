// 
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

// 시간 가져오기
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // 초가 10 이하일 때는 앞에 0을 붙여주기
    // clockTitle.innerText = `${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    clockTitle.innerText = `${hours < 10? `0${hours}` : hours}:${minutes < 10? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// 실행
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();