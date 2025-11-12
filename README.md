# Doolie Task Manager

## 🌐 Live Site
**https://magali-la.github.io/doolie-app/**

## Project Overview
This project was created as part of an assignment with Per Scholas. The Doolie App is a modern task management tool that features:

* 3 status options: In Progress, Completed, and Overdue
* Dynamic data display with DOM manipulation
* Dynamic filtering by task status

## Tech Stack
* Bootstrap
* JavaScript

## Process
* Create base html structure with intuitive id and class names
* Integrate bootstrap components for heightened visual design
* Created DOM elements to dynamically render tasks with add task button event listeners
* Created event listeners for update status dropdown in task tile and status badge update
* Created event listener for changes in selected filter to rerender and display filtered tasks

## How to Test
* Go to the live link and open inspect to check dev alerts in the console
* Verify the alert shows when the user does not fill anything or has one input field missing before submission
* Create dummy tasks and test they are displaying in the list
* Verify that changing the status shows the badge changes in both regular view and filtered view 
* Verify that the filters correctly display tasks with only that status

## Reflections
This project tested knowledge of array methods and using advanced DOM manipulation tactics to make a dynamic page. One of the issues I faced was determining which variables should be globally scoped and moved the variables that stored elements that persist in the html file (the add task button, the badge). While I was working on the filtering logic, i realized I would have to create a global function to display the data, but it became a bit complicated to imagine refactoring the project with so many locally scoped elements that only existed in the DOM or in my add task button event listener. Another challenge I faced while copying the task tile creation logic into my filter task event listener, was forgetting to change the inner HTML for the task tile to reflect the parameter in the for..of loop I used instead of the object variable I created in the add task event listener for the app's base task array.

In future iterations, I would add local storage to keep user's data, implement a delete task function, and use React in order to use useState and useEffect to dynamically update the filtered list when the status is updated in that view and is detected in task so that the user does not have to click on another filter for the changes to reflect.