self.onmessage = (event: MessageEvent<Array<number>>) => {
    const time = performance.now();
    self.postMessage(quickSort(event.data));
    console.log(`Quick sort = ${performance.now() - time}`)
}

const quickSort = (List: number[]): any => {
    if(List.length <= 1) {
        return List;
    }
    
    const pivot: number = List[List.length - 1];
    const leftList: number[] = [];
    const rightList: number[] = [];
    for(let i: number = 0; i < List.length - 1; i++) {
        if(List[i] < pivot) {
            leftList.push(List[i])
        } else {
            rightList.push(List[i])
        }
    }
    return [...quickSort(leftList), pivot, ...quickSort(rightList)];
}



/*

import { Chart } from "chart.js";

let arrX: Array<number> = [];
let arrY: Array<number> = [];
let res: Array<number> = [];

self.onmessage = (event: any) => {
    const canvas = event.data.canvas;
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

    console.log(typeof canvas.width)
    
    for (let i = 0; i < 1000; i++) {
        arrX[i] = Math.floor(Math.random() * i);
        arrY[i] = Math.floor(Math.random() * i);
    }

    for (let i = 0; i < arrX.length; i++) {
        res.push(Math.sqrt(Math.pow(arrX[i], 2) + Math.pow(arrY[i], 2)))
    }
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: res,
            datasets: [{
                label: 'Sorts',
                data: res,
                borderWidth: 1
            }],
        }
    });
    self.postMessage(myChart);
}

*/
