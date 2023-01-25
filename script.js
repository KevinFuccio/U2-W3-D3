let timer = document.getElementById("counter");
let count = sessionStorage.getItem("time") || 0;
function counter() {
  setInterval(() => {
    timer.innerHTML = count;
    sessionStorage.setItem("time", count);
    count++;
  }, 1000);
}
window.onload = counter;
