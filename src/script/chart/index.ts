import { Chart } from "chart.js";
import { data } from "./data";

const canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('myChart');
const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

fftw.dft_1d([1, 1, 1, 1], function(err, result) {
    result.forEach(function(complex) {
      console.log(complex.toString());
    });
  });

const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Life Expectancy by Country',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 75
                }
            }]
        }
    }
});