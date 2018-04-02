class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['One', 'Two']
        };
    }
    handleDeleteOptions() {
        this.setState(()=>{
            return {
                options: []
            };
        });
    }

    handlePick() {
        const randonNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randonNum];
        alert(option);
    }

    render() {
        const title = "Indecision App";
        const subTitle = 'Put your life in the hands of a computer.';
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action hasOption={!!this.state.options.length} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} />
                <AddOption />
            </div>
        );
    }    
}

class Header extends React.Component {
    
    render(){
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    // handlePick() {
    //     alert('handlePick');
    // }

    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOption}>
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }

    // handleRemoveAll() {
    //     console.log('handleAllRemove: ' + this.props.options); // 'this' is no longer refers to our class instance
    //     // To fix above issue, we can use bind method
    // }

    render() {
        return (  
            <div>
                {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */}
                { /*<button onClick={this.handleRemoveAll}>Remove All</button>*/ }
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {'Options Length: ' + this.props.options.length} {
                    this.props.options.length && this.props.options.map((optionText) => <Option key={optionText} optionText={optionText} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            console.log(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));