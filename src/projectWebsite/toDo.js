

// Automatically run the start method when the page loads
window.addEventListener("DOMContentLoaded", function () {
    tutorial.start();
    Home.Home();
    projects.domListener(); // Initialize the projects module
    if (!localStorage.getItem('projects')) {
        localStorage.setItem('projects', JSON.stringify([]));
    }

});



var tutorial = {

    start: function () {
        const tutorialButton = document.getElementById('TutorialButton');
        tutorialButton.addEventListener('click', function () {
            const projectList = document.getElementById('projects');
            projectList.innerHTML = "";
            const listItem = document.createElement('div');
            listItem.className = 'project';;
            const project = {
                name: 'tutorial',
                description: 'this is a tutorial project',
                status: 'active',
                dueDate: '2025-10-01',
                tasks: [
                    { name: 'task 1', description: 'this is task 1' },
                    { name: 'task 2', description: 'this is task 2' },
                    { name: 'task 3', description: 'this is task 3' }
                ]
            };
            let projectsArr = JSON.parse(localStorage.getItem('projects')) || [];
            projectsArr.push(project);
            localStorage.setItem('projects', JSON.stringify(projectsArr));
            listItem.innerHTML =
                `<h1>${project.name}</h1>
                <p><b>description:</b>${project.description}</p>
               <p><b>status:</b>${project.status}</p>
               <p><b>due date:</b>${project.dueDate}</p>

               task list:
               <ul id="taskList">
                   <li>${project.tasks[0].name}: ${project.tasks[0].description}</li>
                   <li>${project.tasks[1].name}: ${project.tasks[1].description}</li>
                   <li>${project.tasks[2].name}: ${project.tasks[2].description}</li>
               </ul>
               <button class="button" id="addTask">Add Task</button>
               <button class="button" id="deleteTask">Delete Task</button>
               <button class="button" id="editTask">Edit Task</button>
               <button class="button" id="deleteProject">Delete Project</button>
            `;

            projectList.appendChild(listItem);
            document.getElementById('addTask').addEventListener('click', function () {
                const taskText = prompt('Enter task text:');
                if (taskText) {
                    task.add(taskText);
                }
            });
            document.getElementById('deleteTask').addEventListener('click', function () {
                const taskText = prompt('Enter task text to delete:');
                if (taskText) {
                    const taskList = document.getElementById('taskList');
                    const listItem = Array.from(taskList.children).find(item => item.textContent.includes(taskText));
                    if (listItem) {
                        taskList.removeChild(listItem);
                    } else {
                        alert('Task not found.');
                    }
                }
            });
            document.getElementById('editTask').addEventListener('click', function () {
                const oldTaskText = prompt('Enter task text to edit:');
                if (oldTaskText) {
                    const newTaskText = prompt('Enter new task text:');
                    if (newTaskText) {
                        const taskList = document.getElementById('taskList');
                        const listItem = Array.from(taskList.children).find(item => item.textContent.includes(oldTaskText));
                        if (listItem) {
                            listItem.textContent = newTaskText;
                        } else {
                            alert('Task not found.');
                        }
                    }
                }
            });
            document.getElementById('deleteProject').addEventListener('click', function () {
                const projectName = project.name;
                const projectsArray = JSON.parse(localStorage.getItem('projects')) || [];
                const updatedProjectsArray = projectsArray.filter(p => p.name !== projectName);
                localStorage.setItem('projects', JSON.stringify(updatedProjectsArray));
                const projectList = document.getElementById('projectList');
                const listItem = Array.from(projectList.children).find(item => item.textContent.includes(projectName));
                if (listItem) {
                    projectList.removeChild(listItem);
                }
            });
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
};

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
                    <button class="button" type="button" id="submitProjectButton">Add</button>
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
            document.getElementById('submitProjectButton').addEventListener('click', function () {
                projects.add();
            });
            document.getElementById('cancelButton').addEventListener('click', function () {
                const modal = document.getElementById('ProjectModal');
                if (modal) {
                    document.body.removeChild(modal);
                }
            });
        },
    add: function addProject() {

        const projectList = document.getElementById('projectList');
        const projectName = document.getElementById('projectName').value;
        const projectDescription = document.getElementById('projectDescription').value;
        const projectStatus = document.getElementById('projectStatus').value;
        const projectDueDate = document.getElementById('projectDueDate').value;

        const project = {
            name: projectName,
            description: projectDescription,
            status: projectStatus,
            dueDate: projectDueDate
        };

        let projectsArray = JSON.parse(localStorage.getItem('projects')) || [];
        projectsArray.push(project);
        localStorage.setItem('projects', JSON.stringify(projectsArray));

        const button = document.createElement('button');
        button.className = 'button';
        button.textContent = project.name;
        button.addEventListener('click', function () {
            projects.load(project.name);
        });



        const listItem = document.createElement('div');
        listItem.className = 'project';
        listItem.textContent = button.textContent;
        projectList.appendChild(button);
        // remove the modal after adding the project
        const modal = document.getElementById('ProjectModal');
        if (modal) {
            document.body.removeChild(modal);
        }
    },

    load: function loadProject(projectName) {
        const projectList = document.getElementById('projects');
        projectList.innerHTML = "";
        const projectsArray = JSON.parse(localStorage.getItem('projects')) || [];
        const project = projectsArray.find(p => p.name === projectName);
        if (project) {
            const listItem = document.createElement('div');
            listItem.innerHTML = `
                <h1>${project.name}</h1>
                <p><b>description:</b>${project.description}</p>
                <p><b>status:</b>${project.status}</p>
                <p><b>due date:</b>${project.dueDate}</p>

                <h2>Task List:</h2>
                <ul id="taskList">
                </ul>
                <button class="button" id="addTask">Add Task</button>
                <button class="button" id="deleteTask">Delete Task</button>
                <button class="button" id="editTask">Edit Task</button>
                <button class="button" id="deleteProject">Delete Project</button>
            `;
            projectList.appendChild(listItem);
            document.getElementById('addTask').addEventListener('click', function () {
                const taskText = prompt('Enter task text:');
                if (taskText) {
                    task.add(taskText);
                }
            });
            document.getElementById('deleteTask').addEventListener('click', function () {
                const taskText = prompt('Enter task text to delete:');
                if (taskText) {
                    const taskList = document.getElementById('taskList');
                    const listItem = Array.from(taskList.children).find(item => item.textContent.includes(taskText));
                    if (listItem) {
                        taskList.removeChild(listItem);
                    } else {
                        alert('Task not found.');
                    }
                }
            });
            document.getElementById('editTask').addEventListener('click', function () {
                const oldTaskText = prompt('Enter task text to edit:');
                if (oldTaskText) {
                    const newTaskText = prompt('Enter new task text:');
                    if (newTaskText) {
                        const taskList = document.getElementById('taskList');
                        const listItem = Array.from(taskList.children).find(item => item.textContent.includes(oldTaskText));
                        if (listItem) {
                            listItem.textContent = newTaskText;
                        } else {
                            alert('Task not found.');
                        }
                    }
                }
            });
            document.getElementById('deleteProject').addEventListener('click', function () {
                const projectName = project.name;
                const projectsArray = JSON.parse(localStorage.getItem('projects')) || [];
                const updatedProjectsArray = projectsArray.filter(p => p.name !== projectName);
                localStorage.setItem('projects', JSON.stringify(updatedProjectsArray));
                const projectList = document.getElementById('projectList');
                const listItem = Array.from(projectList.children).find(item => item.textContent.includes(projectName));
                if (listItem) {
                    projectList.removeChild(listItem);
                }
            })
        }
    },

    remove: function removeProject(projectName) {
        const projectList = document.getElementById('projectList');
        const listItem = Array.from(projectList.children).find(item => item.textContent.includes(projectName));
        if (listItem) {
            projectList.removeChild(listItem);
        }
    },
}







var task = {
    add: function addTask(taskText) {
        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        taskList.appendChild(listItem);
    }
};



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