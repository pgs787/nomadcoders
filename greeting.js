const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".currentTime");

const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  if (21 <= getTime.hours || getTime.hours < 6) {
    greeting.innerText = `Good moring, ${text}`;
  } else if (6 <= getTime.hours || getTime.hours < 12) {
    greeting.innerText = `Good evening, ${text}`;
  } else {
    greeting.innerText = `Good  afternoon, ${text}`;
  }
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
    // he is not
  } else {
    // he is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  getTime();
  setInterval(getTime, 1000);
}

init();
