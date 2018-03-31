'use strict';

var count = 0;
var someId = "myIdHere";
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    console.log('minusOne');
};
var reset = function reset() {
    console.log('reset');
};
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { id: someId, className: 'button', onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { className: 'button', onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { className: 'button', onClick: reset },
        'Reset'
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
