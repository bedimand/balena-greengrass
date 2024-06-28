var data = {
  labels: ["1 Dispositivo", "10 Dispositivos", "100 Dispositivos", "1000 Dispositivos", "5000 Dispositivos"],
  datasets: [
    {
      label: "Balena",
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(75,192,192,0.4)",
      hoverBorderColor: "rgba(75,192,192,1)",
      data: [0, 0, 369, 2202, 11219],
    },
    {
      label: "IoT Greengrass",
      backgroundColor: "rgba(255,159,64,0.2)",
      borderColor: "rgba(255,159,64,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,159,64,0.4)",
      hoverBorderColor: "rgba(255,159,64,1)",
      data: [0.17, 1.64, 16.37, 163.65, 818.22],
    }
  ]
};

var options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      stacked: false,
      grid: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
};

new Chart('chart', {
  type: 'bar',
  options: options,
  data: data
});
