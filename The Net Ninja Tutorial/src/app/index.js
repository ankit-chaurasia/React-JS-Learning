/**
 * React Tutorial #3 - Components
 */

var React = require('react');
var ReactDOM = require('react-dom');

// // Create component
// var ToDoComponent = React.createClass({
//     render: function () {
//         return (
//             <h1>Hello</h1>
//         );
//     }
// });

// // Put component into html page
// ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Ankit" />;
// ReactDOM.render(
//     element,
//     document.getElementById('myName')
// );

/**
 * React Tutorial #4 - Props
 */

// var ToDoComponent = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <p><strong>Cheese Name:</strong>{this.props.cheese.name}</p>
//                 <p><strong>Smell Factor:</strong>{this.props.cheese.smellFactor}</p>
//                 <p><strong>Price:</strong>{this.props.cheese.price}</p>
//             </div>
//         );
//     }
// });
// var myCheese = { name: 'Camembert', smellFactor: 'Extreme pong', price: '3.50' };
// // Put component into html page
// ReactDOM.render(<ToDoComponent msg="i like cheese" cheese={myCheese} />, document.getElementById('todo-wrapper'));

/**
 * React Tutorial #5 -State
 */

// var ToDoComponent = React.createClass({
//     getInitialState: function(){
//         return {
//             todos: ['wash up', 'eat some cheese', 'take a nap'],
//             age: 30
//         }
//     },
//     render: function () {
//         var ager = setTimeout(function(){
//             this.setState({
//                 age: 35
//             });
//         }.bind(this), 5000);
//         return (
//             <div id="todo-list">
//                 <p>The busiest people have the most leisure</p>
//                 <p>Age: {this.state.age}</p>
//                 <ul>
//                     <li>{this.state.todos[0]}</li>
//                     <li>{this.state.todos[1]}</li>
//                     <li>{this.state.todos[2]}</li>
//                 </ul>
//             </div>
//         );
//     }
// });

// // Put component into html page
// ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));

/**
 * React Tutorial #6 - Cyling Through Data
 */

// var ToDoComponent = React.createClass({
//     getInitialState: function(){
//         return {
//             todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
//         }
//     },
//     render: function () {
//         var todos = this.state.todos;
//         todos = todos.map((item, index) => {
//             return (<li>{item}</li>)
//         })
//         return (
//             <div id="todo-list">
//                 <p>The busiest people have the most leisure</p>
//                 <p>Age: {this.state.age}</p>
//                 <ul>
//                     {todos}
//                 </ul>
//             </div>
//         );
//     }
// });

// // Put component into html page
// ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));

/**
 * React Tutorial #7 - Nesting Components
 */

// var ToDoComponent = React.createClass({
//     getInitialState: function(){
//         return {
//             todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
//         }
//     },
//     render: function () {
//         var todos = this.state.todos;
//         todos = todos.map((item, index) => {
//             return (<TodoItems item = {item} key = {index}/>)
//         })
//         return (
//             <div id="todo-list">
//                 <ul>
//                     {todos}
//                 </ul>
//             </div>
//         );
//     }
// });

// // Create TodoItem Component
// var TodoItems = React.createClass({
//     render: function(){
//         return (
//             <li>
//                 <div className="todo-item">
//                     <span className="item-name">{this.props.item}</span>
//                 </div>
//             </li>
//         );
//     }
// })

// // Put component into html page
// ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));


/**
 * React Tutorial #8 - Handling Events
 */

// var ToDoComponent = React.createClass({
//     getInitialState: function(){
//         return {
//             todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
//         }
//     },
//     render: function () {
//         var todos = this.state.todos;
//         todos = todos.map((item, index) => {
//             return (<TodoItems item = {item} key = {index} onDelete={this.onDelete}/>)
//         });
//         return (
//             <div id="todo-list">
//                 <p onClick={this.clicked}>The busiest people have the most leisure</p>
//                 <ul>
//                     {todos}
//                 </ul>
//             </div>
//         );
//     },
//     clicked: function(){
//         console.log("you clicked me");
//     },
//     onDelete: function(item){
//         var updateTodos = this.state.todos.filter((val, index) => item !== val);
//         this.setState({
//             todos: updateTodos
//         });
//     }
// });

// // Create TodoItem Component
// var TodoItems = React.createClass({
//     render: function(){
//         return (
//             <li>
//                 <div className="todo-item">
//                     <span className="item-name">{this.props.item}</span>
//                     <span className="item-delete" onClick={this.handleDelete}> X</span>
//                 </div>
//             </li>
//         );
//     },
//     handleDelete: function(){
//         // We will send from this component to parent component
//         this.props.onDelete(this.props.item);
//     }
// })

