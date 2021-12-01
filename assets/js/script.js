// display current day at top of page
$('#currentDay').html(moment().format("dddd, MMMM DD, YYYY"));

    // add time blocks to planner with times from 8am to 5pm 
function addTimeBlockss() {

}

// retrieve saved items if they exist; otherwise create empty array
function loadTasks() {
    var plannerTasks = JSON.parse(localStorage.getItem("planner-tasks")) || [];

    // add to planner
    for (task in plannerTasks) {
        // TODO: add to correct time
    }
}

// save task to localStorage when save btn pressed
function saveTask() {
// retrieve saved items if they exist; otherwise create empty array
    var plannerTasks = JSON.parse(localStorage.getItem("planner-tasks")) || [];

    var newTask = ["", ""]; //TODO fix this
    plannerTasks.push(newTask);
    // convert to string and store in localStorage
    localStorage.setItem("planner-tasks", JSON.stringify(plannerTasks));
};

// $(this.click(function () {
//     alert($(this).attr('setid'));
// }))

// // Event Handlers
// $(".fa-save").click(saveTask);


// planner-tasks
// ["time", "task"]
// ["9": "do something here"]
// ["13": "another item"]