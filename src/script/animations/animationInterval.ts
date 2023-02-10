
const squareFirst: HTMLElement | null = document?.getElementById("square1");
const articleWidth: HTMLElement | null = document?.querySelector('.article');
let direction: string = 'left';
let i: number = 0;

function moveInterval() {
  if (squareFirst !== null && articleWidth !== null) {
    const widthInterval = articleWidth.clientWidth - squareFirst.getBoundingClientRect().width + 20
    if (i > widthInterval) {
      direction = 'right'
    }
    else if (i < 0) {
      direction = 'left'
    }
    if (direction === 'left') {
      squareFirst.style.transform = `translateX(${i}px)`;
      i++;
    }
    else if (direction === 'right') {
      squareFirst.style.transform = `translateX(${i}px)`;
      i--;
    }
  }

};

window.onload = () => setInterval(moveInterval, 15);