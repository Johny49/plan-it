// display current day at top of page
$("#currentDay").html(moment().format("dddd, MMMM DD, YYYY"));

    // add time blocks to planner with times from 8am to 5pm 
function addTimeBlocks() {
    for (var i = 8; i <= 17; i++) {
        // format time for each section
        var time = moment(i, "HH").format("h A");
        $(".container").append(`<section class='row time-block'>${time}</section>`);
        $(".container").append(`<div class='col col-md-1 ${i}'></div>`);
        $(".container").append("<textarea class='col col-md-10 description'></textarea>");        
        $(".container").append(`<button class='col col-md-1 btn saveBtn' id='${i}'></button>`);        
        $(`#${i}`).append("<i class='row time-block;'></i>");
    }
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

addTimeBlocks();

// $(this.click(function () {
//     alert($(this).attr('setid'));
// }))

// // Event Handlers
// $(".fa-save").click(saveTask);
