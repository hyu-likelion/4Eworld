function sayHello(sayGoodbye) {
    setTimeout(()=>{
        console.log("Hello")
        sayGoodbye()
    }, 2000);
}

sayHello("Mike", function() {
    console.log("bye")
})

function sayHello2(name) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(name+" Hello")
            resolve("서울")
        }, 3000)
    })
}

// sayHello2("Frank")
//     .then((location)=>console.log(location+" bye"))


async function sayHelloBye(name) {
    loc = await sayHello2(name)
    console.log(loc + "Bye")
}

sayHelloBye("Soohyun")
