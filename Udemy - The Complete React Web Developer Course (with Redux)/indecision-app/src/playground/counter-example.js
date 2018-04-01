let count = 0;
const someId = "myIdHere";
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne', count);
};
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne', count);
};
const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset', count);
}

var appRoot = document.getElementById('app');
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button id={someId} className="button" onClick={addOne}>+1</button>
            <button className="button" onClick={minusOne}>-1</button>
            <button className="button" onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();