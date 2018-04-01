'use strict';

var appRoot = document.getElementById('app');
var visibility = false;
var toggleVisibility = function toggleVisibility(e) {
    visibility = !visibility;
    render();
};
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        'Visibility Toggle',
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Show Details' : 'Hide Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Hey, these are some details you can now see!!'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
render();
