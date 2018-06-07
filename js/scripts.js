// BUSINESS LOGIC

function onesPlace(ones){
  var underTen;
  var singleI = "I";
  var singleV = "V";
  var singleX = "X";
  if (ones <= 3) {
    underTen = singleI.repeat(ones);
  } else if (ones === 4){
    underTen = singleI + singleV;
  } else if (ones === 5){
    underTen = singleV;
  } else if (ones <= 8 && ones > 5){
    underTen = singleV + singleI.repeat(ones - 5);
  } else if (ones === 9){
    underTen = singleI + singleX;
  } else if (ones === 10){
    underTen = singleX;
  }
  console.log(underTen);
  underTen = "";
}

function tensPlace(tens){
  var underHundred;
  var singleX = "X";
  var singleL = "L";
  var singleC = "C";

  if (tens <= 3) {
    underHundred = singleX.repeat(tens);
  } else if (tens === 4){
    underHundred = singleX + singleL;
  } else if (tens === 5){
    underHundred = singleL;
  } else if (tens <= 8 && tens > 5){
    underHundred = singleL + singleX.repeat(tens - 5);
  } else if (tens === 9){
    underHundred = singleX + singleC;
  } else if (tens === 10){
    underHundred = singleC;
  }
  console.log(underHundred);
  underHundred = "";
}

function hundredsPlace(hundreds){
  var underThousand;
  var singleC = "C";
  var singleD = "D";
  var singleM = "M";

  if (hundreds <= 3) {
    underThousand = singleC.repeat(hundreds);
  } else if (hundreds === 4){
    underThousand = singleC + singleD;
  } else if (hundreds === 5){
    underThousand = singleD;
  } else if (hundreds <= 8 && hundreds > 5){
    underThousand = singleD + singleM.repeat(hundreds - 5);
  } else if (hundreds === 9){
    underThousand = singleC + singleM;
  } else if (hundreds === 10){
    underThousand = singleM;
  }
  console.log(underThousand);
  underThousand = "";
}

function thousandsPlace(thousands){
  var underTenThousand;
  var singleM = "M";
  var bigV = "<span class='big-letter'>V</span>";
  var bigX = "<span class='big-letter'>X</span>";

  if (thousands <= 3) {
    underTenThousand = singleM.repeat(thousands);
  } else if (thousands === 4){
    underTenThousand = singleM + bigV;
  } else if (thousands === 5){
    underTenThousand = bigV;
  } else if (thousands <= 8 && thousands > 5){
    underTenThousand = bigV + bigX.repeat(thousands - 5);
  } else if (thousands === 9){
    underTenThousand = singleM + bigX;
  } else if (thousands === 10){
    underTenThousand = bigX;
  }
  console.log(underTenThousand);
  underTenThousand = "";
}



// USER INTERFACE LOGIC
$(function(){

  $("#submit-button").click(function(event){
    event.preventDefault();
    var userInput = parseInt($("#user-input").val());
    var userOnes = "this will be the ones place number after we split the number into places"
    var userTens = "this will be the tens place number after we split the number into places"
    var userHundreds = "this will be the hundreds place number after we split the number into places"
    var userThousands = "this will be the thousands place number after we split the number into places"
    
    onesPlace(userOnes);
    tensPlace(userTens);
    hundredsPlace(userHundreds);
    thousandsPlace(userThousands);

  });


});
