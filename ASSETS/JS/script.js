// Time Variables 

// Current Day Variable
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

// Code Reads Hours in Military Time
var currentHour = Number(currentDay.format('H'));

setInterval(function () {
    currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY"));
}, 1000);

// -------------------------------------------------------------------

// If Statements to Color Code Hour Blocks 
// Green = Future
// Red = Present Hour
// Gray = Past

// 9 AM
if(currentHour === 9){   
    $("#0").addClass("present");
} else if(currentHour > 9){
    $("#0").addClass("past");
};

// 10 AM
if(currentHour === 10){
    $('#1').addClass("present"); 
} else if(currentHour > 10){
    $('#1').addClass("past");
};

// 11 AM
if(currentHour === 11){
    $('#2').addClass("present"); 
} else if(currentHour > 11){
    $('#2').addClass("past");
};

// 12 PM
if(currentHour === 12){
    $('#3').addClass("present"); 
} else if(currentHour > 12){
    $('#3').addClass("past");
};

// 1 PM
if(currentHour === 13){
    $('#4').addClass("present"); 
} else if(currentHour > 13){
    $('#4').addClass("past");
};

// 2 PM
if(currentHour === 14){
    $('#5').addClass("present"); 
} else if(currentHour > 14){
    $('#5').addClass("past");
};

// 3 PM
if(currentHour === 15){
    $('#6').addClass("present"); 
} else if(currentHour > 15){
    $('#6').addClass("past");
};

// 4 PM
if(currentHour === 16){
    $('#7').addClass("present"); 
} else if(currentHour > 16){
    $('#7').addClass("past");
};

// 5 PM
if(currentHour === 17){
    $('#8').addClass("present"); 
} else if(currentHour > 17){
    $('#8').addClass("past");
};
//---------------------------------------------

// Save Buttons and Local Storage


// 9 AM Save Button & Local Storage Function
$("#button-0").click(function() {
    var input9Am = document.getElementById("0").value;
    localStorage.setItem("9am", JSON.stringify(input9Am));
})
// 9 AM getItem Function
var output9Am = JSON.parse(localStorage.getItem("9am"));
document.getElementById("0").value = output9Am;


// 10 AM Save Button & Local Storage Function
$("#button-1").click(function() {
    var input10Am = document.getElementById("1").value;
    localStorage.setItem("10am", JSON.stringify(input10Am));
})
// 10 AM getItem Function
var output10Am = JSON.parse(localStorage.getItem("10am"));
document.getElementById("1").value = output10Am;


// 11 AM Save Button & Local Storage Function
$("#button-2").click(function() {
    var input11Am = document.getElementById("2").value;
    localStorage.setItem("11am", JSON.stringify(input11Am));
})
// 11 AM getItem Function
var output11Am = JSON.parse(localStorage.getItem("11am"));
document.getElementById("2").value = output11Am;


// 12 PM Save Button & Local Storage Function
$("#button-3").click(function() {
    var input12Pm = document.getElementById("3").value;
    localStorage.setItem("12pm", JSON.stringify(input12Pm));
})
// 12 PM getItem Function
var output12Pm = JSON.parse(localStorage.getItem("12pm"));
document.getElementById("3").value = output12Pm;


// 1 PM Save Button & Local Storage Function
$("#button-4").click(function() {
    var input1Pm = document.getElementById("4").value;
    localStorage.setItem("1pm", JSON.stringify(input1Pm));
})
// 1 PM getItem Function
var output1Pm = JSON.parse(localStorage.getItem("1pm"));
document.getElementById("4").value = output1Pm;


// 2 PM Save Button & Local Storage Function
$("#button-5").click(function() {
    var input2Pm = document.getElementById("5").value;
    localStorage.setItem("2pm", JSON.stringify(input2Pm));
})
// 1 PM getItem Function
var output2Pm = JSON.parse(localStorage.getItem("2pm"));
document.getElementById("5").value = output2Pm;


// 3 PM Save Button & Local Storage Function
$("#button-6").click(function() {
    var input3Pm = document.getElementById("6").value;
    localStorage.setItem("3pm", JSON.stringify(input3Pm));
})
// 3 PM getItem Function
var output3Pm = JSON.parse(localStorage.getItem("3pm"));
document.getElementById("6").value = output3Pm;


// 4 PM Save Button & Local Storage Function
$("#button-7").click(function() {
    var input4Pm = document.getElementById("7").value;
    localStorage.setItem("4pm", JSON.stringify(input4Pm));
})
// 4 PM getItem Function
var output4Pm = JSON.parse(localStorage.getItem("4pm"));
document.getElementById("7").value = output4Pm;


// 5 PM Save Button & Local Storage Function
$("#button-8").click(function() {
    var input5Pm = document.getElementById("8").value;
    localStorage.setItem("5pm", JSON.stringify(input5Pm));
})
// 5 PM getItem Function
var output5Pm = JSON.parse(localStorage.getItem("5pm"));
document.getElementById("8").value = output5Pm;