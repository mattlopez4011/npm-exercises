const $ = require('jquery');
import {sayHello, hi}  from './say-hello.js';

$('body').css('background', 'blue');

console.log(sayHello());
console.log(hi);

// let sayHello = () => console.log('hello');
//
//
// sayHello();
