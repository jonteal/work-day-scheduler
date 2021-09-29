var saveButton = $(".saveBtn");

var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

var currentHour = Number(currentDay.format('H'));

// var comment = document.getElementById
// classUpdater();


setInterval(function () {
    currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY"));
    // currentHour = moment().hour();
    // classUpdater();
}, 1000);
// Event listener to save the appointments to the schedule



// function classUpdater() {
// Function to make the current hour red, any hours that have passed the color gray,
// and future hours green.

if(currentHour === 9){   
    $("#0").addClass("present");
} else if(currentHour > 9){
    $("#0").addClass("past");
};

if(currentHour === 10){
    $('#1').addClass("present"); 
} else if(currentHour > 10){
    $('#1').addClass("past");
};

if(currentHour === 11){
    $('#2').addClass("present"); 
} else if(currentHour > 11){
    $('#2').addClass("past");
};

if(currentHour === 12){
    $('#3').addClass("present"); 
} else if(currentHour > 12){
    $('#3').addClass("past");
};

if(currentHour === 13){
    $('#4').addClass("present"); 
} else if(currentHour > 13){
    $('#4').addClass("past");
};

if(currentHour === 14){
    $('#5').addClass("present"); 
} else if(currentHour > 14){
    $('#5').addClass("past");
};

if(currentHour === 15){
    $('#6').addClass("present"); 
} else if(currentHour > 15){
    $('#6').addClass("past");
};

if(currentHour === 16){
    $('#7').addClass("present"); 
} else if(currentHour > 16){
    $('#7').addClass("past");
};

if(currentHour === 17){
    $('#8').addClass("present"); 
} else if(currentHour > 17){
    $('#8').addClass("past");
};




// Function to use localStorage to set appointments that will not disappear when the page is 
// reloaded.
// function savePlan() {
//     var plan = {
//         comment:comment.value.trim()
//     };
//     localStorage.setItem("plan", JSON.stringify(plan));



saveButton.on("click", function(){
        // document.getElementById("")
        console.log($(this).parent().previousSibling);
    });




