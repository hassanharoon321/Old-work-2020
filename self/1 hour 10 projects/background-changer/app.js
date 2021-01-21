function change(){
    var back = document.body.style.backgroundColor = randomBg()
    var text = document.getElementById("text").style.color = back

    if(back===text){
        console.log("true")
    }
    else{
        console.log("false")
    }
}

function randomBg(){
    return `hsl(${Math.floor(Math.random() * 360 )},90%,50%)`;
}