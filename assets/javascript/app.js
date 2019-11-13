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
});


