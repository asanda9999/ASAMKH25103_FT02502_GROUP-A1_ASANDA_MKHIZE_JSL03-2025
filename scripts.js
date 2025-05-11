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

  //While loop that checks task added dont exceed maxTasks  and while continue to ask user to add new tasks using confim 
  while (addTask < maxTasks) {
    const wantsToAdd = confirm("Add a new task?");
    if (!wantsToAdd) {
      break;
    }

  //Prompt user for task details
    const title = prompt("Enter the task title:");
    const description = prompt("Enter the task description:");
    const status = prompt("Enter the task status (todo, doing, or done):");
  // Variable to store new added task details
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      status: status.toLowerCase()
    };

 // Push statement to add new task to the tasks array 
    tasks.push(newTask);
    addTask++;
  }
  // If the user has reached the maximum number of tasks, alert them
  if (addTask === maxTasks) {
    alert("You have reached the maximum number of tasks you can add.");
  }
}

// Function to get all tasks with status "done"
function getDoneTasks() {
  return tasks.filter(task => task.status === "done");
}

// windows.onload loads HTML&Css then starts the addNewTasks function
window.onload = function () {
    addNewTasks();
  
    // Display all tasks in the console
    console.log("All tasks:", tasks);
  
    // Display tasks with status "done" in the console
    console.log("Completed tasks:", getDoneTasks());
  };