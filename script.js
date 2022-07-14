const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header_list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".header_link").forEach(n => n.addEventListener ("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
