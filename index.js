//button press
for (let i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    let button = this.innerHTML;
    makeSound(button);
    buttonAnimation(button);
  });
}
//keyboard press
document.addEventListener('keydown', function (e) {
  makeSound(e.key);
  buttonAnimation(e.key);
});
//the function that plays the sound.
function makeSound(key) {
  let audio = undefined;
  switch (key) {
    case 'w':
      audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
      break;
    case 'a':
      audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
      break;
    case 's':
      audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
      break;
    case 'd':
      audio = new Audio('./sounds/tom-4.mp3');
      audio.play();
      break;
    case 'j':
      audio = new Audio('./sounds/snare.mp3');
      audio.play();
      break;
    case 'k':
      audio = new Audio('./sounds/crash.mp3');
      audio.play();
      break;
    case 'l':
      audio = new Audio('./sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      break;
  }
}

//press animation function
function buttonAnimation(currentKey) {
  let activeButton = document.querySelector('.' + currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function () {
    activeButton.classList.remove('pressed');
  }, 100);
}
