// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart3");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["17/11/21 08:30:24", "17/11/21 09:30:24", "17/11/21 10:30:24", "17/11/21 11:30:24", "17/11/21 13:30:24"],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "rgba(0,128,0,1.0)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(0,128,0,1.0)",
      pointBorderColor: "rgba(0,128,0,1.0)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(0,128,0,1.0)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [0, 4, 2, 3, 0],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 8
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 4,
          maxTicksLimit: 7
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
