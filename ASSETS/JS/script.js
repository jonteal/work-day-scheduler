var saveButton = document.getElementById("saveBtn");

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));



setInterval(updateClock, 1000);

// saveButton.addEventListener = ("click", );

var currentHour = Number(currentDay.format('H'));

// Function to use localStorage to set appointments that will not disappear when the page is 
// reloaded.

// Event listener to save the appointments to the schedule

// Function to make the current hour red, any hours that have passed the color gray,
// and future hours green.


if(currentHour === 9){
    $('#0').css("background-color", "#FF0000"); 
} else if(currentHour < 9){
    $('#0').css("background-color", "#00FF00");
};

if(currentHour === 10){
    $('#0').css("background-color", "#FF0000"); 
} else if(currentHour < 10){
    $('#0').css("background-color", "#00FF00");
};

if(currentHour === 11){
    $('#0').css("background-color", "#FF0000"); 
} else if(currentHour < 11){
    $('#0').css("background-color", "#00FF00");
};

if(currentHour === 12){
    $('#0').css("background-color", "#FF0000"); 
} else if(currentHour < 12){
    $('#0').css("background-color", "#00FF00");
};

if(currentHour === 1){
    $('#0').css("background-color", "#FF0000"); 
} else if(currentHour < 1){
    $('#0').css("background-color", "#00FF00");
};

if(currentHour === 2){
    $('#0').css("background-color", "#FF0000"); 
} else if(currentHour < 2){
    $('#0').css("background-color", "#00FF00");
};

if(currentHour === 3){
    $('#0').css("background-color", "#FF0000"); 
} else if(currentHour < 3){
    $('#0').css("background-color", "#00FF00");
};

if(currentHour === 4){
    $('#0').css("background-color", "#FF0000"); 
} else if(currentHour < 4){
    $('#0').css("background-color", "#00FF00");
};

if(currentHour === 5){
    $('#0').css("background-color", "#FF0000"); 
} else if(currentHour < 5){
    $('#0').css("background-color", "#00FF00");
};