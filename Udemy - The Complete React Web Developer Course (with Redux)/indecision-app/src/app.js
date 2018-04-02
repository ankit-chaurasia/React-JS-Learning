const obj = {
    name: 'Ankit',
    getName() {
        return this.name;
    }
};
console.log(obj.getName());
const getNameNew = obj.getName.bind(obj);
console.log("getNameNew: " + getNameNew());

class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App";
        const subTitle = 'Put your life in the hands of a computer.';
        const  options = ['One', 'Two'];
        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
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
    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log('handleAllRemove: ' + this.props.options); // 'this' is no longer refers to our class instance
        // To fix above issue, we can use bind method
    }

    render() {
        return (  
            <div>
                {/* <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button> */}
                <button onClick={this.handleRemoveAll}>Remove All</button>
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