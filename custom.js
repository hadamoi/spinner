const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');
const arrow = document.querySelector('.arrow span');

let rotateValue = 0;
let rotateChecked = false;

startBtn.addEventListener('click', () => {
  activeArrow();
})

resetBtn.addEventListener('click', () => {
  resetArrow();
})

const rotateArrow = () => {
  rotateValue = 720 + Math.ceil(Math.random() * 720);
  arrow.style.transitionDuration = '1.5s';
  arrow.style.transform = `rotate(${rotateValue}deg)`;
}

const resetArrow = () => {
  if (rotateChecked) {
    arrow.style.transitionDuration = '0.8s';
    arrow.style.transform = `rotate(${360 * Math.ceil(rotateValue / 360)}deg)`;
    arrow.addEventListener('transitionend', resetFunction);
  }
}

const resetFunction = () => {
  if (rotateChecked) {
    arrow.style.transitionDuration = '0s';
    arrow.style.transform = `rotate(${0}deg)`;
    rotateChecked = false;
  }
  arrow.removeEventListener('transitionend', resetFunction);
}

const activeArrow = () => {
  if (!rotateChecked) {
    rotateArrow();
    rotateChecked = true;
  }
}