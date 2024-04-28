document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myScatterChart').getContext('2d');

    const quadrants = {
        id: 'quadrants',
        beforeDraw(chart, args, pluginOptions) {
            const {ctx, chartArea: {left, top, right, bottom}, scales: {x, y}} = chart;
            const midX = x.getPixelForValue(0);
            const midY = y.getPixelForValue(0);
            const opts = chart.options.quadrants;
            
            ctx.save();
            ctx.fillStyle = opts.topLeft;
            ctx.fillRect(left, top, midX - left, midY - top);
            ctx.fillStyle = opts.topRight;
            ctx.fillRect(midX, top, right - midX, midY - top);
            ctx.fillStyle = opts.bottomRight;
            ctx.fillRect(midX, midY, right - midX, bottom - midY);
            ctx.fillStyle = opts.bottomLeft;
            ctx.fillRect(left, midY, midX - left, bottom - midY);
            ctx.restore();
        }        
    };

    const scatterChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Scatter Dataset',
                data: [{
                    x: -8,
                    y: 2.5
                },{
                    x: -7,
                    y: 1
                },{
                    x: -3,
                    y: -4
                },{
                    x: -9,
                    y: -1.5
                },{
                    x: -10,
                    y: 0
                }, {
                    x: 0,
                    y: 10
                }, {
                    x: 10,
                    y: 5
                }, {
                    x: 0.5,
                    y: 5.5
                }, {
                    x: 0.3,
                    y: 5.1
                }, {
                    x: 0.1,
                    y: 0.5
                }, {
                    x: 2.5,
                    y: 4.5
                }]
            }]
        },
        options: {
            quadrants: {
                topLeft: 'lightgreen',
                topRight: 'lightblue', 
                bottomRight: 'lightyellow',
                bottomLeft: 'lightpink'
            }
        },
        plugins: [quadrants]
    });
});
