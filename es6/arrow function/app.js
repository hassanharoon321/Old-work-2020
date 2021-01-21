function hello(){
    console.log("hewllo")
}

hello()



// arrow function with parameter

var fun2 = (a,b)=>{
    console.log(a,b);
}

fun1(10,20)
var fun1 = (a,b=10)=>{
    console.log(a,b);
}

fun1(10)