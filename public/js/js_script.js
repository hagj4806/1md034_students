function menuItem(name, kCal, containsGluten, containsLactose, img) {
  this.name = name;
  this.kCal = kCal;
  this.containsGluten = containsGluten;
  this.containsLactose = containsLactose;
  this.img = img;
  this.getName = function() {
    return this.name + ' '  + this.kCal +' ' + this.containsGluten + ' '+ this.containsLactose;
  };
}

let burger1 = new menuItem('vegan', '500', 'true', 'false');
let burger2 = new menuItem('veg', '600', 'true', 'false');
let burger3 = new menuItem('meat', '400', 'true', 'false');
let burger4 = new menuItem('umami', '800', 'true', 'false');
let burger5 = new menuItem('halloumi', '100', 'true', 'false');

document.getElementById("myID").innerHTML = "Välj en burgare";

var burgerOne = document.createElement("p");
burgerOne.innerHTML = burger1.getName();
document.getElementById("myID").appendChild(burgerOne);

var burgerTwo = document.createElement("p");
burgerTwo.innerHTML = burger2.getName();
document.getElementById("myID").appendChild(burgerTwo);

var burgerThree = document.createElement("p");
burgerThree.innerHTML = burger3.getName();
document.getElementById("myID").appendChild(burgerThree);

var burgerFour = document.createElement("p");
burgerFour.innerHTML = burger4.getName();
document.getElementById("myID").appendChild(burgerFour);

var burgerFive = document.createElement("p");
burgerFive.innerHTML = burger5.getName();
document.getElementById("myID").appendChild(burgerFive);

var menu = [burger1, burger2, burger3, burger4, burger5]
var myElement = document.getElementById("myID");
for (var burgers of menu)
{

if(burgers.containsLactose == 'true' && burgers.containsGluten == 'true'){
        let listItem = document.createElement("li");
        listItem.innerHTML = burgers.getName() + ' ' + "contains lactose and gluten"
        myElement.appendChild(listItem);
        }

        else if(burgers.containsGluten == 'true') {
        let listItem = document.createElement("li");
        listItem.innerHTML = burgers.getName() + ' ' + "contains gluten"
        myElement.appendChild(listItem);

      }

        else if(burgers.containsLactose == 'true') {
        let listItem = document.createElement("li");
        listItem.innerHTML = burgers.getName() + ' ' + "contains lactose"
        myElement.appendChild(listItem);
        }


        else {
        let listItem = document.createElement("li");
        listItem.innerHTML = burgers.getName();
        myElement.appendChild(listItem);
        }       
}


