let taskList = document.getElementById("taskList");

function addTask(event) {
    // Prevent reloading the page
    event.preventDefault();

    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value;

    if (taskText === "") {
        return;
    }

    // Création d'un nouvel élément de liste pour la tâche
    let li = createTaskElement(taskText);

    // Ajout de l'élément de liste à la liste de tâches
    taskList.appendChild(li);

    // Réinitialisation de l'input
    taskInput.value = "";
}

// Fonction pour éditer une tâche
function editTask(task) {
    let taskTextElement = task.firstChild;
    let taskText = taskTextElement.textContent;

    // Demande à l'utilisateur de modifier la tâche
    let newTaskText = prompt("Modifier la tâche : ", taskText);
    if (newTaskText === null || newTaskText === "") {
        return;
    }

    // Mise à jour du texte de la tâche
    taskTextElement.textContent = newTaskText;
}

// Fonction pour supprimer une tâche
function deleteTask(task) {
    // Suppression de l'élément de la liste de tâches
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
