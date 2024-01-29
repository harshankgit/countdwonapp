const enddate = "30 jan 2025 12:00 PM";
document.getElementById("date").innerText = enddate;

function CLOCK() {
  let input = document.querySelectorAll("input");
  let end = new Date(enddate);
  let now = new Date();

  let diff = (end - now) / 1000;
  if (diff < 0) {
    return;
  }

  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor(diff / 3600) % 24;
  input[2].value = Math.floor(diff / 60) % 60;
  input[3].value = Math.floor(diff) % 60;
}
CLOCK();
setInterval(() => {
  CLOCK();
}, 1000);
