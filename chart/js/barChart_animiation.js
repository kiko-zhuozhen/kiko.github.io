document.addEventListener('DOMContentLoaded', function () {
    let delayed = false;
    const DATA_COUNT = 7;
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            data: [50, 60, 70, 180, 190, 200, 210],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }, {
            label: 'Dataset 2',
            data: [28, 48, 40, 19, 86, 27, 90],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
        }]
    };
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            animation: {
                onComplete: () => {
                    delayed = true;
                },
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                    }
                    return delay;
                },
            },
            scales: {
                x: {
                stacked: true,
                },
                y: {
                stacked: true
                }
            }
        }
    });
});

