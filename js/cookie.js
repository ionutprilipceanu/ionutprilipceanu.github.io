/*const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);

*/

localStorage.setItem('nunta','rochie');
console.log(localStorage.getItem('botez'))




cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("nunta", "mireasa");
});

document.cookie = "nunta=mireasa; expires=Fri, 31 Dec 9999 23:59:59 GMT";
