const API_KEY = "6ad91f87e502237b5d4c193a67355c0a";

const weather = document.querySelector(".js-weather .weather__text");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const name = data.name;
            const temperature = data.main.temp;
            weather.innerText = `${Math.floor(temperature)}°C , ${name}`;
    });
}
// fetch는 promise이다.
// promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것.
// 서버에 물어봤는데 서버가 응답하는데 5분이 걸린다고 해보자.
// 그러면 서버의 응답을 기다려야한다. -> 그래서 then()을 사용한다. [보충 필요]
// fetch url을 한 후, 그 다음으로 response를 받아야 한다. 그리고 response의 json을 얻어야 한다.

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);