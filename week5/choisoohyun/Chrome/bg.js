const body = document.querySelector("body");

const IMG_NUMBER = 3;

// When Using API
// function handleImgLoad(){
//     console.log("finished loading");
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    body.appendChild(image);
    image.classList.add('bgImage');
    // image.addEventListener("loadend", handleImgLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
