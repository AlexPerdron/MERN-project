const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.close-popup');

var repassword = document.getElementById("Re-Password");
var password = document.getElementById("Password");

registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});
loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});
btnPopup.addEventListener("click", () => {
    wrapper.classList.add("active-popup");
});
iconClose.addEventListener("click", () => {
    wrapper.classList.remove("active-popup");
    console.log("close");
});
if (repassword !== password) {
    alert("Password not match");
}
