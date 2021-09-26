var saveButton = document.getElementById("saveBtn");
var currentTime = moment();

function updateTime() {
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
}

setInterval(updateClock, 1000);

saveButton.addEventListener = ("click", );

var currentHour = Number(currentTime.format('H'));

// Function to use localStorage to set appointments that will not disappear when the page is 
// reloaded.

// Event listener to save the appointments to the schedule

// Function to make the current hour red, any hours that have passed the color gray,
// and future hours green.

// Function to display today's date at the top of the page