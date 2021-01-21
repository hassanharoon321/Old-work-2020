const sounds = [
    "time"
]

sounds.forEach(sounds =>{
    const btn = document.createElement("button")
    btn.classList.add("btn");

    btn.innerText= sounds

    btn.addEventListener("click",() =>{
        stopSongs();
        document.getElementById(sounds).play()
    })

    document.body.appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sounds =>{
        const song = document.getElementById(sounds);
        song.pause()

        song.currentTime = 0;
    })
}