
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY, h:mm:ss a"));

var currentHour = Number(currentDay.format('H'));



setInterval(function () {
    currentDay = moment();
    $("#currentDay").text(currentDay.format("dddd, MMMM Do YYYY"));
    // currentHour = moment().hour();
    // classUpdater();
}, 1000);



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


$("#button-0").click(function() {
    var input9Am = document.getElementById("0").value;
    localStorage.setItem("9am", JSON.stringify(input9Am));
})

var output9Am = JSON.parse(localStorage.getItem("9am"));
document.getElementById("0").value = output9Am;


$("#button-1").click(function() {
    var input10Am = document.getElementById("1").value;
    localStorage.setItem("10am", JSON.stringify(input10Am));
})

var output10Am = JSON.parse(localStorage.getItem("10am"));
document.getElementById("1").value = output10Am;




