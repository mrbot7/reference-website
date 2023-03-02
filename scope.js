// The variable, num, below has global scope because it is declared in the root (main area) of the .js file
var num = 12;

printText();
//Global Variable ^


function printText() {
  // The variable, text, below has local scope because it is defined within the {} of the if statement.
  // This variable only exists within this if statement
  var text = "The number is greater than 10";

  // When we try to use the variable everything is okay, because we're in the same scope
  console.log(text);
}
//Local Variable ^ 

// Uncomment console.log(text); below
//console.log(text);
// When you try to use the variable outside the scope it was defined, you get an "Uncaught Reference Error"
// An "reference error" means we tried to "refer" to a variable that doesn't exist in this scope. 
// text is a local variable inside the printText() function because that is where it was defined so it doesn't
// exist outside of the scope of that function.

// Uncomment console.log(num); below
//console.log(num);
// num is a global variable because it was declared in the root of the .js file




/************************** Excercise ******************************/
// Use a comment to identify every variable and parameter below as local or global

// Global Variable
var userName;

function promptForName(){
  // local
  var first = prompt("Enter your first name");
  // local
  var last = prompt("Enter your last name");
  //global
  userName = first + " " + last;
}

function greet(name){
  //local
  alert("Hello " + name);
}

//global
var age;
function promptForAge(){
  //global
  age = prompt("Enter your age");
} 