let taskList = document.getElementById("taskList");

function addTask(event) {
    // Prevent reloading the page
    event.preventDefault();

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    let li = createTaskElement(taskText);

    // Add an element on the task list
    taskList.appendChild(li);

    // Reset input
    taskInput.value = "";
}


function editTask(task) {
    let taskTextElement = task.firstChild;
    let taskText = taskTextElement.textContent;

    // Asking user for editing the task
    let newTaskText = prompt("Modifier la tâche : ", taskText);
    if (newTaskText === null || newTaskText === "") {
        return;
    }

    // Task update
    taskTextElement.textContent = newTaskText;
}

// Fonction pour supprimer une tâche
function deleteTask(task) {
    taskList.removeChild(task);
}

// Function dedicated to create a task element
function createTaskElement(taskText) {
    let li = document.createElement("li");
    li.innerHTML = taskText;

    let editButton = document.createElement("button");
    editButton.innerHTML =
        '<ion-icon name="pencil-outline" class="modify">Editer</ion-icon>';

    editButton.onclick = function () {
        editTask(li);
    };

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML =
        '<ion-icon name="trash-outline" class="delete">Supprimer</ion-icon>';

    deleteButton.onclick = function () {
        deleteTask(li);
    };

    li.appendChild(editButton);
    li.appendChild(deleteButton);

    return li;
}
