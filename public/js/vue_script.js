/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */
'use strict';
const socket = io();

/* eslint-disable-next-line no-unused-vars */
const vm = new Vue ({
	el: '#whole',
  data: {
  	menu: menu,
    name: "",
    email: "",
    payment: "",
    gender: "",
    order: {details: {x: 0, y:0}},
		details: {x: 0, y:0},
		counter: 0,
		check: [],

  },

  methods: {

    markDone: function() {

         console.log(this.check);

        },


    getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      return ++this.counter;
    },
    addOrder: function() {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
			 let offset = {
				 x: event.currentTarget.getBoundingClientRect().left,
				 y: event.currentTarget.getBoundingClientRect().top,
			 };

      socket.emit('addOrder', {
        orderId: this.getNext(),

        details: {
					x: this.details.x - 10,
					y: this.details.y - 10,
				},

        orderItems: this.check,
      });
    },
    displayOrder: function(event){

      let offset = {

        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
			this.order = {
				orderId: this.getNext(),
				details: {
					x: event.clientX - 10 - offset.x,
					y: event.clientY - 10 - offset.y,
				},
				orderItems: [],
				orderInfo: [],

			};
		},
	},
});
