window.addEventListener("load", function(){
    let tasks = [];
    let buttonEl = document.getElementById("addTaskButton");

    // add event listener to add an object with the values to the array
    buttonEl.addEventListener("click", function(){
        // define variables for the input fields
        let taskEl = document.getElementById("taskName");
        let taskInput = taskEl.value
        let categoryEl = document.getElementById("category");
        let categoryInput = categoryEl.value;
        let deadlineEl = document.getElementById("deadline");
        let deadlineInput = deadlineEl.value;
        let statusEl = document.getElementById("status");
        let statusInput = statusEl.value;
        let taskListEl = document.getElementById("taskList");

        // define a general task object
        let taskObj = {
            task: taskInput,
            cat: categoryInput,
            date: deadlineInput,
            stat: statusInput
        };

        // add object to array if they are all filled
        if (taskInput === '' || categoryInput === '' || deadlineInput === '' || statusInput == ''){
            alert("Fill in all fields");
            return console.log('User must input all fields');
        }

        // function the taskObj created into the tasks array
        function addTasks(task){
            tasks.push(task);
            console.log(tasks);
        }
        addTasks(taskObj);
        // create the li that will be appended
        let taskListItemEl = document.createElement("li");
        // turn the object's values into a string, apply as inner text
        taskListItemEl.innerText = `Task: ${taskObj.task} | Category: ${taskObj.task} | Deadline: ${taskObj.date} | Status: ${taskObj.stat}`;
        // append the ul with the list item with your input
        taskListEl.appendChild(taskListItemEl);
    });
});