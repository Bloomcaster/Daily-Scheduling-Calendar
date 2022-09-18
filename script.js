var timeDisplayEl = $('#time-display');
var saveBtn = $(".saveBtn");









    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
   $("#currentDay").html(currentTime);
  
  //this function is for the past/present/future time blocks in planner
function colorCode() {
  var hour = moment().hour();
  $(".time-block").each(function() {
    var timeNow = parseInt($(this).attr("id").split("hour")[1]);

    if (hour< timeNow) {
      $(this).addClass("future").removeClass("past present");
    }
    else if (hour > timeNow) {
      $(this).addClass("present").removeClass("past future")
    }
  })
};
colorCode();

