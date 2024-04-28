document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myPieChart').getContext('2d');

    const plugin = {
        id: 'emptyDoughnut',
        afterDraw(chart, args, options) {
          const {datasets} = chart.data;
          const {color, width, radiusDecrease} = options;
          let hasData = false;
      
          for (let i = 0; i < datasets.length; i += 1) {
            const dataset = datasets[i];
            hasData |= dataset.data.length > 0;
          }
      
          if (!hasData) {
            const {chartArea: {left, top, right, bottom}, ctx} = chart;
            const centerX = (left + right) / 2;
            const centerY = (top + bottom) / 2;
            const r = Math.min(right - left, bottom - top) / 2;
      
            ctx.beginPath();
            ctx.lineWidth = width || 2;
            ctx.strokeStyle = color || 'rgba(255, 128, 0, 0.5)';
            ctx.arc(centerX, centerY, (r - radiusDecrease || 0), 0, 2 * Math.PI);
            ctx.stroke();
          }
        }
    };

    const myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {

        },
        options: {
            plugins: {
                emptyDoughnut: {
                  color: 'rgba(255, 128, 0, 0.5)',
                  width: 2,
                  radiusDecrease: 20
                }
            }   
        },
        plugins: [plugin]
    });
});

