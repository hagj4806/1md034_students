/*function menuItem(name, kcal, containsGluten, containsLactos, img) {
    this.name= name;
    this.kcal=kcal;
    this.containsGluten = containsGluten;
    this.containsLactos= containsLactos;
    this.img = img;
    this.getName = function () {
        return "Name: " + this.name + ", kCal:  " + this.kcal;
    }
}
*/
/*
var vm = new Vue({
    el:'#menu',
    data: {
        menu: menu,
        name: ,
        email: ,
        street: ,
        house: ,
        payment: ,
        gender: ,

      },
      methods: {
        markDone: function() {

        }
      }
});
*/

const button = new Vue({
    el: '#Button',
    methods: {
        markDone: function() {
          console.log(document.querySelector("input[name=check]:checked"))
          var ans = [];
          var ch = document.getElementsByName("check");
          for(i = 0; i < ch.length; i++)
            if(ch[i].checked) {
              ans[ans.length] = ch[i].value
            }
            document.getElementById("select").innerHTML = ans;
        }
    }
});


/*
let burger1 = new menuItem('Vegan', '500 kCal', false, true, "https://www.santamariaworld.com/optimized/recipe-large/globalassets/_recipes/bbq/kentucky_burger.jpg?id=2357");
let burger2 = new menuItem('Veg', '600 kCal', false, true, "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/07/best-black-bean-burgers-2.jpg");
let burger3 = new menuItem('Meat', '400 kCal', false, false, "https://www.wearesovegan.com/wp-content/uploads/2019/07/veganburger-h1-1170x1645.jpg");
let burger4 = new menuItem('Umami', '800 kCal', false, true, "https://www.fsrmagazine.com/sites/default/files/styles/story_image_720x430/public/2019-11/SBE.jpg?itok=QyswJQdq");
let burger5 = new menuItem('Halloumi', '100 kCal', false, false, "https://bigseventravel.com/wp-content/uploads/2019/03/Screenshot-2019-03-21-at-15.12.44.png");


var menu = [burger1, burger2, burger3, burger4, burger5]
*/

const vm = new Vue ({
	el: '#burger',
  data: {
  	menu: menu,
    name: "",
    email: "",
    street: "",
    house: "",
    payment: "",
    gender: "",

  },
  methods: {
    markDone: function() {

    }

  },

})

/*
  in html
<script src="https://vuejs.org/js/vue.js"></script>
<div id="burger">
    <h1>Välj en burgare</h1>
    <div v-for="burger in menu">
   {{ burger.name() }}
    <span v-if="burger.containsGluten" >
    contains gluten
    </span>
      <span v-if="burger.containsLactose" >
    contains lactose
    </span>
   </div>
*/
