
/* this time display is an id so not sure why the # is not working on the code. look into*/
var timeDisplayEl = $('#time-display');
var saveBtn = $('.saveBtn');









    var currentTime = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
   $('#currentDay').html(currentTime); 
  
  //this function is for the past/present/future time blocks in planner
function colorCode() {
  var hour = moment().hour();
  $(".time-block").each(function() {
    var timeNow = parseInt($(this).attr("id").split("hour")[1]);

    if (hour< timeNow) {
      $(this).addClass(".past").removeClass("past present");
    }
    else if (hour > timeNow) {
      $(this).addClass(".future").removeClass("past future")
    }
    else if (hour === timeNow) {
    $(this).addClass(".present").removeClss("past future")
  }
})
};
colorCode();


saveBtn.on("click", function() {
 var timePlan = $(this).siblings(".hour").text();
  var planText = $(this).siblings(".description").val();
  localStorage.setItem(timePlan, planText);
});

function getPlan() {
$(".hour").each(function() {
  var timeNow =$(this).text();
  var planInfo = localStorage.getItem(timeNow);

  if(planInfo !==null) {
    $(this).siblings(".description").val(planInfo);
  }
});
}

getPlan();