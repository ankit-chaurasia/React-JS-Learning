console.log("app.js is running");

// JSX - JavaScript XML
var template = React.createElement(
    "h1",
    {"id": "someid"},
    "Hello World!!"
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);