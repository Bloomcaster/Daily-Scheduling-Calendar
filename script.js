/* this time display is an id so not sure why the # is not working on the code. look into*/
var timeDisplayEl = $('#time-display');
/*
var saveBtn = $('.saveBtn');*/

var currentTime = moment().format("LLLL");
$("#currentDay").text(moment().format("LLLL"));

//this function is for the past/present/future time blocks in planner for color coding, make sure to use a number for parsing
function colorCode() {
  var hour = moment().hours();
  $(".time-block").each(function () {
    var timeNow = parseInt($(this).attr("id").split("hour")[1]);

    if (timeNow < hour) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } else if (hour ===  timeNow) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else   {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
colorCode();
var interval = setInterval(colorCode, 15000)
/*so that the buttons save the information in the fields*/
$(".saveBtn").on("click", function () {
  var timePlan = $(this).parent().attr("id");
  var planText = $(this).siblings(".plans").val();
  localStorage.setItem(timePlan, planText);
});

function getPlan() {
  $(".hour").each(function () {
    var timeNow = $(this).text();
    var planInfo = localStorage.getItem(timeNow);
   

    if (planInfo !== null) {
      $(this).siblings(".plans").val(planInfo);
    }
  });
}

$("8-hour .plans").val(localStorage.getItem(""))
$("9-hour .plans").val(localStorage.getItem("timePlan"))
$("10-hour .plans").val(localStorage.getItem("timePlan"))
$("11-hour .plans").val(localStorage.getItem("timePlan"))
$("12-hour .plans").val(localStorage.getItem("timePlan"))
$("13-hour .plans").val(localStorage.getItem("timePlan"))
$("14-hour .plans").val(localStorage.getItem("timePlan"))
$("15-hour .plans").val(localStorage.getItem("timePlan"))
$("16-hour .plans").val(localStorage.getItem("timePlan"))
$("17-hour .plans").val(localStorage.getItem("timePlan"))
$("18-hour .plans").val(localStorage.getItem("timePlan"))
$("19-hour .plans").val(localStorage.getItem("timePlan"))
$("20-hour .plans").val(localStorage.getItem("timePlan"))

getPlan();
