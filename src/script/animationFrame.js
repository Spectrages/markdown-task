let square = document.getElementById("square3");
let articleWidth = document.querySelector('.article').getBoundingClientRect().width;
let animationRequest, previousTimeStamp;
let start = null;
const path = articleWidth - 65;
let count;


const move = (timestamp) => {
    if (!start) {
        start = timestamp;
    }
    animationRequest = window.requestAnimationFrame(move)
    let progress = timestamp - start;
    if (previousTimeStamp !== timestamp) {
        count = Math.min(5 * progress/100, path);
        square.style.transform = `translateX(${count}px)`;
    }
    console.log(previousTimeStamp === timestamp)
}
window.requestAnimationFrame(move)
