const initialTasks = [
    {
      id: 1,
      title: "Launch Epic Career",
      description: "Create a killer Resume",
      status: "todo",
    },
    {
      id: 2,
      title: "Master JavaScript",
      description: "Get comfortable with the fundamentals",
      status: "doing",
    },
    {
      id: 3,
      title: "Contribute to Open Source Projects",
      description:
        "Gain practical experience and collaborate with others in the software development community",
      status: "done",
    },
  ];
  
  let tasks = [...initialTasks];

function addNewTasks() {
  let addTask = 0;
  const maxTasks = 3;

  
  while (addTask < maxTasks) {
    const wantsToAdd = confirm("Add a new task?");
    if (!wantsToAdd) {
      break;
    }

  
    const title = prompt("Enter the task title:");
    const description = prompt("Enter the task description:");
    const status = prompt("Enter the task status (todo, doing, or done):");

    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      status: status.toLowerCase()
    };

 
    tasks.push(newTask);
    addTask++;
  }

  if (addTask === maxTasks) {
    alert("You have reached the maximum number of tasks you can add.");
  }
}


function getDoneTasks() {
  return tasks.filter(task => task.status === "done");
}

window.onload = function () {
    addNewTasks();
  
    console.log("All tasks:", tasks);
  
    
    console.log("Completed tasks:", getDoneTasks());
  };