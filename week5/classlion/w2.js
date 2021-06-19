class Animal {
    constructor(leg) {
        this.leg = leg
    }

    printAnimal(){
        console.log(this.name +"은 "+String(this.leg)+"개의 다리를 가진다.")
    }
}

class Lion extends Animal {
    constructor(name, leg){
        super(leg) //부모의 (constructor)의 input을 의미
        this.name = name
    }
    getName(){
        console.log("내 이름은"+this.name)
    }
}

myLion = new Lion("king")
myLion.getName()
myLion.printAnimal()