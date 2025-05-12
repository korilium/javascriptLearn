

// Automatically run the start method when the page loads
window.addEventListener("DOMContentLoaded", function () {
    tutorial.start();
    Home.Home();
    projects.domListener(); // Initialize the projects module

});



var tutorial = {

    start: function () {
        const tutorialButton = document.getElementById('TutorialButton');
        tutorialButton.addEventListener('click', function () {
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
               <button class="button" id="addTask">Add Task</button>
               <button class="button" id="deleteTask">Delete Task</button>
               <button class="button" id="editTask">Edit Task</button>
               <button class="button" id="clearTask">Clear Task</button>
               <button class="button" id="deleteProject">Delete Project</button>
            `;

            projectList.appendChild(listItem);
        }, 1000);
    }
}

var Home = {
    Home: function () {
        const projectForm = document.getElementById('projectForm');
        const homeButton = document.getElementById('HomeButton');
        homeButton.addEventListener('click', function () {
            const projectList = document.getElementById('projects');
            projectList.innerHTML = "";
            const listItem = document.createElement('div');
            listItem.className = 'project';
            listItem.innerHTML =
                `<div id="description">
                <h3>Description</h3>
                <p>This is a simple ToDo list application.</p>
                <p>It allows you to add, remove, and manage tasks.</p>
                <p>Tasks can be marked as completed.</p>
                <p>Tasks can be organized by priority or due date.</p>
            </div>
            <div id="Tasks">
                <h3>Tasks</h3>
                <p>Use the search bar to quickly find tasks.</p>
                <p>Organize tasks by priority or due date.</p>
                <p>Regularly review and update your task list.</p>
            </div>
            `;

            projectList.appendChild(listItem);
        }, 1000);
    }
}

var projects = {

    domListener:
        function domListener() {
                document.getElementById('addFormProjectButton').addEventListener('click', function () {
                    projects.addForm();
                });
        },

    addForm:
        function addProject(projectName) {
            const projectList = document.getElementById('projectList');
            const modal = document.createElement('div');
            modal.id = 'ProjectModal';
            modal.style.position = 'fixed';
            modal.style.top = '50%';
            modal.style.left = '50%';
            modal.style.transform = 'translate(-50%, -50%)';
            modal.style.backgroundColor = 'white';
            modal.style.padding = '30px';
            modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
            modal.style.zIndex = '1000';
            modal.style.width = '400px';
            modal.style.height = '600px';
            modal.innerHTML = `
                <h2>Add Project</h2>
                <form id="projectForm">
                <fieldset>
                    <label for="projectName"><b>Name:</b></label>
                    <input type="text" id="projectName" required>
                    <label for="projectDescription"><b>Description:</b></label>
                    <input type="text" id="projectDescription" required>
                    <label for="projectStatus"><b>Status:</b></label>
                    <select id="projectStatus">
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                        <option value="on hold">On Hold</option>
                    </select>
                    <label for="projectDueDate"><b>Due Date:</b></label>
                    <input type="date" id="projectDueDate" required>
                    <button class="button" id="addProjectButton">Add</button>
                    <button class="button" id="cancelButton">Cancel</button>
                </fieldset>
                </form>
                
            `;
            document.body.appendChild(modal);
            // const addProjectButton = document.getElementById('addProjectButton');
            // addProjectButton.addEventListener('click', function () {
            //     const projectName = document.getElementById('projectName').value;
            //     if (projectName) {
            //         projects.add(projectName);
            //         document.body.removeChild(modal);
            //     }
            // });
                document.getElementById('addProjectButton').addEventListener('click', function () {
                    projects.add();
                });
        },
    add: function addProject(projectName) {
        
        const projectList = document.getElementById('projectForum');
        const projectDescription = document.getElementById('projectDescription').value;
        const projectStatus = document.getElementById('projectStatus').value;
        const projectDueDate = document.getElementById('projectDueDate').value;

        const project = {
            name: projectName,
            description: projectDescription,
            status: projectStatus,
            dueDate: projectDueDate
        };

        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = project.name;
        button.addEventListener('click', function () {
            projects.remove(project.name);
        });

        const listItem = document.createElement('div');
        listItem.className = 'project';
        listItem.textContent = projectName;
        projectList.appendChild(listItem);
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








// var taskList = {

//     add:
//         function addTask(taskText) {
//             const taskList = document.getElementById('taskList');
//             const listItem = document.createElement('li');
//             listItem.textContent = taskText;
//             taskList.appendChild(listItem);
//             const deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             deleteButton.addEventListener('click', function () {
//                 taskList.removeChild(listItem);
//             });
//             listItem.appendChild(deleteButton);
//             const editButton = document.createElement('button');
//             editButton.textContent = 'Edit';
//             editButton.addEventListener('click', function () {
//                 const newTaskText = prompt('Edit task:', taskText);
//                 if (newTaskText) {
//                     listItem.textContent = newTaskText;
//                 }
//             });
//             listItem.appendChild(editButton);

//         },

//     remove:
//         function removeTask(taskText) {
//             const taskList = document.getElementById('taskList');
//             const listItem = Array.from(taskList.children).find(item => item.textContent.includes(taskText));
//             if (listItem) {
//                 taskList.removeChild(listItem);
//             }
//         },
//     edit:
//         function editTask(oldTaskText, newTaskText) {
//             const taskList = document.getElementById('taskList');
//             const listItem = Array.from(taskList.children).find(item => item.textContent.includes(oldTaskText));
//             if (listItem) {
//                 listItem.textContent = newTaskText;
//             }
//         },
//     clear:
//         function clearTasks() {
//             const taskList = document.getElementById('taskList');
//             while (taskList.firstChild) {
//                 taskList.removeChild(taskList.firstChild);
//             }
//         },
// }