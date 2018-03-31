"use strict";

// ES5 functions
var square = function square(x) {
    return x * x;
};
console.log(square(8));
// ES6 Arrow functions
var squareArrow = function squareArrow(x) {
    return x * x;
};
console.log("Arrow Function:" + squareArrow(8));
