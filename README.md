# 🌀 Spinner
Tap START to rotate the arrow. </br>
Reset allows you to start over.

#### ✔️ Things to remember
```
const rotateArrow = () => {
  rotateValue = 720 + Math.ceil(Math.random() * 720);
  arrow.style.transitionDuration = '1.5s';
  arrow.style.transform = `rotate(${rotateValue}deg)`;
}
```
* To make the arrow appear at a different angle each time the button is pressed, I used the Math.random() function.
