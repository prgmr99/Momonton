const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); // login-form id를 가지는 태그 아래 있는 input에 접근
const greeting = document.querySelector("#greeting");

// 가장 위의 선언을 하지 않고 한줄로 작성이 가능하다.
//const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
 
// 문자열 상수(매직)를 사용할 때는 (대문자)변수로 만들어주는 것이 좋다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// form은 submit 이벤트를 가진다.
// submit의 기본동작은 페이지를 새로고침하는 것
// 그것을 막기위해 preventDefault를 사용한다.
function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); // loginForm이 접근하는 태그의 class를 추가
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // localStorage에 key와 value 추가
    paintGreeting(username);
}

loginForm.addEventListener("submit", onLoginSubmit); 

const savedUsername = localStorage.getItem(USERNAME_KEY); // localStorage의 key와 매칭되는 value를 savedUsername에 저장

function paintGreeting(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); // greeting이 접근하는 태그의 class를 제거
}

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show greetings 
    paintGreeting(savedUsername);
}