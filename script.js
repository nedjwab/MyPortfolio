const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body= document.querySelector("body")
const headline=document.querySelector(".headlineSection");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.style.overflow="hidden";
  headline.classList.toggle("active");
 
  /*body.style.backgroundColor="rgba(0, 0, 0, 0.3)";*/
});
document.querySelectorAll(".nav-item").forEach(e =>e.addEventListener("click",()=>  {
hamburger.classList.remove("active");
navMenu.classList.remove("active");
body.style.overflow="scroll";
headline.classList.remove("active");
  
}));