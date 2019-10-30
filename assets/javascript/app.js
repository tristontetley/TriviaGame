$(document).ready(function () {

  $("#trivia-content").hide();
  $("#results-heading").hide();



  $("#start-button").on("click", function () {
    $("#trivia-content").show();
    $("#starting-heading").hide();
    timeLeft();

  })

  $("#finish-button").on("click", function () {
    $("#results-heading").show();
    $("#trivia-content").hide();
    clearInterval(intervalId);
  })

  let intervalId;
  let time = 10;

  function timeLeft() {
    intvalId = setInterval(count, 1000);
  };

  function count() {
    time--;
    console.log(time);
    $("#time-left").text(time);
    if(time === 0 ) {
      clearInterval(intervalId);
      $("#results-heading").show();
      $("#trivia-content").hide();
    };
  };




})