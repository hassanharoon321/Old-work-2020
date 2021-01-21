class Mobile {
    constructor(){
        //instance member
        this.a = 12;
        this.c = 13
        this.show = function () {
            return 13+15
        }
    }
    //property member
    display(){
        return "Prototype method"
    }
}

var nokia = new Mobile()
console.log(nokia.a)
console.log(nokia.show())
console.log(nokia.display())