
/*
const first = document.querySelector('#number1');
const second = document.querySelector('#number2');
const btn = document.getElementById('btn');

const result = document.querySelector('.result');

if (window.Worker) {
    const worker = new Worker('worker.js')

    first.onchange = function () {
        worker.postMessage([first.value, second.value])
    }

    second.onchange = function () {
        worker.postMessage([first.value, second.value])
    }
    worker.onmessage = function (e) {
        result.textContent = e.data;
        console.log('Message received from worker');
    }
} else {
    console.log('Your browser doesn\'t support web workers.');
}

*/