// // Put component into html page
// ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));

/**
 * React Tutorial #9 Modularizing Code
 */

require('./css/index.css');

// // Module required
// var TodoItems = require('./todoItems')
// var AddItems = require('./addItems');
// var ToDoComponent = React.createClass({
//     getInitialState: function () {
//         return {
//             todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
//         }
//     },
//     render: function () {
//         var todos = this.state.todos;
//         todos = todos.map((item, index) => {
//             return (<TodoItems item={item} key={index} onDelete={this.onDelete} />)
//         });
//         return (
//             <div id="todo-list">
//                 <p onClick={this.clicked}>The busiest people have the most leisure</p>
//                 <ul>
//                     {todos}
//                 </ul>
//                 <AddItems onAdd={this.onAdd}/>
//             </div>
//         );
//     },
//     clicked: function () {
//         console.log("you clicked me");
//     },
//     onDelete: function (item) {
//         var updateTodos = this.state.todos.filter((val, index) => item !== val);
//         this.setState({
//             todos: updateTodos
//         });
//     },
//     onAdd: function(item){
//         var updatedTodos = this.state.todos;
//         updatedTodos.push(item);
//         this.setState({
//             todos: updatedTodos
//         });
//     }
// });


// Put component into html page
// ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));


/**
 * React Tutorial #11 Component Life-cycle Methos
 */

//  // Module required
// var TodoItems = require('./todoItems')
// var AddItems = require('./addItems');
// var ToDoComponent = React.createClass({
//     getInitialState: function () {
//         return {
//             todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
//         }
//     },
//     render: function () {
//         var todos = this.state.todos;
//         todos = todos.map((item, index) => {
//             return (<TodoItems item={item} key={index} onDelete={this.onDelete} />)
//         });
//         return (
//             <div id="todo-list">
//                 <p onClick={this.clicked}>The busiest people have the most leisure</p>
//                 <ul>
//                     {todos}
//                 </ul>
//                 <AddItems onAdd={this.onAdd}/>
//             </div>
//         );
//     },
//     clicked: function () {
//         console.log("you clicked me");
//     },
//     onDelete: function (item) {
//         var updateTodos = this.state.todos.filter((val, index) => item !== val);
//         this.setState({
//             todos: updateTodos
//         });
//     },
//     onAdd: function(item){
//         var updatedTodos = this.state.todos;
//         updatedTodos.push(item);
//         this.setState({
//             todos: updatedTodos
//         });
//     },

//     // Life-cycle functions
//     componentWillMount: function(){
//         // Executes just before render method
//         console.log("componentWillMount");
//     },
//     componentDidMount: function(){
//         // Executes just after render method
//         console.log("componentDidMount");
//         // Good place for grabbing any external data
//     },
//     componentWillUpdate: function(){
//         // Executes if there is a change in dom
//         console.log("componentWillUpdate");
//     }
// });

// // Put component into html page
// ReactDOM.render(<ToDoComponent />, document.getElementById('todo-wrapper'));


/**
 * React Routing
 */

import { BrowserRouter, Route, Link } from 'react-router-dom'

// Module required
var TodoItems = require('./todoItems')
var AddItems = require('./addItems');
var About = require('./about');

var ToDoComponent = React.createClass({
    getInitialState: function () {
        return {
            todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers']
        }
    },
    render: function () {
        var todos = this.state.todos;
        todos = todos.map((item, index) => {
            return (<TodoItems item={item} key={index} onDelete={this.onDelete} />)
        });
        return (
            <div id="todo-list">
                <Link to={'/about'}>About</Link>
                <p onClick={this.clicked}>The busiest people have the most leisure</p>
                <ul>
                    {todos}
                </ul>
                <AddItems onAdd={this.onAdd} />
            </div>
        );
    },
    clicked: function () {
        console.log("you clicked me");
    },
    onDelete: function (item) {
        var updateTodos = this.state.todos.filter((val, index) => item !== val);
        this.setState({
            todos: updateTodos
        });
    },
    onAdd: function (item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        });
    },

    // Life-cycle functions
    componentWillMount: function () {
        // Executes just before render method
        console.log("componentWillMount");
    },
    componentDidMount: function () {
        // Executes just after render method
        console.log("componentDidMount");
        // Good place for grabbing any external data
    },
    componentWillUpdate: function () {
        // Executes if there is a change in dom
        console.log("componentWillUpdate");
    }
});

const App = () => (
    <BrowserRouter>
        <div className="primary-layout">
            <Route path="/" exact component={ToDoComponent} />
            <Route path="/about" component={About} />
        </div>
    </BrowserRouter>
)

// Put component into html page
ReactDOM.render(<App />, document.getElementById('todo-wrapper'));