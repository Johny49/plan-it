// display current day at top of page
function setCurrentDate() {
    $("#currentDay").html(moment().format("dddd, MMMM DD, YYYY"));
}

// add time blocks to planner with times from 8am to 5pm 
function addElements() {
    var today = moment();

    for (var i = 8; i <= 17; i++) {
        // format time for each section
        var time = moment(i, "HH").format("h A");
        // append elements
        $(".container").append(`<section class='row time-block' id='row${i}'></section>`);
        $(`#row${i}`).append(`<div class='col col-md-1 hour${i}'>${time}</div>`);

        // add textarea element with styling class based on time of day
        if (i > today.format("HH")) {
            $(`#row${i}`).append("<textarea class='col col-md-10 description future' ></textarea>");  
        } else if (i == today.format("HH")) {
            $(`#row${i}`).append("<textarea class='col col-md-10 description present'></textarea>");  
        } else {
            $(`#row${i}`).append("<textarea class='col col-md-10 description past'></textarea>");  
        }
      
        $(`#row${i}`).append(`<button class='col col-md-1 btn saveBtn' id='${i}'></button>`);        
        $(`#${i}`).append("<i class='fas fa-save'></i>");
    }
}

// configure page
function pageInit() {
    setCurrentDate();
    addElements();
    loadTasks();
}

// retrieve saved items if they exist; otherwise create empty array
function loadTasks() {
    var plannerTasks = JSON.parse(localStorage.getItem("planner-tasks")) || [];
    // add to planner
    for (task of plannerTasks) {

        // var textArea = $(`#row${hour}`).children("textarea");
        // textArea.val(task.task);
        $(`#row${task.hour}`).children("textarea").val(task.task);
    }
}

// save task to localStorage when save btn pressed
$(".container").on("click", "button", function() {
// retrieve saved items if they exist; otherwise create empty array
var plannerTasks = JSON.parse(localStorage.getItem("planner-tasks")) || [];

var newTask = {
    hour: this.id, 
    task: $(`#row${this.id}`).children("textarea").val()
};

plannerTasks.push(newTask);
// convert to string and store in localStorage
localStorage.setItem("planner-tasks", JSON.stringify(plannerTasks));
});

// configure page
pageInit();