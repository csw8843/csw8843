const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "userName";

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerHTML = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CALSSNAME);
}

function onLoginSumit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CALSSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
}

loginForm.addEventListener("submit", onLoginSumit);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CALSSNAME);
  loginForm.addEventListener("submit", onLoginSumit);
} else {
  paintGreetings();
}
