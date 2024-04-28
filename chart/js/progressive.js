document.addEventListener('DOMContentLoaded', function () {
    const dataPoints = [];
    let prev = 100;
    for (let i = 0; i < 1000; i++) {
      prev += 5 - Math.random() * 10;
      dataPoints.push({x: i, y: prev});
    }

    const totalDuration = 20000;
    const delayBetweenPoints = totalDuration / dataPoints.length; 

    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: NaN, 
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: (ctx) => ctx.chart.scales.y.getPixelForValue(0), 
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return ctx.index * delayBetweenPoints;
            }
        }
    };

    const ctx = document.getElementById('myProgressiveChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Random Data',
                data: dataPoints,
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1,
                fill: false,
                radius: 0
            }]
        },
        options: {
            animation,
            interaction: {
                intersect: false
            },
            plugins: {
                legend: {
                    display: true
                }
            },
            scales: {
                x: {
                    type: 'linear'
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });
});


