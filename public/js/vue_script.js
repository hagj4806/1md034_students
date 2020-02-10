function menuItem(name, kcal, containsGluten, containsLactos, img) {
    this.name= name;
    this.kcal=kcal;
    this.containsGluten = containsGluten;
    this.containsLactos= containsLactos;
    this.img = img;
    this.getName = function () {
        return "Name: " + this.name + ", kCal:  " + this.kcal;
    }
}
var menu = [];
for (i = 0; i < food.length; i++) {
    menu[i] = new menuItem(food[i].name, food[i].kCal, food[i].lactose, food[i].gluten, food[i].img);
}

var vm = new Vue({
    el:'#menu',
    data: {
        selectBurg: "Select Burger " + Date(),
        selBurg: "Select Burger",
        burgtext: "This is where you execute burger selection",
        menu: menu

    }
});

let food = [
    {
        "name": "The Vegan Burger",
        "kCal": 750,
        "lactose": false,
        "gluten": false,
        "img": "https://www.wearesovegan.com/wp-content/uploads/2019/07/veganburger-h1-1170x1645.jpg"
    },
    {
        "name": "The Veg Burger",
        "kCal": 800,
        "lactose": false,
        "gluten": true,
        "img": "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg"
    },
    {
        "name": "The Meat Burger",
        "kCal": 1300,
        "lactose": true,
        "gluten": true,
        "img": "https://www.santamariaworld.com/optimized/recipe-large/globalassets/_recipes/bbq/kentucky_burger.jpg?id=2357"
    },

    {
        "name": "Umami Burger",
        "kCal": 900,
        "lactose": true,
        "gluten": true,
        "img": "https://www.fsrmagazine.com/sites/default/files/styles/story_image_720x430/public/2019-11/SBE.jpg?itok=QyswJQdq"
    },

    {
        "name": "Stockholm Burger",
        "kCal": 120000,
        "lactose": true,
        "gluten": false,
        "img": "https://bigseventravel.com/wp-content/uploads/2019/03/Screenshot-2019-03-21-at-15.12.44.png"
    }



]


/*const vm = new Vue ({
el: '#myID',
data: {
	burger1: burger1,
  burger2: burger2,

},
})
*/
/*

let burger1 = new menuItem('Vegan', '500', true, true);
let burger2 = new menuItem('Veg', '600', true, false);
let burger3 = new menuItem('Meat', '400', false, false);
let burger4 = new menuItem('Umami', '800', true, true);
let burger5 = new menuItem('Halloumi', '100', true, false);


var menu = [burger1, burger2, burger3, burger4, burger5]

const vm = new Vue ({
	el: '#burger',
  data: {
  	menu: menu
  },


})

  in html
<script src="https://vuejs.org/js/vue.js"></script>
<div id="burger">
    <h1>Välj en burgare</h1>
    <div v-for="burger in menu">
   {{ burger.getName() }}
    <span v-if="burger.containsGluten" >
    contains gluten
    </span>
      <span v-if="burger.containsLactose" >
    contains lactose
    </span>
   </div>
*/
