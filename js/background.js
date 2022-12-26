const images = [
    "FisheramSeeufer.jpg",
    "Fruits.jpg",
    "TheCourtofDeath.jpg",
    "UnderTheRoofOfBluelonianWeather.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);
// Javascript에서 html element를 생성할 수 있음.
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// appendChild()는 body에 html을 추가함.
document.body.appendChild(bgImage);