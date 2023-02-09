
const squareFirst: HTMLElement = document.getElementById("square1");
const widthInterval: number = document.querySelector('.article').clientWidth - (squareFirst.getBoundingClientRect().width + 20);
let direction: string = 'left';
let i: number = 0;

function moveInterval () {
    if (i > widthInterval) {
      direction = 'right'
    }
    else if (i < 0) {
      direction = 'left'
    }
    if (direction === 'left') {
      squareFirst.style.transform =`translateX(${i}px)`;
      i++;
    }
    else if (direction === 'right') {
      squareFirst.style.transform =`translateX(${i}px)`;
      i--;
    }
};

window.onload = (event) => {
    setInterval(moveInterval, 15);
} 