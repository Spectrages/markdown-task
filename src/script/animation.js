
let direction = 'left';
let square = document.querySelectorAll(".square");
let article = document.querySelectorAll('.article');
let myMap = new Map()
let width = [];
  for (let k = 0; k < article.length; k++) {
    width.push(article[k].getBoundingClientRect().width)
    myMap.set(square[k], width[k])
  }
let i = 0;
const arr = Array.from(myMap)
console.log(arr)

function move() {
  for(let k = 0; k < arr.length; k++) {
    if(i > (arr[k][1] - 70)) {
      direction = 'right' 
    }
    else if (i < 0){
      direction = 'left'
    }
    if(direction === 'left'){
      arr[k][0].style.left = i + 'px';
      i++;
    }
    else if(direction === 'right'){
      arr[k][0].style.left = i + 'px';
      i--;
    }
  }
}
window.onload = setInterval(move, 25)
