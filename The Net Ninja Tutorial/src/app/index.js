var React = require('react');
var ReactDOM =require('react-dom');

// Create component
var ToDoComponent = React.createClass({
    render: function(){
        return(
            <h1>Hello</h1>
        );
    }
});

// Put component into html page
ReactDOM.render(<ToDoComponent/>, document.getElementById('todo-wrapper'));

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Ankit" />;
ReactDOM.render(
  element,
  document.getElementById('myName')
);