const menu = document.querySelector(".lines");
const list = document.querySelector(".menu_items");
const main = document.querySelector("main");


menu.addEventListener("click", () => {
    list.classList.toggle("show_list");
})

main.addEventListener("click", () => {
    list.classList.remove("show_list");
})