const pressed = [];
const secretCode = 'mattstub';

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
  if(pressed.join('').includes(secretCode)) {
    cornify_add();
  }
})
