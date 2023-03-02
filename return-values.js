// Start function for the example will run when the test button is clicked
function example(){
  var area1 = areaOfRect(20, 50);
  var area2 = areaOfRect(40, 80);
  alert(area1 + area2);
}

function areaOfRect(length, width){
  var area = length * width;
  return area;
}


// Start function for problem 1
function problem1() {
  var isEven1 = isEven(13);
  alert(isEven1);
}
function isEven(num){
  var num = num % 2;
  if(num == 0) {
    return true;
  }else{
    return false;
  }
}



// Start function for problem 2
function problem2() {
  alert(min(10,20));
  alert(min(57, -1));
}
function min(num, num1){
  if (num < num1){
    return num;
  }else{
    return num1;
  }
}
