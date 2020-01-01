const body = document.querySelector("body");

const IMG_NUM = 5;

function paintImage(imgNumber) {
  body.style.background = `url(https://pgs787.github.io/nomadcoders/img/${imgNumber +
    1}.jpg) `;
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundSize = "cover";
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNm = getRandom();
  paintImage(randomNm);
}

init();
