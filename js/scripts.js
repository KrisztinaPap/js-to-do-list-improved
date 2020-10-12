

// Declare variables
const addTaskForm = document.getElementById( "add-task-form" );
const addTaskButton = document.getElementById( "add-task-button" );
const clearListButton = document.getElementById( "clear-completed-button" );
const pendingTaskArea = document.getElementById( "pending-task-list-area" );
const activeTaskArea = document.getElementById( "active-task-list-area" );
const completedTaskArea = document.getElementById( "completed-task-list-area" );
const interestingFactsArea = document.getElementById( "interesting-facts-area" );
const createdDate = "";
let startedDate = "";
let completedDate = "";

// Event listener on add button
addTaskButton.addEventListener( "click", addTask );

// Event listener on add button
clearListButton.addEventListener( "click", clearList );

//      addTask()
function addTask( event ) {
    event.preventDefault();
    const userInput = document.getElementById( "taskName" ).value.trim();
    const newLI = document.createElement( "LI" );
  
    if ( userInput !== "" )
    {
      // Add text to li
      const newTextContent = document.createElement( "SPAN" );
      newTextContent.textContent = userInput;
      newTextContent.classList.add( "LIText" );
      newLI.appendChild( newTextContent );

      // Add "start" button
      const newStartButton = document.createElement( "BUTTON" );
      newStartButton.textContent = "Start";
      newStartButton.classList.add( "startButton", "yellow", "button" );
      newStartButton.addEventListener( "click", startTask );
      newLI.append( newStartButton );

      // Add "delete" button
      const newDeleteButton = document.createElement( "BUTTON" );
      newDeleteButton.textContent = "Delete";
      newDeleteButton.classList.add( "deleteButton", "red", "button" );
      newDeleteButton.addEventListener( "click", deleteTask );
      newLI.append( newDeleteButton );

      pendingTaskArea.appendChild( newLI );
  }

}; 

//      startTask()
function startTask( event ) {
    activeTaskArea.appendChild( this.parentElement );
    //const thisStartButton = document.querySelector("");
    
    // Add IsCompleted checkbox
    const newCheckbox = document.createElement( "INPUT");
    newCheckbox.type = "checkbox";
    
    newCheckbox.addEventListener( "change", completeTask );
    this.parentElement.prepend( newCheckbox );
    this.remove();
}

//      completeTask()
function completeTask( event ) {
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
function clearList() {
    let allChecked = document.querySelectorAll("ul li");
    for ( let i = 0; i < allChecked.length; i++ ) {
        if ( allChecked[i].firstChild.checked ) {
            allChecked[i].remove();
        }
    }
}

//    Reset To-Do App
function resetApp() {
  let allTasks = document.querySelectorAll("li");
  for ( let i = 0; i < allTasks.length; i++ ){
    allTasks[i].remove();
  }
}