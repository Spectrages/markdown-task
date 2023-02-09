const num: number = 3_000_000_000;

const start = () => {
    if(window.Worker) {
        let worker: Worker = new Worker('./worker.bundle.js', { type: "module" });
        worker.postMessage(num);
        worker.onmessage = (event: MessageEvent<number>) => {
            worker.terminate();
            console.log(event.data);
        }
    } else {
        console.error('Worker not working!')
    }
    
}
start();
