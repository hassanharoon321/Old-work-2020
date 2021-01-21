const images = document.getElementById("img")

const img = document.querySelectorAll("#img img")

let idx = 0;

function run(){
    idx++

    if(idx > img.length-1){
        idx = 0;
    }

    images.style.transform = `translateX( ${-idx * 500}px)`

    
}

setInterval(run,2000);