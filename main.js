const arrow = document.querySelector(".section5-container__arrow");
const arrowUp = document.querySelector(".section5-container__arrow-up");
const arrow2 = document.querySelector(".section5-container__arrow2");
const arrowUp2 = document.querySelector(".section5-container__arrow-up2");
const container = document.querySelector(".section5-container2");
const container2 = document.querySelector(".section5-container2-1");
container.style.display = "none";
container2.style.display = "none";
arrow.addEventListener("click", () => {
    arrowUp.style.display = "block";
    arrow.style.display = "none";
    container.style.display = "flex";
    arrowUp.addEventListener("click", () => {
        arrowUp.style.display = "none";
        arrow.style.display = "block";
        container.style.display = "none";
    })
})

arrow2.addEventListener("click", () => {
    arrowUp2.style.display = "block";
    arrow2.style.display = "none";
    container2.style.display = "flex";
    arrowUp2.addEventListener("click", () => {
        arrowUp2.style.display = "none";
        arrow2.style.display = "block";
        container2.style.display = "none";
    })
})
