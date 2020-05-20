const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("botez", "biserica");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);



localStorage.setItem('majorat','distractie');
console.log(localStorage.getItem('true'))




cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("petrecere", "invitati");
});

//document.cookie = "nunta=mireasa; expires=Fri, 31 Dec 9999 23:59:59 GMT";


