// html의 h2태그의 clock id를 선택한다.
const clock = document.querySelector("h2#clock");

// 현재 시간에 대한 정보를 가져오는 함수
function getClock() {
    const date = new Date(); // Date()를 사용하여 현재 날짜와 시간을 date에 저장
    const hours = String(date.getHours()).padStart(2, "0"); 
    const minutes = String(date.getMinutes()).padStart(2, "0");
    //const seconds = String(date.getSeconds()).padStart(2, "0"); 초단위
    clock.innerText = `${hours}:${minutes}`; 
}
// padStart를 사용하여 시간과 분에 대한 길이를 2로 정하고 크기가 2가 되지 않을 때, 앞(Start)에 0을 붙여준다.

getClock();
setInterval(getClock, 1000);