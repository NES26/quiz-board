
  
var quizResults = function(one, two, three, four, five, six) {
  return one + two + three + four;
};

$(document).ready(function() {
  $("#btn1").click(function() {
    $("#form1").show();

  });

  $(".initially-showing").submit(function(event) {
    var Question1 = parseInt($("input:radio[name=Question1]:checked").val());
    if ($("input:radio[name=Question1]:checked").val() === undefined) {
      $("#q1").text("Please give an answer");
      return false;
    }
    var Question2 = parseInt($("input:radio[name=Question2]:checked").val());
    if ($("input:radio[name=Question2]:checked").val() === undefined) {
      $("#q2").text("Please give an answer");
      return false;
    }
    var Question3 = parseInt($("input:radio[name=Question3]:checked").val());
    if ($("input:radio[name=Question3]:checked").val() === undefined) {
      $("#q3").text("Please give an answer");
      return false;
    }
    var Question4 = parseInt($("input:radio[name=Question4]:checked").val());
    if ($("input:radio[name=Question4]:checked").val() === undefined) {
      $("#q4").text("Please give an answer");
      return false;
    }
    var Question5 = parseInt($("input:radio[name=Question5]:checked").val());
    if ($("input:radio[name=Question5]:checked").val() === undefined) {
      $("#q5").text("Please give an answer");
      return false;
    }
    var Question6 = parseInt($("input:radio[name=Question6]:checked").val());
    if ($("input:radio[name=Question6]:checked").val() === undefined) {
      $("#q6").text("Please give an answer");
      return false;
    }
    var result = quizResults(
      Question1,
      Question2,
      Question3,
      Question4,
    );
    var resultScore = parseInt(quiz1)+parseInt(quiz2)+parseInt(quiz3)+parseInt(quiz4);
    $("#finish").text("You SCored: " + resultScore + " out of 100");


    $(".display").text("You scored:" + result + " /30");

    $(".finalResults").show();

    event.preventDefault();
    $(".initially-showing").fadeOut();
  });
  $("#reset").click(function() {
    location.reload(); 
  });
});
