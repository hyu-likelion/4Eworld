const title = document.querySelector(".js-title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS)
}

function init(){
    title.addEventListener("mouseenter", handleClick);
    title.addEventListener("mouseout", handleClick);
}

init();

