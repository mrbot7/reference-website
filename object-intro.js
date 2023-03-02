/* When the script file is loaded, execution automatically begins at the top of the file */
console.log("Hello world");

/* player description
var player =  {
  name: "Steve",
  health: 100,
  inventory: "axe",
  showInfo: function() {
    console.log(this.name + " has " + this.health + " health and an " + this.inventory);
  },
  takeDamage: function(){
    this.health -= 15;
  }
}


    Example property and method access/ changinmg the value
player.showInfo();
player.health = 50;
player.showInfo();
player.takeDamage();
player.showInfo();

    Two ways to complete the same goal
console.log(player["inventory"]);
console.log(player.inventory); */


var pizza = {
  size: "large",
  toppings: "pepperoni and jalapeno",
  cost: 11.95,
  showInfo: function() {
    console.log("A " + this.size + " with " + this.toppings + " is " + this.cost);
  },
  coupon: function(){
    this.cost -= 2;
  }
}
pizza.showInfo();

var student = {
  firstName: "Cristian",
  lastName: "Lopez",
  age: 15,
  grade: 10,
  matric: 1011191001,
  showInfo: function(){
    console.log(this.firstName +" "+ this.lastName + " age: " + this.age + " grade: " + this.grade + " matric: " + this.matric);
  }
}
student.showInfo();