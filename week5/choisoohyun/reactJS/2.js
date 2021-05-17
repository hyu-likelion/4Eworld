class Animal {
    constructor(leg) {
            this.leg = leg
    }

    printAnimal() {
        console.log(this.name+"has "+String(this.leg)+"legs.")
    }
}

// Lion -> Animal 유용한 기능들 갖다 쓰기!
class Lion  extends Animal {
    constructor(name, leg) {
        super(leg) // 부모의 input
        this.name = name
    }
    getName() {
        console.log("My name is "+this.name)
    }
}


myLion = new Lion("King", 4)
myLion.getName()
myLion.printAnimal()
