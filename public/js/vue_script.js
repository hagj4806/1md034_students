var socket = io();
function menuItem(name, kCal, containsGluten, containsLactose, img) {
  this.name = name;
  this.kCal = kCal;
  this.containsGluten = containsGluten;
  this.containsLactose = containsLactose;
  this.img = img;
  this.getName = funtion() {
    return "name: " + this.name + ", kCal: " + this.kCal;
  }
}

var menuArray = [];
for (i = 0; i < food.length; i++) {
    menuArray[i] = new MenuItem(food[i].name, food[i].kCal, food[i].lactose, food[i].gluten, food[i].img);
}

var vm = new Vue({
    el:'Burger',
    data: {
        selBurger: "Select your burger " + Date(),
        selBurg: "Select your Burger"
        burgtext: "This is where you execute burger selection",
        menuArray: menuArray

    }
});


