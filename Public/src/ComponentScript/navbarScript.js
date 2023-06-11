const home = document.getElementById("home");
const ranking = document.getElementById("ranking");
const newRoutine = document.getElementById("new");
const login = document.getElementById("login");
const register = document.getElementById("register");

home.addEventListener("click", () => {
    window.location.href = "127.0.0.1/";
});

ranking.addEventListener("click", () => {
    window.location.href = "127.0.0.1/ranking";
});

newRoutine.addEventListener("click", () => {
    window.location.href = "127.0.0.1/new";
});

login.addEventListener("click", () => {
    window.location.href = "127.0.0.1/login";
});

register.addEventListener("click", () => {
    window.location.href = "127.0.0.1/register";
});

