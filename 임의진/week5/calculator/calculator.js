const input = document.querySelector("input")


function display(text) {
    input.value = input.value + text ;
}

function calculate() {
    const result = eval(input.value);
    input.value=result;
}

function allClear() {
    input.value="";
}