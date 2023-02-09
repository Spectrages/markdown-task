const squareSecond: HTMLElement = document.getElementById("square3");
const widthFrame: number = document.querySelector('.article').clientWidth - (squareSecond.getBoundingClientRect().width + 20);

const rAF = window.requestAnimationFrame;
let animationRequest: number;
let timestamp: number = null;
let speed: number = 50;
let positionX: number = 0;

const moveFrame = (time: number) => {
    animationRequest = rAF(moveFrame)
    if (!timestamp) {
        timestamp = time;
    }
    positionX += speed * (timestamp/1000);
    squareSecond.style.transform = `translateX(${positionX}px)`;
    if(positionX >= widthFrame || positionX <= 0) {
        speed *= -1;
    }
}
rAF(moveFrame);