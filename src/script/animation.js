let direction = 'left';
let i = 0;
let square = document.querySelector(".square");
let articleWidth = document.querySelector('.article').getBoundingClientRect().width;
console.log('work')
function move() {
    if(i > (articleWidth - 70)) {
      direction = 'right' 
    }
    else if (i < 0){
      direction = 'left'
    }
    if(direction === 'left'){
      square.style.left = i + 'px';
      i++;
    }
    else if(direction === 'right'){
      square.style.left = i + 'px';
      i--;
    }
}
window.onload = setInterval(move, 25)