// ES5 functions
const square = function(x){
    return x*x;
};
console.log(square(8));
// ES6 Arrow functions
const squareArrow = (x) => x*x;
console.log("Arrow Function:" + squareArrow(8));