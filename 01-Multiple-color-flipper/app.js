const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F'];

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
let box = [];
console.log(box);
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

const randomHexColor = () => {
  let hexColor = '#';
  for (i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  return hexColor;
};

let counter = 0;

btn.addEventListener('click', () => {
  counter++;
  nameClass = 'box-' + counter;
  addElement(nameClass);
});

function addElement(itemClass) {
  const element = document.createElement('div');
  box = [...box, element];
  element.classList.add('box');
  element.classList.add(itemClass);
  container.insertBefore(element, btn);
  console.log(box);
  box.forEach((e) => {
    e.addEventListener('mouseover', (item) => {
      const color = randomHexColor();
      item.target.style.backgroundColor = color;
      btn.style.backgroundColor = color;
    });
  });
}
