const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

addBtn.addEventListener("click", () => {
    const inputText = todoInput.value.trim();
    if (inputText === "") {
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
      ${inputText}
      <button class="deleteBtn">Delete</button>
    `;
    todoList.appendChild(li);

    li.querySelector('.deleteBtn').addEventListener('click', () => {
        li.remove();
    });

    todoInput.value = '';
});