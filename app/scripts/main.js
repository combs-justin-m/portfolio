'use strict';

$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});

var today = new Date();
var hour = today.getHours();
var greeting;

if (hour > 18) {
    greeting = '<i class="fa fa-moon-o"></i>Good Evening' ;
} else if (hour > 12) {
    greeting = '<i class="fa fa-sun-o"></i>Good Afternoon' ;
} else if (hour > 0) {
    greeting = '<i class="fa fa-coffee"></i>Good Morning' ;
} else {
    greeting = 'Welcome';
}

document.getElementById('datejs').innerHTML = greeting;