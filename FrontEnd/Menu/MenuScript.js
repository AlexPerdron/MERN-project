const wrapper = document.querySelector(".wrapper");
const loginlink = wrapper.querySelector(".login-link");
const registerlink = wrapper.querySelector(".register-link");

registerlink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
loginlink.addEventListener("click", () => {
    wrapper.classList.remove("active");
});
  
