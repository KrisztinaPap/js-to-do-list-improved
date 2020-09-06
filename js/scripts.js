

// Declare variables
const addTaskForm = document.getElementById( "add-task-form" );
const addTaskButton = document.getElementById( "add-task-button" );
const pendingTaskArea = document.getElementById( "pending-task-list-area" );
const activeTaskArea = document.getElementById( "active-task-list-area" );
const completedTaskArea = document.getElementById( "completed-task-list-area" );
const interestingFactsArea = document.getElementById( "interesting-facts-area" );
const deleteButtons = document.querySelectorAll( ".deleteButton" );
const createdDate = "";
let startedDate = "";
let completedDate = "";

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
    newStartButton.classList.add( "startButton" );
    newStartButton.addEventListener( "click", startTask );
    newLI.append( newStartButton );

    // Add "delete" button
    const newDeleteButton = document.createElement( "BUTTON" );
    newDeleteButton.textContent = "Delete";
    newDeleteButton.classList.add( "deleteButton" );
    newDeleteButton.addEventListener( "click", deleteTask );
    newLI.append( newDeleteButton );

    pendingTaskArea.appendChild( newLI );
}; 

//      startTask()
function startTask( event ) {
  activeTaskArea.appendChild( this.parentElement );

  // Add IsCompleted checkbox
  const newCheckbox = document.createElement( "INPUT");
  newCheckbox.type = "checkbox";
  
  newCheckbox.addEventListener( "change", completeTask );
  this.parentElement.prepend( newCheckbox );
}

//      completeTask()
function completeTask( event ) {
  console.log( this.parentElement.checked );
  if ( this.checked )
    {
      completedTaskArea.appendChild( this.parentElement ); 
    } 
  else {
      activeTaskArea.appendChild( this.parentElement );
    }
}


//      deleteTask()
function deleteTask( event ) {
  this.parentElement.remove();
}


//      clearList()