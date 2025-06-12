const btn = document.getElementById("eventBtn")
const countDisplay = document.getElementById("count");

let count = 0;

btn.addEventListener("click", function () {
    count += 1;
    countDisplay.textContent = count;
});