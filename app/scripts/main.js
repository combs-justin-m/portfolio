'use strict';

$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});

var today = new Date();
var hour = today.getHours();
var greeting;

if (hour > 18) {
    greeting = 'Good Evening.' ;
} else if (hour > 12) {
    greeting = 'Good Afternoon.' ;
} else if (hour > 0) {
    greeting = 'Good Morning.' ;
} else {
    greeting = 'Welcome.';
}

document.getElementById('datejs').innerHTML = greeting;