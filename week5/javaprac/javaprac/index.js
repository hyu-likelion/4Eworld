//initialize: let
//const: 상수 선언(바꾸게 선언 다시하거나 이러면 오류뜸)
//var: 
/*
const a = 221;
let b = a - 5;
a = 4;
console.log(b);
*/

/*true&flase는 text가 아님 
const wat = true;
//number
const waht = 666;
//float
const wet = 55.1;
*/

//const daysOfWeek = ["Mon","Tue","Wed","Thur"];
//console.log(daysOfWeek[2]);

/*Camel case
lowerOfWeek <-이런식으로 변수명 만들어야함 */


/*object는 value 이름을 넣을 수 있음 */
/*const nicoInfo = {
    name:"Min", 
    age:25,
    gender:"Male",
    //object안에array가 들어갈 수 있음
    favMovies: ["a","b","c"],
    favFood: [
        {
            name:"kimchi", fatty:false
        },
        {
            name:"cheese",fatty:true
        }
    ]
};
console.log(nicoInfo);



function sayHello(name, age){
    console.log('Hello!',name,"youare",age,"yearsold");

    console.log(`Hello ${name} yor are ${age} years old`);
}

sayHello("Nicolas",15);

const calculator = {
    plus: function(a,b){
        return a - b;
    }
}

console.log(calculator.plus(5,5))

//const title = document.getElementById("title");
const title = document.querySelector("#title");
//DOM<- html있는거 다 object로 바꿔줌
/*js에서 HTML바꿀 수 있음
title.innerHTML = "HIROO";
title.style.color = "yellow";*/
//다 볼 수 있음
//console.dir(title);

/*function handleResize() {
    console.log("I have been resized");
}

//window.addEventListener("resize",handleResize);


//const age = prompt("How old are you");


/*const BASE_COLOR = "white";
const OTHER_COLOR = "black";

function handleClick(){
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR

    } else {
        title.style.color = BASE_COLOR;

    }
} */
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    /*
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass){
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    } */
}

function init(){
    title.addEventListener("click",handleClick)
}

init();