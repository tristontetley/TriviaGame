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
  };
  let correctAnswer = 0;
  let incorrectAnswer = 0;
  let noAnswer = 8;

  $("#star-wars-form input").on("click", function () {
    let radioValue = document.querySelector('input[name = radioOption1]:checked').value;
    console.log(radioValue);
    if (radioValue === correct) {
      correctAnswer++;
    } else if (radioValue != correct) {
      incorrectAnswer++;
      noAnswer--;
    }
  });

  $("#star-wars-form input").on("click", function () {
    let radioValue = document.querySelector('input[name = radioOption2]:checked').value;
    console.log(radioValue);

  });

  $("#star-wars-form input").on("click", function () {
    let radioValue = document.querySelector('input[name = radioOption3]:checked').value;
    console.log(radioValue);

  });

  $("#star-wars-form input").on("click", function () {
    let radioValue = document.querySelector('input[name = radioOption4]:checked').value;
    console.log(radioValue);

  });

  $("#star-wars-form input").on("click", function () {
    let radioValue = document.querySelector('input[name = radioOption5]:checked').value;
    console.log(radioValue);

  });

  $("#star-wars-form input").on("click", function () {
    let radioValue = document.querySelector('input[name = radioOption6]:checked').value;
    console.log(radioValue);

  });

  $("#star-wars-form input").on("click", function () {
    let radioValue = document.querySelector('input[name = radioOption7]:checked').value;
    console.log(radioValue);

  });

  $("#star-wars-form input").on("click", function () {
    let radioValue = document.querySelector('input[name = radioOption8]:checked').value;
    console.log(radioValue);

  });

});

// $("input:checked", "#star-wars-form").value;