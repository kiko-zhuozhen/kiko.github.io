document.addEventListener('DOMContentLoaded', function () {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            data: [65, -59, 80, 81, -56, 55, -40],
            fill: false,
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
        }, {
            label: 'Dataset 2',
            data: [28, 48, -40, 19, 86, 27, 90],
            fill: false,
            borderColor: 'rgb(54, 162, 235)',
            tension: 0.1
        }]
    };
    
    const ctx = document.getElementById('myLineChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', 
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animation: {
                y: {
                    easing: 'easeInOutElastic',
                    from: (ctx) => {
                        if (ctx.type === 'data') {
                            if (ctx.mode === 'default' && !ctx.dropped) {
                                ctx.dropped = true;
                                return 0;
                            }
                        }
                    }
                }
            }
        }
    });
});

