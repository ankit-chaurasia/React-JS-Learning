class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }

    /**
     * Component Lifecycle Methods
     */

     /**
      * invoked immediately after a component is mounted to the DOM
      */
    componentDidMount() {
        console.log('componentDidMount');
    }

    /**
     * Fires after the component updates (When props or state values get changed)
     * Gives two parameter prevProps and prevState
     */
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    /**
     * Called when a component is being removed from the DOM
     */
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleDeleteOptions() {
        this.setState(()=> ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => optionToRemove !== option)
            };
        });
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exist.'
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }

    handlePick() {
        const randonNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randonNum];
        alert(option);
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header subTitle={subTitle}/>
                <Action hasOption={!!this.state.options.length} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }    
}

IndecisionApp.defaultProps = {
    options: []
};

// class Header extends React.Component {
//     render(){
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// }

const Header = (props) => {
    console.log(props);
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subTitle && <h2>{props.subTitle }</h2>}
            </div>
        );
};

Header.defaultProps = {
    title: 'Indecision App'
};

// class Action extends React.Component {
//     // handlePick() {
//     //     alert('handlePick');
//     // }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick} disabled={!this.props.hasOption}>
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOption}>
                What should I do?
            </button>
        </div>
    );
};

// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }

//     // handleRemoveAll() {
//     //     console.log('handleAllRemove: ' + this.props.options); // 'this' is no longer refers to our class instance
//     //     // To fix above issue, we can use bind method
//     // }

//     render() {
//         return (  
//             <div>
//                 {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */}
//                 { /*<button onClick={this.handleRemoveAll}>Remove All</button>*/ }
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {'Options Length: ' + this.props.options.length} {
//                     this.props.options.length && this.props.options.map((optionText) => <Option key={optionText} optionText={optionText} />)
//                 }
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (  
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {'Options Length: ' + props.options.length} {
                props.options.length && props.options.map((optionText) => <Option key={optionText} optionText={optionText} handleDeleteOption={props.handleDeleteOption} />)
            }
        </div>
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         );
//     }
// }

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button onClick={ (e) => {
                props.handleDeleteOption(props.optionText);
            }
            }>
                Remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));