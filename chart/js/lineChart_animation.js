document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('myLineChart').getContext('2d');
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
            label: 'Looping tension',
            data: [65, 59, 80, 81, 26, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)'}]
        },
        options: {
            animations: {
                tension: {
                duration: 1000,
                easing: 'easeInQuad',
                from: 1,
                to: 0,
                loop: true
                }
            },
            scales: {
                y: { 
                min: 0,
                max: 100
                }
            }
        }
    });
});



