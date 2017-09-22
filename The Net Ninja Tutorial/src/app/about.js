var React = require('react');
import {Link} from 'react-router-dom';
/**
 * React Tutorial #12 - Routing
 */

// Import css for this component
require('./css/addItems.css');

// Create TodoItem Component
var About = React.createClass({
    render: function () {
        return (
            <div>
                <Link to={'/'}>Home</Link>
                <h2>All about me</h2>
            </div>
        );
    },
    handleSubmit: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = About;