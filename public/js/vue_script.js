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

function answer() {
    var ansArray = [document.getElementById('Full name').value, document.getElementById('Email').value, document.getElementById('Street').value, document.getElementById('House').value,document.getElementById('payment').value, document.querySelector("input[name=gender]:checked").value];
    if (document.querySelector("input[name=selBurger]:checked") !=null) {
        var tmp = document.getElementsByName('selBurger');
        for (i = 0; i < tmp.length; i++) {
            if (tmp[i].checked){
                ansArray[ansArray.length] = tmp[i].value;
            }
        }
    }
    return ansArray;
}

var buttonPress = new Vue ({
    el: '#Order',
    data: {
        output: null,
        orders: {},
        orderId: -1,
        burgers: null,
    },
    methods: {
        markDone: function () {
            var arr = answer();
            var burgers = [];
            var string = "Name: " + arr[0] + ", Email: " + arr[1] + ", Street: " + arr[2] + "House: " + arr[3] + "Payment option: " + arr[4] + ", Gender: " + arr[5];
            if (arr.length==6) {
                burgers = burgers + "None";
            }
            else {
                for (i = 6; i <= arr.length-2; i++) {
                    burgers  = burgers + arr[i] +", ";
                }
                burgers = burgers + arr[i] + ".";
            }

            this.output = string;
            this.burgers = burgers;
        },
        addOrder: function (event) {
            if (this.orders[0] == undefined) {

            }
            else {
            this.orderId = this.orderId + 1;
             var arr = answer();
            this.orderInfo = [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5]];
            var string = [];
             if (arr.length==6) {
                string = [];
            }
            else {
                var x = 0;
                for (i = 6; i <= arr.length-1; i++) {
                    string[x]  = arr[i];
                    x++;
                }
            }
            this.orders[0].orderItems = string;
            this.orders[0].orderId = this.orderId;
            this.orders[0].orderInfo = this.orderInfo;
            socket.emit('addOrder', this.orders[0] );
            this.markDone();
            }
    },
         displayOrder: function (event) {
          var offset = {x: event.currentTarget.getBoundingClientRect().left,
                        y: event.currentTarget.getBoundingClientRect().top};
             Vue.set(this.orders,0,  {orderId: 0,
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y },
                                      orderItems: [],
                                      orderInfo: []
                                     });
         }
    }
});
