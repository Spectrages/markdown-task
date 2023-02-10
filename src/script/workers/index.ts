
import { Chart } from "chart.js";

const canvasQuick = <HTMLCanvasElement>document.getElementById('myChart1');
const ctxQuick = canvasQuick.getContext('2d');

const canvasHeap = <HTMLCanvasElement>document.getElementById('myChart2');
const ctxHeap = canvasHeap.getContext('2d');


const initArray = () => {
    let arrX: Array<number> = [];
    let arrY: Array<number> = [];
    let res: Array<number> = [];

    for (let i = 0; i < 100; i++) {
        arrX[i] = Math.floor(Math.random() * i);
        arrY[i] = Math.floor(Math.random() * i);
    }

    for (let i = 0; i < arrX.length; i++) {
        res.push(Math.sqrt(Math.pow(arrX[i], 2) + Math.pow(arrY[i], 2)))
    }
    return res;
}

const createChart = (ctx?: CanvasRenderingContext2D, data?: Array<number>, name?: string) => {
    if(ctx !== undefined) {
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: data,
                datasets: [{
                    label: name,
                    data: data,
                    borderWidth: 1,
                    borderColor: '#E5DAD4',
                    backgroundColor: '#da2055'
                }],
            }
        });
    }
}

const start = () => {

    if (window.Worker) {
        let workerQuickSort: Worker = new Worker('./workerQuickSort.bundle.js', { type: "module" });
        let workerHeapSort: Worker = new Worker('./workerHeapSort.bundle.js', { type: "module" });

        workerHeapSort.postMessage(initArray());
        workerQuickSort.postMessage(initArray());

        workerQuickSort.onmessage = (event: MessageEvent<Array<number>>) => ctxQuick ? createChart(ctxQuick, event.data, 'Quick sort') : null;
        workerHeapSort.onmessage = (event: MessageEvent<Array<number>>) => ctxHeap ? createChart(ctxHeap, event.data, 'Heap sort') : null;
    } else {
        console.error('Worker not working!')
    }
}
start();