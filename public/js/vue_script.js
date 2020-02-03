/*const vm = new Vue ({
el: '#myID',
data: {
	burger1: burger1,
  burger2: burger2,

},
})
*/

function MenuItem(name, kcal, containsGluten, containsLactos, img) {
    this.name= name;
    this.kcal=kcal;
    this.containsGluten = containsGluten;
    this.containsLactos= containsLactos;
    this.img = img;
    this.getName = function () {
        return "Name: " + this.name + ", kCal:  " + this.kcal;
    }
}

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

/*   in html
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



