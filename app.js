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

        // give alert if any of the fields are empty
        if (taskInput === '' || categoryInput === '' || deadlineInput === '' || statusInput == ''){
            alert("Fill in all fields");
            return console.log('User must input all fields');
        }

        // function to add taskObj created into the tasks array logging each entry
        function addTasks(task){
            tasks.push(task);
            console.log(tasks);
        }
        addTasks(taskObj);

        // function to get badge color for the status section of the task tile
        function getBadgeColor(status) {
            switch(status){
                case 'Completed':
                    return 'text-bg-success';
                case 'Overdue':
                    return 'text-bg-danger';
                default:
                    return 'text-bg-warning';
            }
        }
        let badgeColor = getBadgeColor(taskObj.stat);

        // create badge element to manipulate it
        let badgeEl = document.createElement('span');
        // add bootstrap classes for the badge
        badgeEl.classList.add("badge", "rounded-pill", badgeColor);
        badgeEl.innerHTML = taskObj.stat;

        // create the list item for the task list
        let taskListItemEl = document.createElement("li");
        // add class to li's for bootstrap styling
        taskListItemEl.classList.add('list-group-item');
        // create a div to put in the li
        let taskListItemDivEl = document.createElement("div");
        taskListItemDivEl.innerHTML = `
            <div class="row">
                <div class="col">${taskObj.task}</div>
                <div class="col">${taskObj.cat}</div>
                <div class="col">${taskObj.date}</div>
                <div class="col" id="badgeListItem"></div>
                <div class="col" id="updateListItem"></div>
            </div>`
        
        // adpend the column for the badge with the badge element
        let badgeListItem = taskListItemDivEl.querySelector('#badgeListItem');
        badgeListItem.appendChild(badgeEl);        

        // create a div to hold the dropdown 
        let updateStatusDiv = document.createElement('div');        
        updateStatusDiv.innerHTML = `
            <select id="updateStatus" class="form-select">
                <option value="">Update Status</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
        `;

        // inject the updateStatusDiv in the update column in the task tile
        let updateListItem = taskListItemDivEl.querySelector('#updateListItem');
        updateListItem.appendChild(updateStatusDiv);

        // add event listener for the update status column
        updateStatusDiv.addEventListener("change", (event) =>{
            // target the dropdown and find the value user changed
            if (event.target.id === 'updateStatus'){
                let newStatus = event.target.value;

                // update the taskObj.stat to the value selected
                taskObj.stat = newStatus;
                // call the badgeColor function with this new status
                badgeColor = getBadgeColor(newStatus);

                // update badgeEl with new classes and inner text with the status they chose
                badgeEl.innerText = newStatus;
                // remove any of the classes which style the badge
                badgeEl.classList.remove("text-bg-success", "text-bg-warning", "text-bg-danger");
                // add the new badge color based on what was clicked
                badgeEl.classList.add(badgeColor);
            }
        })

        // append the task List with the list item in a column layout
        taskListItemEl.appendChild(taskListItemDivEl);
        taskListEl.appendChild(taskListItemEl);
    });

    // add event listener for clicks on the btn group / filters div
    let filterGroupEl = document.getElementById('filterButtonGroup');

    filterGroupEl.addEventListener("change", (event) => {
        console.log(event.target); 
        // target the actual input elements by bootstrap class 
        if (event.target.classList.contains('btn-check')) {
            // define variable for the value of the radio button selected
            let filterId = event.target.value;
            console.log(`Filter clicked: '${filterId}'`);

            // create a function to take the status filter button and filtering tasks into a new array which will be used to display tasks in the ul
            function displayFilteredTasks(filterButtonValue){ 
                // create a filtered empty array
                let filteredTasks = [];

                // filter the task array with all tasks in the current session using the filterId of the button clicked
                if (filterId === 'all'){
                    filteredTasks = tasks;
                    console.log(filteredTasks)
                } else {
                    filteredTasks = tasks.filter(element => element.stat === filterId);
                    console.log(filteredTasks);
                }; 
            };

            displayFilteredTasks(filterId);
        }
    });

});