import bigFunc from './bigFunc'

const postMessage = 3_000_000_000;
if(window.Worker) {
    let worker = new Worker('worker.js', {type: "module"});
    worker.postMessage(postMessage);
    worker.onmessage = (e) => {
        console.log(e.data)
    }
} else {
    let res = bigFunc(postMessage);
    console.log(res);
}
//debugger;