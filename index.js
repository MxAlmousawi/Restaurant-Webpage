// Make nav bar in  phone

$(document).ready(function () {
    let nav = $(".nav-bar");
    let bar = $("#bars");
    bar.click(function () {
        nav.slideToggle();
        bar.toggleClass("fa-solid fa-xmark");
        bar.toggleClass("fa-solid fa-bars");
    });
})
let squares = document.querySelectorAll(".squares ul li");
let slides = document.querySelector(".slideshow");
for(let i=0;i<squares.length;i++){
    squares[i].addEventListener("click" , () => {
        slides.style.transform = `translateX(-${i*100}vw)`
        slides.style.transition = ".5s";
        squares[i].style.backgroundColor = "#cdaa7c";
        for(let j=0;j<squares.length;j++){
            if(j != i){
                squares[j].style.backgroundColor = "#333";
            }
        }
    })
}