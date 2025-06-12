const btn = document.getElementById("eventBtn")
const container = document.getElementById("container");

let count = 0;

btn.addEventListener("click", function () {
    count += 1;
    const newDiv = document.createElement("div");
    newDiv.className = "box";
    newDiv.textContent = `${count}번째 생성된 div`;
    container.appendChild(newDiv);
});