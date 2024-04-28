document.addEventListener('DOMContentLoaded', function () {
    const NUM_POINTS = 100000;

    const start = new Date('2021-04-01T00:00:00Z').getTime();
    
    const pointData = [];
    
    for (let i = 0; i < NUM_POINTS; ++i) {
        const max = Math.random() < 0.001 ? 100 : 20;
        const y = Math.floor(Math.random() * (max + 1)); // Math.random() 返回 [0, 1) 区间的浮点数，乘以 (max + 1) 然后取整
        pointData.push({x: start + (i * 30000), y: y});
    }

    const data = {
    datasets: [{
        borderWidth: 1,
        data: pointData,
        label: 'Large Dataset',
        radius: 0,
        }]
    };

    const decimation = {
        enabled: true,
        algorithm: 'lttb',
        samples:50
    };

    const ctx = document.getElementById('myDataChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line', 
        data: data,
        options: {
            animation: false,
            parsing: false,
        
            interaction: {
              mode: 'nearest',
              axis: 'x',
              intersect: false
            },
            plugins: {
              decimation: decimation,
            },
            scales: {
              x: {
                type: 'time',
                ticks: {
                  source: 'auto',
                  maxRotation: 0,
                  autoSkip: true,
                }
              }
            }
        }
    });

});
