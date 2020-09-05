// Declare variables
const addTaskForm = document.getElementById( "add-task-form" );
const addTaskButton = document.getElementById( "add-task-button" );
const pendingTaskArea = document.getElementById( "pending-task-list-area" );
const activeTaskArea = document.getElementById( "active-task-list-area" );
const completedTaskArea = document.getElementById( "completed-task-list-area" );
const interestingFactsArea = document.getElementById( "interesting-facts-area" );

// Event listener on add button
addTaskButton.addEventListener( "click", addTask );

//      addTask()
function addTask( event ) {
    event.preventDefault();
    const userInput = document.getElementById( "taskName" ).value;
    const newLI = document.createElement( "LI" );
    newLI.textContent = userInput;

    // Add "start" button
    const newStartButton = document.createElement( "BUTTON" );
    newStartButton.textContent = "Start";
    newLI.append( newStartButton );

    // Add "delete" button
    const newDeleteButton = document.createElement( "BUTTON" );
    newDeleteButton.textContent = "Delete";
    newLI.append( newDeleteButton );

    pendingTaskArea.appendChild( newLI );
};

//      startTask()

//      completeTask()

//      deleteTask()

//      clearList()