const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
sidebar.classList.remove("close", "hoverable");
});

submenuItems.forEach((item, index) => {
item.addEventListener("click", () => {
item.classList.toggle("show_submenu");
submenuItems.forEach((item2, index2) => {
  if (index !== index2) {
    item2.classList.remove("show_submenu");
  }
});
});
});

if (window.innerWidth < 768) {
sidebar.classList.add("close");
} else {
sidebar.classList.remove("close");
}
// end of the navigation

window.onload = function () {
    slider1 = document.querySelector(".slider1 input");
    slider1.oninput = function () {
        sliderValue1 = document.querySelector(".sliderValue1");
        sliderValue1.innerHTML = slider1.value;
    }
    slider2 = document.querySelector(".slider2 input");
    slider2.oninput = function () {
        sliderValue2 = document.querySelector(".sliderValue2");
        sliderValue2.innerHTML = slider2.value;
    }
}

// graph
const ctx = document.getElementById("barchart").getContext('2d');

const labels = [
    '20',
    ' ',
    '25',
    ' ',
    '30',
    ' ',
    '35',
    ' ',
    '40',
    ' ',
    '60',
    ' ',
    '65',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'Employee',
      data: [50, 75, 100, 128, 142, 156 ,170, 184, 222, 244, 266, 288, 300],
      backgroundColor: [
        // First half of the bar
        'rgb(0, 0, 204)',
        // Second half of the bar
      ],
      borderColor: [
        // Border color for the first half of the bar
        'rgb(255, 99, 132)',
        // Border color for the second half of the bar
      ],
      borderWidth: 1,
      borderSkipped: 'bottom', // Adjust this property to control the spacing
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
};

const myChart = new Chart(ctx, config);


