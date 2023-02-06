let direction = 'left';
let i = 0;
let square = document.getElementById("square1");
let articleWidth = document.querySelector('.article').getBoundingClientRect().width;

function move () {
    if (i > (articleWidth - 70)) {
      direction = 'right'
    }
    else if (i < 0) {
      direction = 'left'
    }
    if (direction === 'left') {
      square.style.transform =`translateX(${i}px)`;
      i++;
    }
    else if (direction === 'right') {
      square.style.transform =`translateX(${i}px)`;
      i--;
    }
}
window.onload = setInterval(move, 15)

