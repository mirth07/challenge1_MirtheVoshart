// Food chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Rice", "Meat", "Snacks", "Fluid"],
      datasets: [
        {
          label: "Food (gram)",
          backgroundColor: ["#4CCBAB", "#3E75C8","#E56590","#FFB88C","#c45850"],
          data: [8,4,6,5,3]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Food'
      }
    }
});
// Water chart
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Flat water (%)", "Mineral water (%)"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#4CCBAB", "#3E75C8"],
          data: [60, 40]
        }
      ]
    },
    options: {
      title: {
        display: true,
      }
    }
});

//distance chart
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [2,4,6,8,10,12,14,16,18,20],
    datasets: [{ 
        data: [110,324,567,754,1020,1267,1521,1897,2298,2478],
        label: "Your spaceshuttle (TESLA)",
        borderColor: "#3E75C8",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
    }
  }
});
