

// Automatically run the start method when the page loads
document.addEventListener("DOMContentLoaded", function () {
    projects.start();
});

var projects = {

    start: function () {
        const projectForm = document.getElementById('sidebar');
        const initialProjButton = document.createElement('button');
        initialProjButton.textContent = 'tutorial';
        projectForm.appendChild(initialProjButton);
        initialProjButton.addEventListener('click', function () {
            const projectList = document.getElementById('projects');
            projectList.innerHTML = "";
            const listItem = document.createElement('div');
            listItem.className = 'project';
            listItem.innerHTML = 
                `<h1>tutorial</h1>
                <p><b>description:</b>this is a tutorial project</p>
               <p><b>status:</b>active</p>
               <p><b>due date:</b>2023-10-01</p>

               task list:
               <ul id="taskList">
                   <li>task 1</li>
                   <li>task 2</li>
                   <li>task 3</li>
               </ul>
               <button id="addTask">Add Task</button>
               <button id="deleteTask">Delete Task</button>
               <button id="editTask">Edit Task</button>
               <button id="clearTask">Clear Task</button>
               <button id="deleteProject">Delete Project</button>
            `;

            projectList.appendChild(listItem);
        }, 1000);


        projectForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const projectInput = document.getElementById('projectInput');
            const projectName = projectInput.value.trim();
            if (projectName) {
                addProject(projectName);
                projectInput.value = '';
            }
        });
    },

    add:
        function addProject(projectName) {
            const projectList = document.getElementById('projectList');
            const listItem = document.createElement('li');
            listItem.textContent = projectName;
            projectList.appendChild(listItem);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                projectList.removeChild(listItem);
            });
            listItem.appendChild(deleteButton);
        },
    remove:
        function removeProject(projectName) {
            const projectList = document.getElementById('projectList');
            const listItem = Array.from(projectList.children).find(item => item.textContent.includes(projectName));
            if (listItem) {
                projectList.removeChild(listItem);
            }
        },
    clear:
        function clearProjects() {
            const projectList = document.getElementById('projectList');
            while (projectList.firstChild) {
                projectList.removeChild(projectList.firstChild);
            }
        },
}


var taskList = {

    add:
        function addTask(taskText) {
            const taskList = document.getElementById('taskList');
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(listItem);
            });
            listItem.appendChild(deleteButton);
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', function () {
                const newTaskText = prompt('Edit task:', taskText);
                if (newTaskText) {
                    listItem.textContent = newTaskText;
                }
            });
            listItem.appendChild(editButton);

        },
    
    remove:
        function removeTask(taskText) {
            const taskList = document.getElementById('taskList');
            const listItem = Array.from(taskList.children).find(item => item.textContent.includes(taskText));
            if (listItem) {
                taskList.removeChild(listItem);
            }
        },
    edit:
        function editTask(oldTaskText, newTaskText) {
            const taskList = document.getElementById('taskList');
            const listItem = Array.from(taskList.children).find(item => item.textContent.includes(oldTaskText));
            if (listItem) {
                listItem.textContent = newTaskText;
            }
        },
    clear:
        function clearTasks() {
            const taskList = document.getElementById('taskList');
            while (taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }
        },
    }