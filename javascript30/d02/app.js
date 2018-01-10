const handS = document.querySelector('.second-hand');
const handM = document.querySelector('.min-hand');
const handH = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const degS = ((seconds / 60) * 360) + 90;
  const degM = ((minutes / 60) * 360) + 90;
  const degH = ((hours / 24) * 360) + 90;

  if(seconds === 0) handS.classList.add('quick');
  if(seconds === 1) handS.classList.remove('quick');

  handS.style.transform = `rotate(${degS}deg)`;
  handM.style.transform = `rotate(${degM}deg)`;
  handH.style.transform = `rotate(${degH}deg)`;
}

setInterval(setDate, 1000);
