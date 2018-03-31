console.log("app.js is running");

// JSX - JavaScript XML
// var template = React.createElement(
//     "h1",
//     {"id": "someid"},
//     "Hello World!!"
// );
var template = (
    <div>
        <p>This is JSX from app.js Does this change</p>
        <h2>This is some info</h2>
    </div>
);

var userName = "Ankit Chaurasia";
var userAge = 26;
var templateTwo = (
    <div>
        <h1>{userName + "!!"}</h1>
        <p>Age: {userAge}</p>
        <p>Location: Hyderabad</p>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);