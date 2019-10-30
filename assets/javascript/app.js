$(document).ready(function () {

  $("#trivia-content").hide();
  $("#results-heading").hide();



  $("#start-button").on("click", function () {
    $("#trivia-content").show();
    $("#starting-heading").hide();
    timeLeft();

  });

  $("#finish-button").on("click", function () {
    $("#results-heading").show();
    $("#trivia-content").hide();
    clearInterval(intervalId);
  });

  let intervalId;
  let time = 80;

  function timeLeft() {
    intervalId = setInterval(count, 1000);
  }

  function count() {
    time--;
    console.log(time);
    $("#time-left").text(time);
    if (time === 0) {
      clearInterval(intervalId);
      $("#results-heading").show();
      $("#trivia-content").hide();
    }
  }

  const correct = $(".correct")
  let correctAnswer = 0;
  let incorrectAnswer = 0;
  let noAnswer = 8;

  // $("#star-wars-form input").on("click", function () {
  //   $("input[type=radio]:checked", "#star-wars-form");
  //   noAnswer--;
  //   $("#unanswered-question").text(noAnswer);
    
  // });
$("#star-wars-form").click(function () {
  $(".form-check-label").prop("checked", true);
  console.log("hello");
});

//   $(".form-check-label").click(function () { 
//     $(".correct").prop("checked", true);
//     console.log("close");
// });


})