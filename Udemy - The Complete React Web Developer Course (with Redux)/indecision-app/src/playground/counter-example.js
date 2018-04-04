// let count = 0;
// const someId = "myIdHere";
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     console.log('addOne', count);
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     console.log('minusOne', count);
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
//     console.log('reset', count);
// }

// var appRoot = document.getElementById('app');
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={someId} className="button" onClick={addOne}>+1</button>
//             <button className="button" onClick={minusOne}>-1</button>
//             <button className="button" onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp();

// Adding State to Counter App Part I
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count // Step1: Set default state values
        };
    }

    componentDidMount() {
        try {
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
            console.log('JSON.parse(json): ' + count);
            if(!isNaN(count)) {
                this.setState(()=> ({count}));
            }
        } catch (e) {
            console.log('Error while saving data in local storage');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
            console.log('Save data!!');
        }
    }

    handleAddOne() {
        // Step3: Change state value bases on event
        // this.state.count++;
        // If you directly update state value then component do not re render state value
        // use this.setState to manipulate state values
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
        console.log(this.state);
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
        console.log(this.count);
    }

    handleReset() {
        this.setState((prevState) => {
            return {
                count: 0
            };
        });
        console.log(this.count);
    }

    render() {
        return (
            <div>
            {/* Step2: Render component with default state value*/}
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
};

ReactDOM.render(<Counter />, document.getElementById('app'));