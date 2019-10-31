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

  $("#star-wars-form input").on("submit", function () {
    let radioValue = document.querySelector('input[name = radioOption1]:checked').value;
    if (radioValue === "correct") {
      correctAnswer = correctAnswer + 1;
      $("#correct-answer").text(correctAnswer);
    } else if (radioValue === "option1" || "option2" || "option3" || "option4" && radioValue !== "correct") {
      incorrectAnswer = incorrectAnswer + 1;
      $("#incorrect-answer").text(incorrectAnswer);
    }
  });

  $("#star-wars-form input").on("click", function () {
    let radioValue2 = document.querySelector('input[name = radioOption2]:checked').value;
    if (radioValue2 === "correct") {
      correctAnswer = correctAnswer;
      $("#correct-answer").text(correctAnswer);
    } else if (radioValue2 === "option1" || "option2" || "option3" || "option4" && radioValue2 !== "correct") {
      incorrectAnswer = incorrectAnswer;
      $("#incorrect-answer").text(incorrectAnswer);
    }
  });

  $("#star-wars-form input").on("click", function () {
    let radioValue3 = document.querySelector('input[name = radioOption3]:checked').value;
    if (radioValue3 === "correct") {
      correctAnswer = correctAnswer;
      $("#correct-answer").text(correctAnswer);
    } else if (radioValue3 === "option1" || "option2" || "option3" || "option4" && radioValue3 !== "correct") {
      incorrectAnswer = incorrectAnswer;
      $("#incorrect-answer").text(incorrectAnswer);
    }
  });

  $("#star-wars-form input").on("click", function () {
    let radioValue4 = document.querySelector('input[name = radioOption4]:checked').value;
    if (radioValue4 === "correct") {
      correctAnswer = correctAnswer;
      $("#correct-answer").text(correctAnswer);
    } else if (radioValue4 === "option1" || "option2" || "option3" || "option4" && radioValue4 !== "correct") {
      incorrectAnswer = incorrectAnswer;
      $("#incorrect-answer").text(incorrectAnswer);
    }
  });

  $("#star-wars-form input").on("click", function () {
    let radioValue5 = document.querySelector('input[name = radioOption5]:checked').value;
    if (radioValue5 === "correct") {
      correctAnswer = correctAnswer;
      $("#correct-answer").text(correctAnswer);
    } else if (radioValue5 === "option1" || "option2" || "option3" || "option4" && radioValue5 !== "correct") {
      incorrectAnswer = incorrectAnswer;
      $("#incorrect-answer").text(incorrectAnswer);
    }
  });

  $("#star-wars-form input").on("click", function () {
    let radioValue6 = document.querySelector('input[name = radioOption6]:checked').value;
    if (radioValue6 === "correct") {
      correctAnswer = correctAnswer;
      $("#correct-answer").text(correctAnswer);
    } else if (radioValue6 === "option1" || "option2" || "option3" || "option4" && radioValue6 !== "correct") {
      incorrectAnswer = incorrectAnswer;
      $("#incorrect-answer").text(incorrectAnswer);
    }
  });

  $("#star-wars-form input").on("click", function () {
    let radioValue7 = document.querySelector('input[name = radioOption7]:checked').value;
    if (radioValue7 === "correct") {
      correctAnswer = correctAnswer;
      $("#correct-answer").text(correctAnswer);
    } else if (radioValue7 === "option1" || "option2" || "option3" || "option4" && radioValue7 !== "correct") {
      incorrectAnswer = incorrectAnswer;
      $("#incorrect-answer").text(incorrectAnswer);
    }
  });

  $("#star-wars-form input").on("click", function () {
    let radioValue8 = document.querySelector('input[name = radioOption8]:checked').value;
    if (radioValue8 === "correct") {
      correctAnswer = correctAnswer;
      $("#correct-answer").text(correctAnswer);
    } else if (radioValue8 === "option1" || "option2" || "option3" || "option4" && radioValue8 !== "correct") {
      incorrectAnswer = incorrectAnswer;
      $("#incorrect-answer").text(incorrectAnswer);
    }
  });


});

