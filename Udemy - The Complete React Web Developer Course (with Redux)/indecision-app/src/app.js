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
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}
var user = {
    userName: "Ankit Chaurasia",
    userAge: 26,
    location: "Hyderabad"
};

var templateTwo = (
    <div>
        <h1>{user.userName ? user.userName : 'Anonymous'}</h1>
        {(user.userAge && user.userAge>= 18) && <p>Age: {user.userAge}</p>}
        {getLocation(user.location)}
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);