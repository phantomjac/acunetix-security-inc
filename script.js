document.addEventListener('DOMContentLoaded', () => {
  const donutData = {
      labels: ['Critical', 'High', 'Medium', 'Low'],
      datasets: [{
          data: [10, 20, 20, 50],
          backgroundColor: ['red', 'orange', 'blue', 'green'],
          hoverOffset: 4
      }]
  };

  const donutConfig = {
      type: 'doughnut',
      data: donutData,
      options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'Vulnerability Distribution'
              }
          }
      }
  };

  const tinyLine1Data = {
      labels: [10, 20, 30, 40, 50, 60],
      datasets: [{
          label: 'Threat Score',
          data: [25, 35, 40, 60, 70, 80],
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          tension: 0.4,
      }]
  };

  const tinyLine1Config = {
      type: 'line',
      data: tinyLine1Data,
      options: {
          responsive: true,
          scales: {
              x: {
                  display: true,
                  title: {
                      display: true,
                      text: 'Time (Days)'
                  }
              },
              y: {
                  display: true,
                  title: {
                      display: true,
                      text: 'Threat Score'
                  }
              }
          },
          plugins: {
              legend: { display: false },
              title: {
                  display: true,
                  text: 'Threat Score'
              }
          }
      }
  };

  const tinyLine2Data = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
          label: 'New Threats',
          data: [2, 4, 7, 5,6],
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2,
          pointRadius: 0,
          fill: false,
          tension: 0.4,
      }]
  };

  const tinyLine2Config = {
      type: 'line',
      data: tinyLine2Data,
      options: {
          responsive: true,
          scales: {
              x: {
                  display: true,
                  title: {
                      display: true,
                      text: 'Weeks'
                  }
              },
              y: {
                  display: true,
                  title: {
                      display: true,
                      text: 'Number of Threats'
                  }
              }
          },
          plugins: {
              legend: { display: false },
              title: {
                  display: true,
                  text: 'New Threats'
              }
          }
      }
  };

  const donutCtx = document.getElementById('donutChart').getContext('2d');
  const tinyLine1Ctx = document.getElementById('scatterChart').getContext('2d');
  const tinyLine2Ctx = document.getElementById('barChart').getContext('2d');

  new Chart(donutCtx, donutConfig);
  new Chart(tinyLine1Ctx, tinyLine1Config);
  new Chart(tinyLine2Ctx, tinyLine2Config);
});