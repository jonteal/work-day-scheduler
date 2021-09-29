var saveButton = document.getElementById("saveBtn");

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// var currentHour = Number(currentDay.format('H'));

// var comment = document.getElementById
classUpdater();


setInterval(function () {
    currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));
    currentHour = moment().hour();
    classUpdater();
}, 1000);
// Event listener to save the appointments to the schedule

var currentHour = moment().hour();


function classUpdater() {
// Function to make the current hour red, any hours that have passed the color gray,
// and future hours green.

if(currentHour === 9){
    // 
    $("#0").addClass("present");
} else if(currentHour > 9){
    $('#0').addClass("past");
};

if(currentHour === 10){
    $('#1').css("background-color", "#FF0000"); 
} else if(currentHour < 10){
    $('#1').css("background-color", "#00FF00");
};

if(currentHour === 11){
    $('#2').css("background-color", "#FF0000"); 
} else if(currentHour < 11){
    $('#2').css("background-color", "#00FF00");
};

if(currentHour === 12){
    $('#3').css("background-color", "#FF0000"); 
} else if(currentHour < 12){
    $('#3').css("background-color", "#00FF00");
};

if(currentHour === 13){
    $('#4').css("background-color", "#FF0000"); 
} else if(currentHour < 13){
    $('#4').css("background-color", "#00FF00");
};

if(currentHour === 14){
    $('#5').css("background-color", "#FF0000"); 
} else if(currentHour < 14){
    $('#5').css("background-color", "#00FF00");
};

if(currentHour === 15){
    $('#6').css("background-color", "#FF0000"); 
} else if(currentHour < 15){
    $('#6').css("background-color", "#00FF00");
};

if(currentHour === 16){
    $('#7').css("background-color", "#FF0000"); 
} else if(currentHour < 16){
    $('#7').css("background-color", "#00FF00");
};

if(currentHour === 17){
    $('#8').css("background-color", "#FF0000"); 
} else if(currentHour < 17){
    $('#8').css("background-color", "#00FF00");
};

}


// Function to use localStorage to set appointments that will not disappear when the page is 
// reloaded.
// function savePlan() {
//     var plan = {
//         comment:comment.value.trim()
//     };
//     localStorage.setItem("plan", JSON.stringify(plan));


