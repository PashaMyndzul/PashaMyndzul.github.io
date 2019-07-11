
const container = document.querySelectorAll(".key");
function playNote(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    const repeat = e.repeat;
    if (repeat === true) return ;
    if (!key) return ;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
}
function playNoteMouse(e) {
    let click = document.querySelector(`.key[data-key="${e.target.dataset.key}"]`);
    let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`);
    if (click == null)
    click = document.querySelector(`.key[data-key="${e.target.parentNode.dataset.key}"]`);
    if (audio == null) 
    audio =  document.querySelector(`audio[data-key="${e.target.parentNode.dataset.key}"]`);
    if (!click) return;
    click.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
};
function removeTransition(e) {
    this.classList.remove("playing");
  }
  container.forEach(key => key.addEventListener("transitionend",
   removeTransition));
document.addEventListener('keydown', playNote);
document.addEventListener('click',playNoteMouse);


