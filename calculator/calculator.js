const input = document.querySelector("input");

function calForm(text){
    input.value= input.value+ text;
}

function calculate(){
    const calcul = eval(input.value);
    input.value = calcul;
}

function deleting(){
    input.value = "";
}

form.addEventListener("submit",calForm);