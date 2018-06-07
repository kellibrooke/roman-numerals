// BUSINESS LOGIC





// USER INTERFACE LOGIC
$(function(){

  $("#submit-button").click(function(event){
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    var underTen;
    var singleI = "I";
    var singleV = "V";
    var singleX = "X";
    if (userInput <= 3) {
      underTen = singleI.repeat(userInput);
    } else if (userInput === 4){
      underTen = singleI + singleV;
    } else if (userInput === 5){
      underTen = singleV;
    } else if (userInput <= 8 && userInput > 5){
      underTen = singleV + singleI.repeat(userInput - 5);
    } else if (userInput === 9){
      underTen = singleI + singleX;
    } else if (userInput === 10){
      underTen = singleX;
    }
    console.log(underTen);
    underTen = "";

  });


});
