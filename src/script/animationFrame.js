let square = document.getElementById("square3");
let articleWidth = document.querySelector('.article').clientWidth - 75;
let rAF = window.requestAnimationFrame;
let animationRequest;
let timestamp = null;
let speed = 50;
let positionX = 0;
let sumTime = 0;

const move = (time) => {
    animationRequest = rAF(move)

    if (!timestamp) {
        timestamp = time;
    }

    positionX += speed * (timestamp/1000);
    
    square.style.transform = `translateX(${positionX}px)`;

    if(positionX >= articleWidth || positionX <= 0) {
        speed *= -1;
    }
}
rAF(move);