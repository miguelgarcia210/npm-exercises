"use strict";
import $ from 'jquery'
// import {item, thing} from './practice.js'
import {item as eggs, thing} from './practice.js' // added an alias to item
import {niceMessage} from './say-hello.js'

// console.log(niceMessage());
console.log(niceMessage());

// const {item,thing} = require('./practice.js');
// const $ = require('jquery');
// const cart = require('./practice');

// const sayHello = () => ("hello");

// sayHello();


// $("body").css("background-color", "lightcyan").html(`<h1>${sayHello()}</h1>`);

// Only usable if const cart is uncommented
// console.log(cart.item.color);
// console.log(cart.thing.weight);

// console.log(item.color);
console.log(eggs.color);
console.log(thing.weight);
