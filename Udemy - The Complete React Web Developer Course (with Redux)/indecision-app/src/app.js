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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (  
            <div>
                Options component here
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
    render() {
        return (
            <div>
                Add Options component here
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));