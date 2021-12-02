// add time blocks to planner with times from 8am to 5pm 
function addElements() {
    // display current day at top of page
    var today = moment();
    $("#currentDay").html(today.format("dddd, MMMM DD, YYYY"));

    for (var i = 8; i <= 17; i++) {
        // format time for each section
        var time = moment(i, "HH").format("h A");
        // append elements
        $(".container").append(`<section class='row time-block'>${time}</section>`);
        $(".container").append(`<div class='col col-md-1 hour${i}'></div>`);

        // style styling class based on time of day
        console.log(i < today.format("HH"));
        if (i > today.format("HH")) {
            $(".container").append("<textarea class='col col-md-10 description future' ></textarea>");  
        } else if (i == today.format("HH")) {
            $(".container").append("<textarea class='col col-md-10 description present'></textarea>");  
        } else {
            $(".container").append("<textarea class='col col-md-10 description past'></textarea>");  
        }
      
        $(".container").append(`<button class='col col-md-1 btn saveBtn' id='${i}'></button>`);        
        $(`#${i}`).append("<i class='fas fa-save'></i>");
    }
}

// retrieve saved items if they exist; otherwise create empty array
function loadTasks() {
    var plannerTasks = JSON.parse(localStorage.getItem("planner-tasks")) || [];
    // add to planner
    for (task in plannerTasks) {
        // TODO: add to correct time
        console.log(task);
    }
}

// save task to localStorage when save btn pressed
$(".container").on("click", "button", function() {
// retrieve saved items if they exist; otherwise create empty array
var plannerTasks = JSON.parse(localStorage.getItem("planner-tasks")) || [];
var hourID = `hour${this.id}`
// var task = $(`#${hourID}`).text()

console.log($(`#${hourID}`).html());
var newTask = [this.id, $(".hourID").text()]; //TODO fix this
plannerTasks.push(newTask);
// convert to string and store in localStorage
localStorage.setItem("planner-tasks", JSON.stringify(plannerTasks));
console.log(newTask);
})

// add time blocks to page
addElements();