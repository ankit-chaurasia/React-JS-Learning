let count = 0;
const someId = "myIdHere";
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('reset');
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button id={someId} className="button" onClick={addOne}>+1</button>
        <button className="button" onClick={minusOne}>-1</button>
        <button className="button" onClick={reset}>Reset</button>
    </div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);