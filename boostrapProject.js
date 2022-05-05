let menuBarControl = document.getElementsByClassName("menuBarControl")[0];
let menuContainer = document.getElementsByClassName("menuContainer")[0];
let crossButton = document.getElementsByClassName("crossButton")[0];
menuBarControl.addEventListener("click", () => {
  menuContainer.classList.add("menuMobileControl");
});
crossButton.addEventListener("click", () => {
  menuContainer.classList.remove("menuMobileControl");
});

let jumpDataTable = (url) => {
  setTimeout(() => {
    location.href = `${url}`;
  }, 2000);
};
let monthForChart = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Nov",
  "Dec",
];
let dataForSale = [12, 12, 8, 14, 15, 3, 5, 9, 10, 11, 16, 19];
let dataForOrder = [10, 3, 4, 6, 5.5, 6, 8, 9, 2, 10, 14, 14];
const lineChart = document.getElementById("myChart").getContext("2d");
const lineChartValue = new Chart(lineChart, {
  type: "line",
  data: {
    labels: monthForChart,
    datasets: [
      {
        label: "Monthly Sale Anylysis Represent",
        data: dataForSale,
        backgroundColor: ["#737880"],
        borderColor: [" #6089cc"],
        borderWidth: 2,
        tension: 0,
        pointHoverBorderWidth: 5,
        pointHoverRadius: 8,
      },
      {
        label: "Order Anylysis Represent",
        data: dataForOrder,
        backgroundColor: [""],
        borderColor: ["#77d47e"],
        borderWidth: 2,
        tension: 0,
        pointHoverBorderWidth: 5,
        pointHoverRadius: 8,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

let dataForLocation = [12, 3, 5, 7, 9, 10, 7, 8, 6, 10, 11, 12];
const doughnutChart = document.getElementById("doughnutChart").getContext("2d");
const doughnutChartValue = new Chart(doughnutChart, {
  type: "doughnut",
  data: {
    labels: [
      "Yangon",
      "Mandlay",
      "Pyin Oo Lwin",
      "Pathein",
      "Ayerwaddy",
      "Phar Enn",
      "SatKaing",
      "Bago",
      "Lar Sho",
      "Sitt Tway",
      "Kyaut Phyu",
      "Myit Kyi Nar",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: dataForLocation,
        backgroundColor: [
          "#fcdf03",
          "#94bf5c",
          "#678758",
          "#187515",
          "#c3d4c3",
          "#5db382",
          "#27e6cc",
          "#2799e6",
          "#384f5e",
          "#5456b8",
          "#813cc2",
          "#962452",
        ],
        borderColor: [
          "#fcdf03",
          "#94bf5c",
          "#678758",
          "#187515",
          "#c3d4c3",
          "#5db382",
          "#27e6cc",
          "#2799e6",
          "#384f5e",
          "#5456b8",
          "#813cc2",
          "#962452",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

let tableDivision = document.getElementsByTagName("td");

for (let i = 0; i < tableDivision.length; i++) {
  tableDivision[i].addEventListener("click", (event) => {
    let clickTarget = event.target;
    let clickTargetValue = clickTarget.innerHTML;
    clickTarget.innerHTML = `<input
  type="text"
  autofocus = "autofocus"
  class="form-control tableEdit"
  placeholder="Username"
  aria-label="Username"
  aria-describedby="basic-addon1"
/>`;
    let tableEdit = document.getElementsByClassName("tableEdit")[0];
    tableEdit.value = clickTargetValue;
    tableEdit.addEventListener("keyup", (event) => {
      let enterKey = event.key;
      console.log(enterKey);
      if (enterKey == "Enter") {
        clickTarget.innerHTML = tableEdit.value;
      }
    });
  });
}

// start menu bar arrow down selecting control
let test = document.getElementsByClassName("test");
console.log(test[0].children)

$(".carousel").carousel({
  interval: 1000,
});
