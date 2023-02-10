const squareSecond: HTMLElement | null = document.getElementById("square3");
const article: HTMLElement | null = document.querySelector('.article');

const rAF = window.requestAnimationFrame;
let animationRequest: number;
let timestamp: number = 0;
let speed: number = 50;
let positionX: number = 0;

const moveFrame = (time: number) => {
    if(squareSecond !== null && article !== null) {
        const articleWidth: number = article.clientWidth - squareSecond.getBoundingClientRect().width + 20;
        animationRequest = rAF(moveFrame)
    if (!timestamp) {
        timestamp = time;
    }
    positionX += speed * (timestamp/1000);
    squareSecond.style.transform = `translateX(${positionX}px)`;
    if(positionX >= articleWidth || positionX <= 0) {
        speed *= -1;
    }
    }
}
rAF(moveFrame);