const button = document.getElementsByTagName("button")

function add(text){
    const input = document.querySelector(".show");
    input.value += text;
}

function evaluation(){
    const input = document.querySelector(".show");
    result = eval(input.value);
    input.value = result;
}

function clean(){
    const input = document.querySelector(".show");
    input.value = ""
}
