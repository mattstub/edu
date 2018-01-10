// Localize the keystroke that is being pressed
// Verify that it is a legitimate key with an audio file associated
// Play the audio file and add appropriate styling
// Always rewind the current sound so that a sound is played on each successful keystroke
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if(!audio) return;

  audio.currentTime = 0;                        
  audio.play();
  key.classList.add('playing');                
};

// Verify that the keycode has a transform element
// Remove the playing styling to return the element to normal
// This function is cycled through each time a transition takes place
function removeTransition(e) {
  if(e.propertyName !== 'transform') return;   

  this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
