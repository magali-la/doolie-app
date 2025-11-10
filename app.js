window.addEventListener("load", function(){
    let tasks = [];
    let buttonEl = document.getElementById("addTaskButton");

    // add event listener to add an object with the values to the array
    buttonEl.addEventListener("click", function(){
        // define variables for the input fields
        let taskEl = document.getElementById("taskName");
        let taskName = taskEl.value
        let categoryEl = document.getElementById("category");
        let category = categoryEl.value;
        let deadlineEl = document.getElementById("deadline");
        let deadline = deadlineEl.value;
        let statusEl = document.getElementById("status");
        let status = statusEl.value;
        // add object to array if they are all filled
        
    });
});