'use strict';

var count = 0;
var someId = "myIdHere";
var addOne = function addOne() {
    count++;
    renderCounterApp();
    console.log('addOne', count);
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
    console.log('minusOne', count);
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
    console.log('reset', count);
};

var appRoot = document.getElementById('app');
var renderCounterApp = function renderCounterApp() {
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
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
