import anime from "./anime.es.js";

let myChart = document.querySelector("#myChart");

const data = {
    labels: ['6:59', '6:59', '6:59', '6:59', '6:59'],
    datasets: [
        {
            label: "Currency Update",
            data: [],
            fill: false,
            borderColor: "rgb(204, 101, 254)",
            tension: 0.2,
            pointRadius: 5,
            pointHoverRadius: 6,
            pointBorderWidth: 2,
            pointBorderColor: "rgb(204, 101, 254, 0.35)"
        },
    ],
};
let chart = new Chart(myChart, {
    type: "line",
    data: data,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                beginAtZero: true,
                suggestedMin: 20,
                suggestedMax: 100,
                position: "left",
                title: {
                    display: true,
                    text: 'Rupee Value',
                }
            },
        },
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: "Real Time Data Chart",
            },
            customCanvasBackgroundColor: {
                color: 'lightGreen',
              }
        },
    },
});

let addData = async () => {

    // let fetchData = await fetch(`https://api.twelvedata.com/time_series?symbol=USD/INR&interval=1min&apikey=0eb429927c764e62961dfb2811da6f3a`);
    // let data = await fetchData.json();
    // console.log(data);

        // chart.data.labels.push(data.values[0].datetime.slice(11, 16));
        // chart.data.datasets[0].data.push(data.values[0].high);
        // chart.update();

        chart.data.datasets[0].data.push(Math.random() * 100);
        chart.data.labels.push(data.labels.length);
        chart.update();
}
setInterval(addData, 1000);