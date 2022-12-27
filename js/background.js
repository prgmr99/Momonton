// 배경 그림들을 리스트로 초기화
const images = [
    "FisheramSeeufer.jpg",
    "Fruits.jpg",
    "TheCourtofDeath.jpg",
    "UnderTheRoofOfBluelonianWeather.jpg"
];

// 초기화된 리스트의 요소를 랜덤으로 index를 추출하여 선정
const chosenImage = images[Math.floor(Math.random() * images.length)];

// Javascript에서 html element를 생성할 수 있음.
// 아래의 코드와 같은 경우, img 태그를 생성한다.
const bgImage = document.createElement("img");

// img는 src라는 속성을 갖는다. src를 초기화하고 있다.
bgImage.src = `img/${chosenImage}`;

// appendChild()는 body에 img 태그를 추가함.
document.body.appendChild(bgImage);