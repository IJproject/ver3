{
  var frontChart = document.getElementById('front-end-chart');
  var backChart = document.getElementById('back-end-chart');
  var otherChart = document.getElementById('other-chart');

  new Chart(frontChart, {
    type: 'bar',
    data: {
      labels: ['HTML,CSS', 'JavaScript(pure)', 'React/Next', 'Vue'],
      datasets: [{
        label: '#confidence [%]',
        data: [80, 65, 50, 40],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

