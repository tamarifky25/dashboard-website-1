// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("barChart2");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["09/11", "10/11", "12/11", "13/11", "14/11", "15/11","16/11"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(0,128,0,1.0)",
      borderColor: "rgba(0,128,0,1.0)",
      data: [750, 700, 650, 700, 690, 750, 750],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 9
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 800,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
