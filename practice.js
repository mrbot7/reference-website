// Problem #1
function minToSec(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log(minToSec(1));
console.log(minToSec(5));

// Problem #2
function lessThan100(num, num1){
  sum = num + num1
  if(sum > 100){
    return false;
  }else{
    return true;
  }
}

console.log(lessThan100(10, 50));
console.log(lessThan100(70, 50));

//Problem #3
function areaOfTriangle(length, width){
  var area = length * width * 0.5;
  return area;
}
 console.log(areaOfTriangle(6, 10));

// Problem #4
function nextEven(num){
  var numEven = num
  if(num % 2 == 0){
    numEven = num * 2;
  }else{
    numEven = num * 1;
    return numEven;
  }
}
console.log(nextEven(12));
console.log(nextEven(4));

// Problem #5 
function ageInSeconds(age){
  var sec = age * 60 * 60 * 24 * 365;
  return sec; 
}
console.log(ageInSeconds(15));

// Problem #6
function power(base, exponent){
  let result = 1;
  for (var i = 0; i < exponent; i++){
    result *= base;
  }
  return result;
}

console.log(power(10, 2));

// Problem #7
function remainder(a, b){
  return a % b;
}

console.log(remainder(7, 3));

// Problem #8
function bBallScore(one, two){
 var score =(one * 2) + (two * 3);
 return score;
  
}

console.log(bBallScore(10, 7));

// Problem #9
function footballScore(touchDowns, fieldGoals){
  var scoree = (touchDowns * 7) + (fieldGoals * 3);
  return scoree;
}

console.log(footballScore(2, 1));

// Problem #10
function countLegs(chickLegs, cowLegs, pigLegs){
  var chickTotal = chickLegs * 2;
  var cowTotal = cowLegs * 4;
  var pigTotal = pigLegs * 4;
  var legTotal = chickTotal + cowTotal + pigTotal;
}

console.log(countLegs(3, 1, 2));