function playSound(event){
 const audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
 const key = document.querySelector(`div[data-key='${event.keyCode}']`);
 if (!audio) return;

 key.classList.add("playing");
 
 audio.currentTime = 0;
 audio.play();
}


const keys = Array.from(document.querySelectorAll(".key"));
function removeClass(event){
 event.target.classList.remove("playing");

}

window.addEventListener("keydown", playSound);
keys.forEach(key => {
    key.addEventListener('transitionend', removeClass)
});

