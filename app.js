const contentBox = document.querySelector('.content');
const triggerOffset = window.innerHeight / 5 * 4;

window.addEventListener('scroll', listBoxes);


const h1 = document.createElement('h1');
h1.textContent = 'Scroll to see the animation';
contentBox.appendChild(h1);

function boxCreate() {
  for (let i = 0; i < 15; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    const h2 = document.createElement('h2');
    h2.textContent = 'Content';
    box.appendChild(h2);
    contentBox.appendChild(box);
  }
}

function listBoxes() {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    const isBoxVisible = boxTop < triggerOffset;

    box.classList.toggle('show', isBoxVisible);
  });
}

boxCreate();
listBoxes();