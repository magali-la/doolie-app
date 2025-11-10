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

    });
});