$(document).ready(function () {

  $("#trivia-content").hide();
  $("#results-heading").hide();



  $("#start-button").on("click", function () {
    $("#trivia-content").show();
    $("#starting-heading").hide();
    timeLeft();

  });

  let correctAnswer = 0;
  let incorrectAnswer = 0;
  let noAnswer = 8;

  $("#finish-button").on("click", function () {
    const answers = $('input:checked');
    console.log(answers);
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].value === 'correct') {
        correctAnswer++;
      } else {
        incorrectAnswer++;
      }
    }

    noAnswer = noAnswer - correctAnswer - incorrectAnswer;

    $("#correct-answer").text(correctAnswer);
    $("#incorrect-answer").text(incorrectAnswer);
    $("#unanswered-question").text(noAnswer);
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

  // $("#star-wars-form input").on("submit", function () {
  //   let radioValue = document.querySelector('input:checked').value;
  //   if (radioValue === "correct") {
  //     correctAnswer = correctAnswer + 1;
  //     $("#correct-answer").text(correctAnswer);
  //   } if (radioValue === "option1" || "option2" || "option3" || "option4" && radioValue !== "correct") {
  //     incorrectAnswer = incorrectAnswer + 1;
  //     $("#incorrect-answer").text(incorrectAnswer);
  //   }
  // });

  // $("#star-wars-form input").on("click", function () {
  //   let radioValue2 = document.querySelector('input:checked').value;
  //   if (radioValue2 === "correct") {
  //     correctAnswer = correctAnswer;
  //     $("#correct-answer").text(correctAnswer);
  //   } if (radioValue2 === "option1" || "option2" || "option3" || "option4" && radioValue2 !== "correct") {
  //     incorrectAnswer = incorrectAnswer;
  //     $("#incorrect-answer").text(incorrectAnswer);
  //   }
  // });

  // $("#star-wars-form input").on("click", function () {
  //   let radioValue3 = document.querySelector('input:checked').value;
  //   if (radioValue3 === "correct") {
  //     correctAnswer = correctAnswer;
  //     $("#correct-answer").text(correctAnswer);
  //   } if (radioValue3 === "option1" || "option2" || "option3" || "option4" && radioValue3 !== "correct") {
  //     incorrectAnswer = incorrectAnswer;
  //     $("#incorrect-answer").text(incorrectAnswer);
  //   }
  // });

  // $("#star-wars-form input").on("click", function () {
  //   let radioValue4 = document.querySelector('input:checked').value;
  //   if (radioValue4 === "correct") {
  //     correctAnswer = correctAnswer;
  //     $("#correct-answer").text(correctAnswer);
  //   } if (radioValue4 === "option1" || "option2" || "option3" || "option4" && radioValue4 !== "correct") {
  //     incorrectAnswer = incorrectAnswer;
  //     $("#incorrect-answer").text(incorrectAnswer);
  //   }
  // });

  // $("#star-wars-form input").on("click", function () {
  //   let radioValue5 = document.querySelector('input:checked').value;
  //   if (radioValue5 === "correct") {
  //     correctAnswer = correctAnswer;
  //     $("#correct-answer").text(correctAnswer);
  //   } if (radioValue5 === "option1" || "option2" || "option3" || "option4" && radioValue5 !== "correct") {
  //     incorrectAnswer = incorrectAnswer;
  //     $("#incorrect-answer").text(incorrectAnswer);
  //   }
  // });

  // $("#star-wars-form input").on("click", function () {
  //   let radioValue6 = document.querySelector('input:checked').value;
  //   if (radioValue6 === "correct") {
  //     correctAnswer = correctAnswer;
  //     $("#correct-answer").text(correctAnswer);
  //   } if (radioValue6 === "option1" || "option2" || "option3" || "option4" && radioValue6 !== "correct") {
  //     incorrectAnswer = incorrectAnswer;
  //     $("#incorrect-answer").text(incorrectAnswer);
  //   }
  // });

  // $("#star-wars-form input").on("click", function () {
  //   let radioValue7 = document.querySelector('input:checked').value;
  //   if (radioValue7 === "correct") {
  //     correctAnswer = correctAnswer;
  //     $("#correct-answer").text(correctAnswer);
  //   } if (radioValue7 === "option1" || "option2" || "option3" || "option4" && radioValue7 !== "correct") {
  //     incorrectAnswer = incorrectAnswer;
  //     $("#incorrect-answer").text(incorrectAnswer);
  //   }
  // });

  // $("#star-wars-form input").on("click", function () {
  //   let radioValue8 = document.querySelector('input:checked').value;
  //   if (radioValue8 === "correct") {
  //     correctAnswer = correctAnswer;
  //     $("#correct-answer").text(correctAnswer);
  //   } if (radioValue8 === "option1" || "option2" || "option3" || "option4" && radioValue8 !== "correct") {
  //     incorrectAnswer = incorrectAnswer;
  //     $("#incorrect-answer").text(incorrectAnswer);
  //   }
  // });


});

