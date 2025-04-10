const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-btn");
const taskList = document.querySelector(".task-list");

addButton.addEventListener("click", function () {
    const taskText = inputBox.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    } else {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `<span class="task-text">${taskText}</span>` + "<span class='delete-btn'>\u00d7<span>";
        taskList.appendChild(taskItem);
        inputBox.value = "";
        saveData();
    }
});

taskList.addEventListener("click", function (e) {
    const li = e.target.closest("li");
    if (e.target.classList.contains("delete-btn")) {
        li.remove();
    } else {
        li.classList.toggle("changeImg");
        const taskText = li.querySelector(".task-text");
        if (taskText) {
            taskText.classList.toggle("checked");
        }
    }
    saveData();
}, false);

function saveData() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("data");
}

showTask();