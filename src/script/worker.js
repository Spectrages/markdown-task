
let worker = new Worker('/bigWork.js');
let btn = document.getElementById('calcButton');
btn.addEventListener('click', startComp);

function startComp () {
    console.log('i work')
    worker.postMessage(100000);
}
