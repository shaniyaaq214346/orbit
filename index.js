// index.js

// Orbit - A versatile platform designed to streamline task management and enhance collaboration for individuals and teams.

// Orbit functionality
class Orbit {
    constructor() {
        this.tasks = [];
    }

    // Method to add a new task
    addTask(taskName, project, assignee, deadline) {
        const task = {
            name: taskName,
            project: project,
            assignee: assignee,
            deadline: deadline
        };
        this.tasks.push(task);
    }

    // Method to display all tasks
    displayTasks() {
        console.log("Tasks:");
        this.tasks.forEach(task => {
            console.log(`- ${task.name}`);
            console.log(`  Project: ${task.project}`);
            console.log(`  Assignee: ${task.assignee}`);
            console.log(`  Deadline: ${task.deadline}`);
        });
    }
}

// Example usage:
const orbitApp = new Orbit();

// Adding tasks
orbitApp.addTask("Develop Homepage", "Website Redesign", "@developer1", "March 31, 2024");
orbitApp.addTask("Review Marketing Plan", "Marketing Strategy", "@marketing-team", "April 15, 2024");

// Displaying tasks
orbitApp.displayTasks();
