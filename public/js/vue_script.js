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

	      socket.emit('addOrder', {
	        orderId: this.getNext(),

	        details: this.details,

	        orderItems: this.check,
					person: {
						name: this.name,
						email: this.email,
						payment: this.payment,
						gender: this.gender,
					 }
	      });
	    },
	    displayOrder: function(event){

	      let offset = {
	        x: event.currentTarget.getBoundingClientRect().left,
	        y: event.currentTarget.getBoundingClientRect().top,
	      };

				this.details = {
						x: event.clientX - 10 - offset.x,
						y: event.clientY - 10 - offset.y
				};
			}
		}
	});
